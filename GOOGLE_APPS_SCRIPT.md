# Configuración Oficial de Google Apps Script - Rosarios Peruanos & Somos Marketing Perú EIRL

Este archivo contiene el código oficial y la guía paso a paso de **Google Apps Script** para integrar la gestión de **Pedidos Mayoristas en Google Sheets**, el guardado automático de **Órdenes de Compra en Google Drive**, el envío de correos automáticos por **Gmail** y la recepción del **Libro de Reclamaciones Virtual** de conformidad con INDECOPI.

---

## 📋 Guía de Configuración Paso a Paso

1. Abra su hoja de cálculo de Google Sheets donde recopilará sus pedidos y reclamaciones.
2. Vaya al menú superior: **Extensiones** &rarr; **Apps Script** (o cree el proyecto directamente en [script.google.com](https://script.google.com)).
3. Borre todo el código existente en el archivo `Código.gs`.
4. Copie y pegue el **Código Oficial** que se encuentra a continuación.
5. Verifique la variable `SPREADSHEET_ID`: coloque el ID de su Google Sheet o déjela como `""` para que el script cree una hoja nueva llamada **"Pedidos y Reclamaciones - Rosarios Peruanos"** en su Google Drive.
6. Configure la variable `SECRET_KEY` si desea una clave personalizada (por defecto: `RP2026-SOMOS-MKT-PERU-SECURE-9k2x`).
7. Haga clic en **Implementar** (esquina superior derecha) &rarr; **Nueva implementación**.
8. Seleccione Tipo: **Aplicación web**.
9. Configuración:
   * **Ejecutar como:** `Yo (tu correo)`
   * **Quién tiene acceso:** `Cualquiera (Anyone)`
11. Pegue esa URL en el archivo de configuración del frontend (`js/main.js` en la variable `APPS_SCRIPT_URL`).
    * URL Actual Configurada: `https://script.google.com/macros/s/AKfycbygU8iUN8jogpq9ZycqO36MqV18zS7oW23SOATu0n7vfBuY66nGvG2j_OD3_yPXZeP9/exec`

---

## 💻 Código Oficial (`Código.gs`)

```javascript
/**
 * Google Apps Script - Rosarios Peruanos
 * Administrado por: Somos Marketing Perú EIRL
 * ========================================================
 * 1. Guarda pedidos mayoristas en Google Sheets y Drive.
 * 2. Recibe e independiza reclamaciones (Libro de Reclamaciones).
 * 3. Notifica por Gmail al Administrador y al Cliente.
 */

var CONFIG = {
  SPREADSHEET_ID   : "1ck7-t6wiPSeW1DrqbzArPTR7ZiVIJhhxeNsQG2rdMjk", 
  DRIVE_FOLDER_NAME: "Órdenes y Reclamos Rosarios Peruanos",
  EMPRESA_NOMBRE   : "Rosarios Peruanos / Somos Marketing Perú EIRL",
  ADMIN_EMAIL      : "contacto@rosariosperuanos.com",
  SECRET_KEY       : "RP2026-SOMOS-MKT-PERU-SECURE-9k2x"
};

function doPost(e) {
  if (e === undefined || !e.postData || !e.postData.contents) {
    Logger.log("[GAS BACKEND - SOMOS MARKETING PERÚ] ❌ Petición recibida sin contenido válido");
    return responderJSON({ success: false, message: "No se recibieron datos válidos" });
  }

  try {
    var payload = JSON.parse(e.postData.contents);
    Logger.log("[GAS BACKEND - SOMOS MARKETING PERÚ] 🚀 Petición POST recibida | Tipo: " + (payload.type || "pedido_mayorista") + " | Cliente: " + (payload.buyerName || payload.nombre || "Anónimo"));
    
    // Validar clave secreta si es enviada
    if (payload.secretKey && payload.secretKey !== CONFIG.SECRET_KEY) {
      Logger.log("[GAS BACKEND] ⛔ Acceso denegado: Secret Key inválida");
      return responderJSON({ success: false, message: "Acceso no autorizado" });
    }

    var ss = obtenerOSistemaSpreadsheet();
    if (!ss) {
      Logger.log("[GAS BACKEND] ❌ Error accediendo a Google Sheets");
      return responderJSON({ success: false, message: "No se pudo acceder a Google Sheets" });
    }

    // Identificar el tipo de solicitud
    if (payload.type === "lookupOrder" || payload.action === "lookupOrder") {
      Logger.log("[GAS BACKEND] 🔍 Buscando datos de Orden N° " + payload.orderId);
      return consultarOrdenEnSheets(payload, ss);
    } else if (payload.type === "claim" || payload.isClaim) {
      Logger.log("[GAS BACKEND] 📑 Procesando Reclamación INDECOPI...");
      return procesarReclamo(payload, ss);
    } else if (payload.type === "cancelOrder" || payload.action === "cancelOrder") {
      Logger.log("[GAS BACKEND] 🚫 Procesando Cancelación de Orden N° " + payload.orderId);
      return procesarCancelacionPedido(payload, ss);
    } else {
      Logger.log("[GAS BACKEND] 📦 Procesando Pedido Mayorista N° " + payload.orderId);
      return procesarPedidoMayorista(payload, ss);
    }

  } catch (error) {
    Logger.log("[GAS BACKEND] 💥 Error en la ejecución: " + error.toString());
    return responderJSON({ success: false, message: "Error interno: " + error.toString() });
  }
}

/**
 * Consulta y devuelve la información actualizada en tiempo real de una Orden desde Google Sheets
 */
function consultarOrdenEnSheets(payload, ss) {
  var sheet = ss.getSheetByName("Pedidos");
  if (!sheet) {
    return responderJSON({ success: false, message: "No se encontró la base de datos de Pedidos" });
  }

  var searchId = (payload.orderId || "").toString().trim().toUpperCase();
  var searchDoc = (payload.buyerRuc || payload.doc || payload.dni || "").toString().trim();

  if (!searchId) {
    return responderJSON({ success: false, message: "Debe ingresar el Número de Orden de Compra" });
  }

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var rowId = (data[i][1] || "").toString().trim().toUpperCase();
    var rowDoc = (data[i][3] || "").toString().trim();
    
    if (rowId === searchId) {
      if (searchDoc !== "" && rowDoc !== searchDoc && searchDoc !== "ADMIN") {
        return responderJSON({ success: false, message: "El DNI/RUC ingresado no coincide con el registro de la Orden N° " + searchId });
      }

      var orderObj = {
        orderId: data[i][1],
        date: data[i][0],
        buyerName: data[i][2],
        buyerRuc: data[i][3],
        buyerPhone: data[i][4],
        buyerEmail: data[i][5],
        deliveryOption: data[i][6],
        buyerAddress: data[i][7],
        totalUnits: parseFloat(data[i][8]) || 0,
        unitPrice: parseFloat(data[i][9]) || 0,
        subtotal: parseFloat(data[i][10]) || 0,
        igvAmount: parseFloat(data[i][11]) || 0,
        shippingFee: parseFloat(data[i][12]) || 0,
        grandTotal: parseFloat(data[i][13]) || 0,
        driveUrl: data[i][14],
        itemsText: data[i][15],
        status: data[i][16] || "REGISTRADO"
      };

      return responderJSON({ success: true, order: orderObj });
    }
  }

  return responderJSON({ success: false, message: "No se encontró ninguna Orden de Compra registrada con el N° " + searchId });
}

function doGet(e) {
  if (e && e.parameter && e.parameter.action === "cancelOrder") {
    var orderId = e.parameter.orderId;
    var ss = obtenerOSistemaSpreadsheet();
    if (ss && orderId) {
      var sheet = ss.getSheetByName("Pedidos");
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          if (data[i][1] === orderId) {
            sheet.getRange(i + 1, 15).setValue("CANCELADO POR EL CLIENTE").setBackground("#fee2e2").setFontColor("#991b1b");
            
            try {
              GmailApp.sendEmail(
                CONFIG.ADMIN_EMAIL, 
                "🚫 Cancelación de Orden de Compra N° " + orderId, 
                "El cliente ha solicitado la cancelación de la Orden N° " + orderId + " desde el botón de su correo."
              );
            } catch(e) {}
            
            return ContentService.createTextOutput(
              "<div style='font-family:sans-serif; text-align:center; padding:3rem; color:#111827;'>" +
              "<h1 style='color:#dc2626;'>🚫 Orden de Compra Cancelada</h1>" +
              "<p style='font-size:1.1rem;'>Su Orden N° <strong>" + orderId + "</strong> ha sido cancelada en el sistema.</p>" +
              "<a href='https://rosariosperuanos.com/' style='display:inline-block; margin-top:1.5rem; background:#a70025; color:white; padding:0.75rem 1.5rem; border-radius:8px; text-decoration:none; font-weight:bold;'>Volver a Rosarios Peruanos</a>" +
              "</div>"
            ).setMimeType(ContentService.MimeType.HTML);
          }
        }
      }
    }
  }
  return ContentService.createTextOutput("Sistema de Gestión Rosarios Peruanos / Somos Marketing Perú EIRL Activo.").setMimeType(ContentService.MimeType.TEXT);
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Procesa y registra un pedido mayorista
 */
function procesarPedidoMayorista(payload, ss) {
  var sheet = ss.getSheetByName("Pedidos");
  if (!sheet) {
    sheet = ss.insertSheet("Pedidos");
    sheet.appendRow([
      "Fecha", "Transacción ID", "Cliente", "DNI/RUC", "Celular", "Correo", 
      "Entrega", "Dirección", "Cant Total", "Precio Unit", "Subtotal (S/.)", 
      "IGV (S/.)", "Envío (S/.)", "Total (S/.)", "PDF Orden Compra", "Productos", "Estado Envíos"
    ]);
    sheet.getRange(1, 1, 1, 17).setFontWeight("bold").setBackground("#a70025").setFontColor("white").setHorizontalAlignment("center");
  }

  var itemsText = "";
  if (payload.items && payload.items.length > 0) {
    itemsText = payload.items.map(function(item) {
      return item.product.name + " (" + item.product.sku + "): " + item.quantity + "u";
    }).join("\n");
  }

  var now = new Date();
  var txId = payload.orderId || payload.transactionId || ("RP-" + now.getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000));
  
  // ── GENERAR PDF EN EL SERVIDOR Y SUBIR A GOOGLE DRIVE ──
  var pdfHtml = construirPDFHTML(payload, txId);
  var pdfBlob = Utilities.newBlob(pdfHtml, MimeType.HTML)
                .setName("OC-RosariosPeruanos-" + txId + ".pdf")
                .getAs(MimeType.PDF);

  var folder = obtenerOCrearCarpeta(CONFIG.DRIVE_FOLDER_NAME);
  var archivo = folder.createFile(pdfBlob);
  archivo.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  var driveUrl = "https://drive.google.com/file/d/" + archivo.getId() + "/view?usp=sharing";

  // Enviar correos y obtener el estado del envío para diagnóstico
  var envioStatus = enviarCorreosPedido(payload, txId, driveUrl, pdfBlob);

  sheet.appendRow([
    now,
    txId,
    payload.buyerName || "",
    payload.buyerRuc || "",
    payload.buyerPhone || "",
    payload.buyerEmail || "",
    payload.deliveryOption === "pickup" ? "Recojo Magdalena" : "Envío Nacional",
    payload.buyerAddress || "",
    payload.totalUnits || 0,
    payload.unitPrice || 0,
    payload.subtotal || 0,
    payload.igvAmount || 0,
    payload.shippingFee || 0,
    payload.grandTotal || 0,
    driveUrl,
    itemsText,
    "Admin: " + envioStatus.admin + " | Cliente: " + envioStatus.customer
  ]);

  try { sheet.autoResizeColumns(1, 17); } catch(colErr) {}

  return responderJSON({ success: true, message: "Pedido registrado con éxito", driveUrl: driveUrl });
}

/**
 * Procesa la anulación de una Orden de Compra desde la Web
 */
function procesarCancelacionPedido(payload, ss) {
  var sheet = ss.getSheetByName("Pedidos");
  if (!sheet) {
    return responderJSON({ success: false, message: "No existe la hoja de Pedidos" });
  }

  var orderId = payload.orderId;
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][1] === orderId) {
      sheet.getRange(i + 1, 15).setValue("CANCELADO POR EL CLIENTE (VÍA WEB)").setBackground("#fee2e2").setFontColor("#991b1b");
      
      try {
        GmailApp.sendEmail(
          CONFIG.ADMIN_EMAIL, 
          "🚫 Cancelación Web de Orden N° " + orderId, 
          "El cliente (" + payload.buyerDoc + ") canceló la Orden N° " + orderId + " desde la web."
        );
      } catch(err) {}

      return responderJSON({ success: true, message: "Orden N° " + orderId + " cancelada exitosamente" });
    }
  }

  return responderJSON({ success: false, message: "No se encontró la Orden N° " + orderId });
}

/**
 * Procesa y registra un reclamo del Libro de Reclamaciones Virtual
 */
function procesarReclamo(payload, ss) {
  var sheet = ss.getSheetByName("Reclamaciones");
  if (!sheet) {
    sheet = ss.insertSheet("Reclamaciones");
    sheet.appendRow([
      "Fecha", "Reclamo N°", "Nombre Completo", "Tipo Doc", "N° Doc", "Teléfono", 
      "Email", "Dirección", "Tipo Solicitud", "Monto Reclamado", "Descripción Bien", "Detalle Reclamo", "Pedido Concreto"
    ]);
    sheet.getRange(1, 1, 1, 13).setFontWeight("bold").setBackground("#1b5eac").setFontColor("white").setHorizontalAlignment("center");
  }

  var now = new Date();
  var claimNo = "LR-RP-" + now.getFullYear() + "-" + (sheet.getLastRow());

  sheet.appendRow([
    now,
    claimNo,
    payload.fullName || "",
    payload.docType || "DNI",
    payload.docNumber || "",
    payload.phone || "",
    payload.email || "",
    payload.address || "",
    payload.claimType || "Reclamo",
    payload.amount || "0.00",
    payload.description || "",
    payload.detail || "",
    payload.request || ""
  ]);

  try { sheet.autoResizeColumns(1, 13); } catch(colErr) {}

  // Notificar al administrador sobre el reclamo registrado
  try {
    GmailApp.sendEmail(
      CONFIG.ADMIN_EMAIL,
      "⚠️ NUEVO RECLAMO REGISTRADO - " + claimNo,
      "Se ha registrado un reclamo de " + payload.fullName + " (" + payload.docNumber + "). Detalle: " + payload.detail
    );
  } catch(e) {}

  return responderJSON({ success: true, message: "Reclamo registrado con éxito", claimNo: claimNo });
}

/**
 * Envió de alertas por correo con PDF adjunto y enlace a Drive
 */
function enviarCorreosPedido(payload, txId, driveUrl, pdfBlob) {
  var status = { admin: "No enviado", customer: "No enviado" };
  var adminEmail = CONFIG.ADMIN_EMAIL;
  var customerEmail = (payload.buyerEmail || payload.email || payload.buyer_email || payload.customerEmail || payload.correo || "").toString().trim();

  Logger.log("[GAS EMAIL] Destinatario Admin: " + adminEmail);
  Logger.log("[GAS EMAIL] Destinatario Cliente: " + customerEmail);

  var productsRows = "";
  if (payload.items && payload.items.length > 0) {
    productsRows = payload.items.map(function(item) {
      var unitPrice = payload.unitPrice || 0;
      var sub = item.quantity * unitPrice;
      return "<tr>" +
             "<td style='padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#1e293b;'>Rosario " + item.product.name + "<br><span style='font-size:11px; color:#64748b; font-weight:normal;'>SKU: " + item.product.sku + "</span></td>" +
             "<td style='padding:10px; border-bottom:1px solid #e2e8f0; text-align:center; font-weight:bold; color:#0f172a;'>" + item.quantity + " u</td>" +
             "<td style='padding:10px; border-bottom:1px solid #e2e8f0; text-align:right; color:#475569;'>S/. " + unitPrice.toFixed(2) + "</td>" +
             "<td style='padding:10px; border-bottom:1px solid #e2e8f0; text-align:right; font-weight:bold; color:#1b5eac;'>S/. " + sub.toFixed(2) + "</td>" +
             "</tr>";
    }).join("");
  }

  var serviceUrl = ScriptApp.getService().getUrl();
  var cancelUrl = serviceUrl + "?action=cancelOrder&orderId=" + encodeURIComponent(txId);
  var waUrl = "https://wa.me/51969654895?text=Hola%20Silvia%20Quispe,%20he%20generado%20mi%20Orden%20de%20Compra%20Mayorista%20N%C2%B0%20" + encodeURIComponent(txId);

  // Email para la administración (Silvia Quispe)
  var adminHtml = 
    "<div style='font-family: Arial, sans-serif; max-width: 650px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 15px rgba(0,0,0,0.08);'>" +
      "<div style='background: #a70025; color: white; padding: 24px; text-align: center; border-bottom: 4px solid #78001b;'>" +
        "<div style='font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #fecaca; margin-bottom: 6px;'>SISTEMA DE VENTAS MAYORISTAS B2B</div>" +
        "<h2 style='margin: 0; font-size: 22px; font-weight: 800;'>NUEVA ORDEN DE COMPRA MAYORISTA</h2>" +
        "<p style='margin: 6px 0 0; font-size: 14px; font-family: monospace;'>Orden ID: " + txId + "</p>" +
      "</div>" +
      "<div style='padding: 25px; color: #334155; line-height: 1.6; font-size: 14px;'>" +
        "<p style='font-size:15px;'>Hola <strong>Silvia Quispe / Somos Marketing Perú</strong>,</p>" +
        "<p>Se ha recibido una nueva Orden de Compra Mayorista generada desde la Landing Page oficial:</p>" +
        "<div style='background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e2e8f0; font-size: 13px;'>" +
          "<table style='width: 100%; border-collapse: collapse;'>" +
            "<tr><td style='padding: 4px 0; color:#64748b;'><strong>Cliente / Razón Social:</strong></td><td style='padding: 4px 0; font-weight:bold; color:#0f172a;'>" + (payload.buyerName || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; color:#64748b;'><strong>RUC / DNI:</strong></td><td style='padding: 4px 0;'>" + (payload.buyerRuc || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; color:#64748b;'><strong>WhatsApp / Teléfono:</strong></td><td style='padding: 4px 0; font-weight:bold; color:#059669;'>" + (payload.buyerPhone || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; color:#64748b;'><strong>Correo Electrónico:</strong></td><td style='padding: 4px 0; font-weight:bold; color:#1d4ed8;'>" + customerEmail + "</td></tr>" +
            "<tr><td style='padding: 4px 0; color:#64748b;'><strong>Modalidad Despacho:</strong></td><td style='padding: 4px 0;'>" + (payload.deliveryOption === "pickup" ? "Recojo en Almacén Magdalena" : "Envío Agencia: " + (payload.buyerAddress || "")) + "</td></tr>" +
          "</table>" +
        "</div>" +
        
        "<!-- Ver PDF en Drive (Admin) -->" +
        "<div style='text-align:center; margin:20px 0;'>" +
          "<a href='" + driveUrl + "' target='_blank' style='background:#1e293b; color:white; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:700; font-size:13px; display:inline-block;'>📄 Abrir PDF de la Orden en Google Drive</a>" +
        "</div>" +
 
        "<h3 style='color: #a70025; font-size: 15px; border-bottom: 2px solid #a70025; padding-bottom: 6px; margin: 20px 0 10px;'>📦 Detalle de Productos Solicitados</h3>" +
        "<table style='width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;'>" +
          "<thead><tr style='background: #f1f5f9; color: #475569; text-align: left;'><th style='padding:8px;'>Producto</th><th style='padding:8px; text-align:center;'>Cant.</th><th style='padding:8px; text-align:right;'>P. Unit</th><th style='padding:8px; text-align:right;'>Subtotal</th></tr></thead>" +
          "<tbody>" + productsRows + "</tbody>" +
        "</table>" +
        "<div style='background: #fdf2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin-top: 15px; font-size: 14px; text-align: right;'>" +
          "<div>Total Unidades: <strong>" + (payload.totalUnits || 0) + " u</strong></div>" +
          "<div style='font-size: 18px; font-weight: 800; color: #a70025; margin-top: 4px;'>TOTAL COMPRA: S/. " + (payload.grandTotal || 0).toFixed(2) + "</div>" +
        "</div>" +
      "</div>" +
      "<!-- Pie de Página Leyes & Confidencialidad -->" +
      "<div style='background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5; text-align: center;'>" +
        "<strong style='color: #334155; font-size: 12px;'>ROSARIOS PERUANOS & SOMOS MARKETING PERÚ EIRL</strong><br>" +
        "Venta y Distribución Mayorista Directa en Todo el Perú · RUC: 20615554384<br>" +
        "Atención Comercial WhatsApp: (+51) 969 654 895 · Magdalena del Mar, Lima, Perú.<br><br>" +
        "<p style='margin: 4px 0; font-size: 10px; color: #94a3b8; text-align: justify;'>" +
          "<strong>⚖️ Cumplimiento Legal y Privacidad (Ley N° 29733):</strong> De conformidad con la Ley N° 29733 de Protección de Datos Personales en el Perú, los datos personales facilitados en este formulario se tratan con estricta confidencialidad y con la única finalidad de procesar el pedido, emitir la documentación comercial correspondiente y coordinar la entrega física." +
        "</p>" +
      "</div>" +
    "</div>";
 
  try {
    GmailApp.sendEmail(adminEmail, "[NUEVA ORDEN B2B] Orden N° " + txId + " - " + (payload.buyerName || "Cliente"), "", {
      htmlBody: adminHtml,
      name: "Rosarios Peruanos Web",
      attachments: [pdfBlob]
    });
    status.admin = "Enviado OK (Gmail)";
  } catch(errAdmin) {
    Logger.log("[GAS ADMIN GMAIL ERROR]: " + errAdmin.toString());
    try {
      MailApp.sendEmail({
        to: adminEmail,
        subject: "[NUEVA ORDEN B2B] Orden N° " + txId + " - " + (payload.buyerName || "Cliente"),
        htmlBody: adminHtml,
        attachments: [pdfBlob]
      });
      status.admin = "Enviado OK (MailApp)";
    } catch(e) {
      Logger.log("[GAS ADMIN MAILAPP ERROR]: " + e.toString());
      status.admin = "Error: " + e.toString();
    }
  }
 
  // Email para el cliente (correo ingresado en el formulario)
  if (customerEmail && customerEmail !== "") {
    var clientHtml = 
      "<div style='font-family: Arial, sans-serif; max-width: 650px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.08);'>" +
        "<!-- Encabezado Membretado Corporativo -->" +
        "<div style='background: linear-gradient(135deg, #a70025 0%, #78001b 100%); color: white; padding: 28px 24px; text-align: center; border-bottom: 4px solid #500012;'>" +
          "<div style='font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #fecaca; margin-bottom: 8px;'>VENTA Y DISTRIBUCIÓN MAYORISTA DIRECTA EN PERÚ</div>" +
          "<h1 style='margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 0.5px;'>ROSARIOS PERUANOS</h1>" +
          "<p style='margin: 8px 0 0; font-size: 13px; opacity: 0.9;'>Administrado por: <strong>Somos Marketing Perú EIRL</strong> (RUC: 20615554384)</p>" +
        "</div>" +
 
        "<div style='padding: 30px 25px; color: #334155; line-height: 1.6; font-size: 14px;'>" +
          "<div style='background: #ecfdf5; border: 1px solid #a7f3d0; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; color: #065f46;'>" +
            "✔ <strong>¡Orden Registrada!</strong> Tu Orden N° <strong>" + txId + "</strong> ha ingresado a nuestro sistema." +
          "</div>" +
 
          "<p style='font-size: 15px; color: #0f172a;'>Estimado/a <strong>" + (payload.buyerName || "") + "</strong>,</p>" +
          "<p style='color: #475569;'>Agradecemos tu preferencia. Tu Orden de Compra Mayorista se ha generado correctamente. Se ha adjuntado una copia del PDF oficial a este correo. También puedes visualizarlo y descargarlo directamente desde Google Drive:</p>" +
 
          "<!-- Ver PDF en Drive -->" +
          "<div style='text-align:center; margin:22px 0;'>" +
            "<a href='" + driveUrl + "' target='_blank' style='background: #a70025; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(167, 0, 37, 0.3);'>📄 Ver mi Orden de Compra en Google Drive</a>" +
          "</div>" +
 
          "<!-- Ficha de Datos del Cliente -->" +
          "<div style='background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 20px 0; font-size: 13px;'>" +
            "<div style='font-weight: 800; color: #1e293b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;'>📋 DATOS DE FACTURACIÓN Y DESPACHO</div>" +
            "<table style='width: 100%; border-collapse: collapse; color: #334155;'>" +
              "<tr><td style='padding: 3px 0; color: #64748b;'><strong>Cliente / Razón Social:</strong></td><td style='padding: 3px 0; font-weight: bold;'>" + (payload.buyerName || "") + "</td></tr>" +
              "<tr><td style='padding: 3px 0; color: #64748b;'><strong>RUC / DNI:</strong></td><td style='padding: 3px 0;'>" + (payload.buyerRuc || "") + "</td></tr>" +
              "<tr><td style='padding: 3px 0; color: #64748b;'><strong>Teléfono / WhatsApp:</strong></td><td style='padding: 3px 0; font-weight: bold; color: #059669;'>" + (payload.buyerPhone || "") + "</td></tr>" +
              "<tr><td style='padding: 3px 0; color: #64748b;'><strong>Correo Electrónico:</strong></td><td style='padding: 3px 0; font-weight: bold; color: #1d4ed8;'>" + customerEmail + "</td></tr>" +
              "<tr><td style='padding: 3px 0; color: #64748b;'><strong>Modalidad de Entrega:</strong></td><td style='padding: 3px 0;'>" + (payload.deliveryOption === "pickup" ? "Recojo en Almacén (Magdalena del Mar, Lima)" : "Envío Agencia Nacional: " + (payload.buyerAddress || "")) + "</td></tr>" +
            "</table>" +
          "</div>" +
 
          "<!-- Tabla Desglose de Productos -->" +
          "<h3 style='color: #a70025; font-size: 15px; font-weight: 800; border-bottom: 2px solid #a70025; padding-bottom: 6px; margin: 25px 0 12px;'>📦 DETALLE DE ROSARIOS SOLICITADOS</h3>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;'>" +
            "<thead>" +
              "<tr style='background: #a70025; color: white; text-align: left;'>" +
                "<th style='padding: 10px;'>Producto / Modelo</th>" +
                "<th style='padding: 10px; text-align: center;'>Cantidad</th>" +
                "<th style='padding: 10px; text-align: right;'>Precio Unit B2B</th>" +
                "<th style='padding: 10px; text-align: right;'>Subtotal</th>" +
              "</tr>" +
            "</thead>" +
            "<tbody>" +
              productsRows +
            "</tbody>" +
          "</table>" +
 
          "<!-- Resumen Financiero -->" +
          "<div style='background: #fdf2f2; border: 1px solid #fecaca; padding: 18px; border-radius: 8px; margin-bottom: 25px; text-align: right;'>" +
            "<div style='font-size: 13px; color: #475569;'>Cantidad Total Unidades: <strong>" + (payload.totalUnits || 0) + " u</strong></div>" +
            "<div style='font-size: 13px; color: #475569;'>Subtotal: S/. " + (payload.subtotal || 0).toFixed(2) + " | Flete: " + (payload.shippingFee === 0 ? "GRATIS" : "S/. " + payload.shippingFee.toFixed(2)) + "</div>" +
            "<div style='font-size: 20px; font-weight: 900; color: #a70025; margin-top: 6px;'>TOTAL A PAGAR: S/. " + (payload.grandTotal || 0).toFixed(2) + "</div>" +
          "</div>" +
 
          "<!-- Cuentas Bancarias -->" +
          "<div style='background: #f0fdf4; border: 1px solid #bbf7d0; padding: 18px; border-radius: 8px; margin-bottom: 25px; font-size: 13px; color: #166534;'>" +
            "<strong style='font-size: 14px; text-transform: uppercase; color: #15803d;'>💳 CUENTAS BANCARIAS OFICIALES PARA TRANSFERENCIA:</strong>" +
            "<ul style='margin: 10px 0 0 0; padding-left: 20px; line-height: 1.7;'>" +
              "<li><strong>Titular:</strong> Somos Marketing Perú E.I.R.L. (RUC 20615554384)</li>" +
              "<li><strong>Interbank Cuenta Corriente:</strong> <code>200-3008139189</code></li>" +
              "<li><strong>CCI Interbancario:</strong> <code>003-200-003008139189-35</code></li>" +
              "<li><strong>Yape / Plin / Izipay:</strong> (+51) 969 654 895</li>" +
            "</ul>" +
          "</div>" +
 
          "<!-- Botones de Acción -->" +
          "<div style='text-align: center; margin: 30px 0 20px; display: flex; flex-direction: column; gap: 12px; align-items: center; justify-content: center;'>" +
            "<a href='" + waUrl + "' target='_blank' style='background: #10b981; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 14px; display: inline-block; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);'>" +
              "💬 Confirmar Stock y Enviar Voucher por WhatsApp" +
            "</a>" +
            "<div style='margin-top:10px;'><a href='" + cancelUrl + "' target='_blank' style='color: #ef4444; font-size: 12px; text-decoration: underline; display: inline-block;'>" +
              "🚫 ¿Deseas cancelar esta Orden de Compra? Haz clic aquí" +
            "</a></div>" +
          "</div>" +
        "</div>" +
 
        "<!-- Pie de Página Leyes & Confidencialidad -->" +
        "<div style='background: #f8fafc; padding: 20px 25px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5; text-align: center;'>" +
          "<strong style='color: #334155; font-size: 12px;'>ROSARIOS PERUANOS & SOMOS MARKETING PERÚ EIRL</strong><br>" +
          "Venta y Distribución Mayorista Directa en Todo el Perú · RUC: 20615554384<br>" +
          "Atención Comercial WhatsApp: (+51) 969 654 895 · Magdalena del Mar, Lima, Perú.<br><br>" +
          "<p style='margin: 4px 0; font-size: 10px; color: #94a3b8; text-align: justify;'>" +
            "<strong>⚖️ Cumplimiento Legal y Privacidad (Ley N° 29733):</strong> De conformidad con la Ley N° 29733 de Protección de Datos Personales en el Perú, los datos personales facilitados en este formulario se tratan con estricta confidencialidad y con la única finalidad de procesar el pedido, emitir la documentación comercial correspondiente y coordinar la entrega física." +
          "</p>" +
          "<p style='margin: 4px 0 0 0; font-size: 10px; color: #94a3b8; text-align: justify;'>" +
            "<strong>Nota de Confidencialidad:</strong> La información contenida en este mensaje y sus documentos adjuntos es de carácter confidencial y para uso exclusivo de su destinatario. Queda prohibida su divulgación o reproducción no autorizada." +
          "</p>" +
        "</div>" +
      "</div>";
 
    try {
      GmailApp.sendEmail(customerEmail, "[CONFIRMACIÓN DE ORDEN] Tu Orden N° " + txId + " - Rosarios Peruanos", "", {
        htmlBody: clientHtml,
        name: "Rosarios Peruanos",
        replyTo: adminEmail,
        attachments: [pdfBlob]
      });
      status.customer = "Enviado OK (Gmail)";
      Logger.log("[GAS CLIENT EMAIL] Enviado exitosamente a " + customerEmail);
    } catch(errClient) {
      Logger.log("[GAS CLIENT GMAIL ERROR]: " + errClient.toString());
      try {
        MailApp.sendEmail({
          to: customerEmail,
          subject: "[CONFIRMACIÓN DE ORDEN] Tu Orden N° " + txId + " - Rosarios Peruanos",
          htmlBody: clientHtml,
          replyTo: adminEmail,
          attachments: [pdfBlob]
        });
        status.customer = "Enviado OK (MailApp)";
        Logger.log("[GAS CLIENT MAILAPP] Enviado exitosamente a " + customerEmail);
      } catch(e) {
        Logger.log("[GAS CLIENT MAILAPP ERROR]: " + e.toString());
        status.customer = "Error: " + e.toString();
      }
    }
  } else {
    status.customer = "No se envió (correo del cliente vacío)";
    Logger.log("[GAS CLIENT EMAIL] OMITIDO: customerEmail está vacío");
  }
  return status;
}

/**
 * Construye la representación HTML premium del PDF en formato A4 (dos columnas)
 */
function construirPDFHTML(d, ocN) {
  var deliveryOpt = (d.deliveryOption === "pickup") ? "Recojo en Magdalena del Mar, Lima" : "Envío Nacional";
  var clientName = d.buyerName || "";
  var docVal = d.buyerRuc || "";
  var addressVal = d.buyerAddress || "—";
  var phoneVal = d.buyerPhone || "";
  var emailVal = d.buyerEmail || "";

  var total = parseFloat(d.grandTotal) || 0;
  var subtotal = parseFloat(d.subtotal) || 0;
  var igv = parseFloat(d.igvAmount) || 0;
  var shippingFee = parseFloat(d.shippingFee) || 0;

  var waText = encodeURIComponent('Hola, he generado mi Orden de Compra Mayorista N° ' + ocN + '. Adjunto mi voucher de pago.');
  var qrUrl = 'https://quickchart.io/qr?size=200&margin=1&text=https://wa.me/51969654895?text=' + waText;

  var urlBase = 'https://cortinas-peru.web.app/img/assets-pdf/';
  var iconFiles = [
    'Icono Interbank.png', 'Icono Cuenta corriente.png',
    'Icono Nombre del Beneficiario.png', 'Icono Whatsapp.png',
    'Icono Direccion.png', 'Icono dni.png', 'Icono Pago contraentrega.png',
    'Icono Correo.png', 'Icono RUC.png'
  ];

  // Inyección de iconos base64 para evitar bloqueos del motor PDF
  var requests = [{ url: qrUrl, muteHttpExceptions: true }];
  iconFiles.forEach(function(f) {
    requests.push({ url: urlBase + encodeURIComponent(f), muteHttpExceptions: true });
  });

  var responses = [];
  try {
    responses = UrlFetchApp.fetchAll(requests);
  } catch (e) {
    // Fallback silencioso si falla la descarga externa
  }

  var qrB64 = '';
  if (responses.length > 0 && responses[0].getResponseCode() === 200) {
    qrB64 = 'data:image/png;base64,' + Utilities.base64Encode(responses[0].getBlob().getBytes());
  }

  var iconMap = {};
  for (var i = 0; i < iconFiles.length; i++) {
    if (responses.length > (i+1) && responses[i+1].getResponseCode() === 200) {
      iconMap[iconFiles[i]] = 'data:image/png;base64,' + Utilities.base64Encode(responses[i+1].getBlob().getBytes());
    } else {
      iconMap[iconFiles[i]] = '';
    }
  }

  function tIc(file, txt) {
    var imgHtml = iconMap[file] ? '<img src="' + iconMap[file] + '" width="14" style="vertical-align:middle; margin-right:6px; margin-bottom:2px;">' : '';
    return imgHtml + '<span style="vertical-align:middle;">' + txt + '</span>';
  }

  var itemsHtml = "";
  if (d.items && d.items.length > 0) {
    itemsHtml = d.items.map(function(item, idx) {
      var unitPrice = d.unitPrice || 0;
      var sub = item.quantity * unitPrice;
      return '<div class="item-row" style="margin-bottom:15px; border-bottom:1px dotted #e5e7eb; padding-bottom:10px;">' +
               '<span class="val-r" style="float:right; font-weight:800; font-size:14px; color:#1e293b;">S/. ' + sub.toFixed(2) + '</span>' +
               '<span class="item-title" style="font-weight:700; font-size:13px; color:#0f172a; display:block;">' + (idx + 1) + '. Rosario ' + item.product.name + '</span>' +
               '<span class="item-sub" style="font-size:11px; color:#64748b; display:block;">SKU: ' + item.product.sku + ' · Cantidad: ' + item.quantity + ' u · P. Unit: S/. ' + unitPrice.toFixed(2) + '</span>' +
             '</div>';
    }).join('');
  }

  var qrImageTag = qrB64 ? '<img src="' + qrB64 + '" width="95" height="95" style="border:1px solid #ccc; border-radius:4px;">' : '<div style="width:95px;height:95px;border:1px solid #ccc;background:#eee;text-align:center;line-height:95px;font-size:10px;">QR</div>';

  var clientDetailsTable = 
    '<table class="data-tb" style="width:100%; border-collapse:collapse; font-size:12px; margin-bottom:20px;">' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b; width:45%;">' + tIc('Icono Nombre del Beneficiario.png', 'Cliente / Razón Social') + '</td><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#0f172a; text-align:right; font-weight:bold;">' + clientName + '</td></tr>' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b;">' + tIc('Icono RUC.png', 'DNI o RUC') + '</td><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#0f172a; text-align:right; font-weight:bold;">' + docVal + '</td></tr>' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b;">' + tIc('Icono Whatsapp.png', 'WhatsApp Celular') + '</td><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#0f172a; text-align:right; font-weight:bold;">' + phoneVal + '</td></tr>' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b;">' + tIc('Icono Correo.png', 'Correo Electrónico') + '</td><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#0f172a; text-align:right;">' + emailVal + '</td></tr>' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b;">' + tIc('Icono Direccion.png', 'Tipo de Entrega') + '</td><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#0f172a; text-align:right;">' + deliveryOpt + '</td></tr>' +
      '<tr><td style="padding:6px 0; border-bottom:1px dotted #e5e5e5; color:#64748b;">' + tIc('Icono Direccion.png', 'Dirección') + '</td><td style="padding:6px 0; border-bottom:1 dotted #e5e5e5; color:#0f172a; text-align:right;">' + addressVal + '</td></tr>' +
    '</table>';

  var banksHtml = 
    '<div class="sec-t" style="font-size:12px; font-weight:800; color:#a70025; text-transform:uppercase; letter-spacing:0.5px; border-bottom:1px solid #f1f5f9; padding-bottom:5px; margin-bottom:10px; margin-top:20px;">CUENTAS BANCARIAS OFICIALES</div>' +
    '<div style="font-size:11px; color:#334155; line-height:1.6;">' +
      '<div style="margin-bottom:8px;">' + tIc('Icono Nombre del Beneficiario.png', '<strong>Beneficiario:</strong> Somos Marketing Perú EIRL (RUC 20615554384)') + '</div>' +
      '<div style="margin-bottom:8px;">' + tIc('Icono Interbank.png', '<strong>Banco Interbank:</strong> Cuenta Cte. <code>200-3008139189</code>') + '</div>' +
      '<div style="margin-bottom:8px;">' + tIc('Icono Cuenta corriente.png', '<strong>CCI Interbancario:</strong> <code>003-200-003008139189-35</code>') + '</div>' +
      '<div>' + tIc('Icono Whatsapp.png', '<strong>Yape/Plin:</strong> 969 654 895') + '</div>' +
    '</div>';

  var totalsHtml = 
    '<div style="text-align:right; font-size:12px; color:#475569; line-height:1.8; border-top:1px dashed #cbd5e1; padding-top:15px; margin-top:15px;">' +
      '<div>SUBTOTAL (82%): <strong style="color:#0f172a;">S/. ' + subtotal.toFixed(2) + '</strong></div>' +
      '<div>I.G.V. (18%): <strong style="color:#0f172a;">S/. ' + igv.toFixed(2) + '</strong></div>' +
      '<div>FLETE ENVÍO: <strong style="color:#0f172a;">' + (shippingFee === 0 ? "GRATIS" : "S/. " + shippingFee.toFixed(2)) + '</strong></div>' +
      '<div style="font-size:18px; font-weight:900; color:#a70025; margin-top:8px;">TOTAL ORDEN: S/. ' + total.toFixed(2) + '</div>' +
    '</div>';

  return '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
      '<meta charset="UTF-8">' +
      '<style>' +
        '@page { margin: 25px 40px; size: A4 portrait; }' +
        'body { font-family: Arial, sans-serif; color: #1e293b; margin: 0; padding: 0; font-size: 13px; line-height: 1.4; }' +
        '.header { width: 100%; border-bottom: 3px solid #a70025; padding-bottom: 15px; margin-bottom: 20px; }' +
        '.h-tag { color: #a70025; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; display:block; margin-bottom:4px; text-transform:uppercase; }' +
        '.h-logo { font-size: 30px; font-weight: 900; color: #0f172a; margin: 0; }' +
        '.oc-box { background: #fdf2f2; padding: 10px 15px; border-left: 5px solid #a70025; border-radius: 4px; }' +
        '.oc-title { font-size: 18px; font-weight: 900; color: #a70025; }' +
        '.oc-sub { font-size: 11px; color: #475569; margin-top:2px; }' +
        'table.layout-tb { width: 100%; border-collapse: collapse; }' +
        'table.layout-tb td { vertical-align: top; }' +
        '.left-col { width: 48%; padding-right: 20px; }' +
        '.right-col { width: 52%; border-left: 1px solid #e2e8f0; padding-left: 20px; }' +
        '.sec-t { font-size: 12px; font-weight: 800; color:#a70025; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 12px; }' +
        '.footer { margin-top: 40px; text-align: center; font-size: 10px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; line-height: 1.5; }' +
      '</style>' +
    '</head>' +
    '<body>' +
      '<table style="width:100%; margin-bottom:20px;">' +
        '<tr>' +
          '<td style="width:50%;">' +
            '<span class="h-tag">ORDEN DE COMPRA B2B MAYORISTA</span>' +
            '<h1 class="h-logo">ROSARIOS PERUANOS</h1>' +
            '<span style="font-size:11px; color:#64748b;">Administrado por: Somos Marketing Perú EIRL (RUC 20615554384)</span>' +
          '</td>' +
          '<td style="width:50%; text-align:right;">' +
            '<div class="oc-box">' +
              '<div class="oc-title">ORDEN N° ' + ocN + '</div>' +
              '<div class="oc-sub">Fecha Emisión: ' + new Date().toLocaleDateString('es-PE') + '</div>' +
            '</div>' +
          '</td>' +
        '</tr>' +
      '</table>' +

      '<table class="layout-tb">' +
        '<tr>' +
          '<td class="left-col">' +
            '<div class="sec-t">DATOS DEL COMPRADOR Y DESPACHO</div>' +
            clientDetailsTable +
            banksHtml +
          '</td>' +
          '<td class="right-col">' +
            '<div class="sec-t">DETALLE DE PRODUCTOS SOLICITADOS</div>' +
            itemsHtml +
            totalsHtml +
            
            '<table style="width:100%; margin-top:20px; border-collapse:collapse;">' +
              '<tr>' +
                '<td style="width:105px; vertical-align:middle;">' + qrImageTag + '</td>' +
                '<td style="font-size:11px; color:#475569; padding-left:15px; vertical-align:middle; line-height:1.4;">' +
                  '<strong>Instrucción de despacho:</strong> Escanee este código QR con la cámara de su celular para reportar su pago por WhatsApp directamente a nuestra área comercial.' +
                '</td>' +
              '</tr>' +
            '</table>' +
          '</td>' +
        '</tr>' +
      '</table>' +

      '<div class="footer">' +
        '<strong>Rosarios Peruanos & Somos Marketing Perú EIRL</strong><br>' +
        'RUC: 20615554384 · WhatsApp Comercial: +51 969 654 895 · Magdalena del Mar, Lima, Perú<br>' +
        'De conformidad con la Ley N° 29733 de Protección de Datos Personales, sus datos son tratados bajo absoluta confidencialidad con el único fin de procesar esta cotización y envío físico comercial.' +
      '</div>' +
    '</body>' +
    '</html>';
}

/**
 * Obtiene o crea la carpeta de almacenamiento de Google Drive
 */
function obtenerOCrearCarpeta(nombre) {
  var folders = DriveApp.getFoldersByName(nombre);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(nombre);
}

/**
 * Auxiliar para obtener o crear la hoja de cálculo
 */
function obtenerOSistemaSpreadsheet() {
  var ss = null;
  if (CONFIG.SPREADSHEET_ID && CONFIG.SPREADSHEET_ID.trim() !== "") {
    try { ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID.trim()); } catch (err) {}
  }
  if (!ss) {
    try { ss = SpreadsheetApp.getActiveSpreadsheet(); } catch (err) {}
  }
  if (!ss) {
    try {
      var files = DriveApp.getFilesByName("Pedidos y Reclamaciones - Rosarios Peruanos");
      if (files.hasNext()) {
        ss = SpreadsheetApp.openById(files.next().getId());
      } else {
        ss = SpreadsheetApp.create("Pedidos y Reclamaciones - Rosarios Peruanos");
      }
    } catch (driveErr) {}
  }
  return ss;
}

function responderJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 🛠️ Configuración de Permisos Absolutos (`appsscript.json`)

Para garantizar de forma permanente que tu Web App tenga los **permisos de seguridad absolutos** de Gmail, Sheets y Drive sin depender de detecciones automáticas de Google, debes configurar de forma explícita el archivo de manifiesto del proyecto:

### 📋 Pasos para mostrar y configurar `appsscript.json`:

1. En la barra lateral izquierda del editor de Google Apps Script, haz clic en el icono del **Engranaje (Configuración del proyecto)**.
2. Marca la casilla que dice **"Mostrar el archivo de manifiesto 'appsscript.json' en el editor"**.
3. Vuelve al editor de código haciendo clic en el icono de **`< >` (Editor)**.
4. Verás que ahora aparece un nuevo archivo llamado **`appsscript.json`**.
5. Abre ese archivo, **borra todo su contenido** y pega exactamente el siguiente bloque de configuración JSON:

```json
{
  "timeZone": "America/Lima",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE"
  },
  "oauthScopes": [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/script.send_mail"
  ]
}
```

6. Guarda los cambios (**Ctrl + S**).
7. Al hacer una **Nueva implementación**, Google te obligará a otorgar los permisos absolutos de Gmail, asegurando que todos los correos se envíen por **`GmailApp`** y queden guardados en la carpeta **Enviados** de `contacto@rosariosperuanos.com`.

