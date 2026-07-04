# Configuración de Google Apps Script - Rosarios Peruanos

Este archivo contiene el código oficial de Google Apps Script y la guía de configuración para la integración automática de **Google Sheets + Gmail** para el registro de pedidos mayoristas en tiempo real.

---

## 📋 Guía de Configuración Paso a Paso

1. Abra su hoja de cálculo de Google Sheets donde recopilará sus pedidos.
2. Vaya al menú superior: **Extensiones** &rarr; **Apps Script** (o cree el proyecto directamente en [script.google.com](https://script.google.com)).
3. Borre todo el código existente en el archivo `Código.gs`.
4. Copie y pegue el código oficial de abajo.
5. Si creó el script de forma independiente en `script.google.com`, recuerde actualizar la variable `SPREADSHEET_ID` con la ID de su Google Sheet, o déjela en blanco `""` para que el script cree un archivo nuevo llamado **"Pedidos Rosarios Peruanos"** en su Google Drive.
6. Haga clic en **Implementar** (esquina superior derecha) &rarr; **Nueva implementación**.
7. Seleccione Tipo: **Aplicación web**.
8. Configuración:
   * **Ejecutar como:** `Yo (tu correo)`
   * **Quién tiene acceso:** `Cualquiera (Anyone)`
9. Haga clic en **Implementar**, autorice los permisos y copie la URL generada.

---

## 💻 Código Oficial (`Código.gs`)

```javascript
/**
 * Google Apps Script para Rosarios Peruanos
 * Guarda pedidos en Google Sheets y envía correos automáticos mediante Gmail.
 */
var SPREADSHEET_ID = "1ck7-t6wiPSeW1DrqbzArPTR7ZiVIJhhxeNsQG2rdMjk"; 

function doPost(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };

  if (e === undefined || !e.postData || !e.postData.contents) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "No se recibieron datos válidos"
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }

  try {
    var payload = JSON.parse(e.postData.contents);
    
    // 1. Obtener o crear hoja "Pedidos" de forma ultra-robusta
    var ss = null;
    
    // Intento A: Si se configuró un SPREADSHEET_ID arriba
    if (typeof SPREADSHEET_ID !== "undefined" && SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
      try {
        ss = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
      } catch (err) {}
    }
    
    // Intento B: Si el script está vinculado ("bound") a una hoja de cálculo
    if (!ss) {
      try {
        ss = SpreadsheetApp.getActiveSpreadsheet();
      } catch (err) {}
    }
    
    // Intento C: Si es independiente y no se dio ID, buscar o crear automáticamente en Google Drive
    if (!ss) {
      try {
        var files = DriveApp.getFilesByName("Pedidos Rosarios Peruanos");
        if (files.hasNext()) {
          var file = files.next();
          ss = SpreadsheetApp.openById(file.getId());
        } else {
          ss = SpreadsheetApp.create("Pedidos Rosarios Peruanos");
        }
      } catch (driveErr) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: "Error de acceso: Al crear el script directamente en script.google.com, debes colocar el ID de tu Google Sheet en la variable SPREADSHEET_ID o autorizar DriveApp."
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
      }
    }

    var sheet = ss.getSheetByName("Pedidos");
    if (!sheet) {
      sheet = ss.insertSheet("Pedidos");
      sheet.appendRow([
        "Fecha", "Transacción ID", "Cliente", "DNI/RUC", "Celular", "Correo", 
        "Entrega", "Dirección", "Cant Total", "Precio Unit", "Subtotal (S/.)", 
        "IGV (S/.)", "Envío (S/.)", "Total (S/.)", "PDF Nota", "Productos"
      ]);
      sheet.getRange(1, 1, 1, 16).setFontWeight("bold").setBackground("#a70025").setFontColor("white").setHorizontalAlignment("center");
    }

    // Formatear items
    var itemsText = "";
    if (payload.items && payload.items.length > 0) {
      itemsText = payload.items.map(function(item) {
        return item.product.name + " (" + item.product.sku + "): " + item.quantity + "u";
      }).join("\n");
    }

    // Registrar fila
    var now = new Date();
    sheet.appendRow([
      now,
      payload.transactionId || "",
      payload.buyerName || "",
      payload.buyerRuc || "",
      payload.buyerPhone || "",
      payload.buyerEmail || "",
      payload.deliveryOption === "pickup" ? "Recojo en Almacén" : "Envío Nacional",
      payload.buyerAddress || "",
      payload.totalUnits || 0,
      payload.unitPrice || 0,
      payload.subtotal || 0,
      payload.igvAmount || 0,
      payload.shippingFee || 0,
      payload.grandTotal || 0,
      payload.pdfUrl || "",
      itemsText
    ]);
    
    try { sheet.autoResizeColumns(1, 16); } catch(colErr) {}

    // 2. Enviar correos por Gmail
    var adminEmail = "contacto@rosariosperuanos.com";
    var customerEmail = payload.buyerEmail || "";
    var txId = payload.transactionId || "RP-TX-PROBANDO";

    var productsRows = "";
    if (payload.items && payload.items.length > 0) {
      productsRows = payload.items.map(function(item) {
        return "<tr>" +
               "<td style='padding: 8px; border-bottom: 1px solid #eee; text-align: left;'>" + item.product.name + " (" + item.product.sku + ")</td>" +
               "<td style='padding: 8px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold;'>" + item.quantity + "u</td>" +
               "</tr>";
      }).join("");
    }

    // HTML para correo de Silvia
    var adminHtml = 
      "<div style='font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;'>" +
        "<div style='background: #a70025; color: white; padding: 20px; text-align: center;'>" +
          "<h2 style='margin: 0;'>¡Nuevo Pedido Mayorista Recibido!</h2>" +
          "<p style='margin: 5px 0 0;'>Transacción: " + txId + "</p>" +
        "</div>" +
        "<div style='padding: 20px; color: #333; line-height: 1.6;'>" +
          "<p>Hola Silvia,</p>" +
          "<p>Has recibido un nuevo pedido mayorista pagado con éxito:</p>" +
          "<table style='width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;'>" +
            "<tr><td style='padding: 4px 0; font-weight: bold;'>Cliente:</td><td>" + (payload.buyerName || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; font-weight: bold;'>RUC/DNI:</td><td>" + (payload.buyerRuc || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; font-weight: bold;'>Teléfono:</td><td>" + (payload.buyerPhone || "") + "</td></tr>" +
            "<tr><td style='padding: 4px 0; font-weight: bold;'>Email:</td><td>" + customerEmail + "</td></tr>" +
            "<tr><td style='padding: 4px 0; font-weight: bold;'>Envío:</td><td>" + (payload.deliveryOption === "pickup" ? "Recojo Magdalena" : "Envío Nacional: " + payload.buyerAddress) + "</td></tr>" +
          "</table>" +
          "<h3 style='border-bottom: 2px solid #a70025; padding-bottom: 4px;'>Productos</h3>" +
          "<table style='width: 100%; border-collapse: collapse; font-size: 13px;'>" +
            productsRows +
          "</table>" +
          "<div style='background: #fdf2f2; padding: 15px; border-radius: 8px; margin-top: 15px; font-size: 13px;'>" +
            "<div><strong>Cantidad total:</strong> " + (payload.totalUnits || 0) + "u</div>" +
            "<div><strong>Precio unitario:</strong> S/. " + (payload.unitPrice || 0).toFixed(2) + "</div>" +
            "<div><strong>Monto total pagado (IZIPAY):</strong> S/. " + (payload.grandTotal || 0).toFixed(2) + "</div>" +
          "</div>" +
          (payload.pdfUrl && payload.pdfUrl.indexOf("http") === 0 ?
            "<div style='text-align: center; margin-top: 20px;'>" +
              "<a href='" + payload.pdfUrl + "' style='background: #1b5eac; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;'>Ver Nota de Pedido PDF</a>" +
            "</div>" : "") +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: adminEmail,
      subject: "🔔 NUEVA VENTA MAYORISTA - " + txId + " (" + (payload.buyerName || "") + ")",
      htmlBody: adminHtml
    });

    // HTML para correo del cliente
    if (customerEmail) {
      var clientHtml = 
        "<div style='font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;'>" +
          "<div style='background: #1b5eac; color: white; padding: 20px; text-align: center;'>" +
            "<h2 style='margin: 0;'>¡Gracias por tu compra mayorista!</h2>" +
            "<p style='margin: 5px 0 0;'>Tu pedido " + txId + " fue recibido con éxito</p>" +
          "</div>" +
          "<div style='padding: 20px; color: #333; line-height: 1.6;'>" +
            "<p>Estimado/a " + (payload.buyerName || "") + ",</p>" +
            "<p>Tu pago seguro mediante <strong>Izipay</strong> ha sido procesado de forma correcta.</p>" +
            "<p>Ya tenemos registrada tu cotización mayorista. Silvia Quispe se contactará contigo a tu celular <strong>" + (payload.buyerPhone || "") + "</strong> de inmediato para coordinar el despacho o entrega.</p>" +
            (payload.pdfUrl && payload.pdfUrl.indexOf("http") === 0 ?
              "<div style='text-align: center; margin: 20px 0;'>" +
                "<a href='" + payload.pdfUrl + "' style='background: #a70025; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;'>Descargar Nota de Pedido PDF</a>" +
              "</div>" : "") +
            "<p>Si tienes alguna duda adicional, por favor escríbenos a nuestro correo oficial o a nuestro número de atención comercial.</p>" +
            "<p>Atentamente,<br><strong>Silvia Quispe Rujel</strong><br>Rosarios Peruanos Distribuidora</p>" +
          "</div>" +
        "</div>";

      MailApp.sendEmail({
        to: customerEmail,
        subject: "🌸 Confirmación de Pedido Mayorista - " + txId,
        htmlBody: clientHtml
      });
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Sheets actualizado y emails enviados con éxito"
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error de ejecución: " + error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    });
}
```
