export const pdfTemplateHTML = `
    <!-- Hidden wrapper to keep the offscreen positioning out of the actual captured element -->
    <div id="pdf-template-wrapper" style="position: absolute; left: -9999px; top: 0px; width: 1px; height: 1px; overflow: hidden; pointer-events: none; z-index: -9999;">
      <!-- Offscreen PDF template container styled specifically for professional PDF rendering -->
      <!-- We remove absolute positioning and left margins from this element so html2pdf captures it perfectly without blank clipping -->
      <div id="pdf-template-container" style="width: 794px; height: 1120px; max-height: 1120px; overflow: hidden; background-color: white; padding: 30px 40px 90px 40px; font-family: 'Work Sans', 'Inter', sans-serif; color: #191c1d; line-height: 1.5; box-sizing: border-box; position: relative;">
        
        <!-- Header: Brand logo and title (using table cells instead of flexbox for 100% html2canvas alignment safety) -->
        <div style="display: table; width: 100%; border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 20px; box-sizing: border-box;">
          <div style="display: table-cell; width: 55%; vertical-align: top;">
            <div style="margin-bottom: 5px; height: 32px; line-height: 32px;">
              <span style="display: inline-block; width: 32px; height: 32px; background-color: #a70025; border-radius: 50%; text-align: center; color: white; font-weight: bold; font-size: 18px; line-height: 32px; vertical-align: middle; margin-right: 10px;">†</span>
              <span style="font-size: 20px; font-weight: 800; color: #a70025; letter-spacing: -0.5px; vertical-align: middle; display: inline-block;">Rosarios Peruanos</span>
            </div>
            <span style="font-size: 10px; font-family: 'JetBrains Mono', monospace; color: #5c3f3f; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; display: block; margin-top: 2px;">Distribuidora Mayorista</span>
            <div style="font-size: 11px; color: #4b5563; margin-top: 10px;">
              <p style="margin: 2px 0;"><strong>RUC:</strong> 10027828472 (Silvia Quispe Rujel)</p>
              <p style="margin: 2px 0;"><strong>Dirección:</strong> Jirón Tarapacá 260, Magdalena del Mar, Lima</p>
              <p style="margin: 2px 0;"><strong>Teléfono:</strong> (+51) 969 654 895 | <strong>Email:</strong> contacto@rosariosperuanos.com</p>
            </div>
          </div>
          <div style="display: table-cell; width: 45%; text-align: right; vertical-align: top;">
            <div style="border: 2px solid #a70025; padding: 12px 20px; border-radius: 8px; background-color: #fff5f5; display: inline-block; text-align: right;">
              <span style="font-size: 10px; font-weight: bold; color: #a70025; display: block; text-transform: uppercase; letter-spacing: 1px;">NOTA DE PEDIDO MAYORISTA</span>
              <span id="pdf-tx-number" style="font-size: 14px; font-weight: bold; font-family: 'JetBrains Mono', monospace; color: #191c1d; display: block; margin-top: 3px;">RP-TX-XXXXXXXX</span>
            </div>
            <div style="font-size: 11px; color: #6b7280; margin-top: 10px;">
              <p style="margin: 2px 0;"><strong>Fecha de Emisión:</strong> <span id="pdf-date">03/07/2026</span></p>
              <p style="margin: 2px 0;"><strong>Estado:</strong> <span style="color: #059669; font-weight: bold; text-transform: uppercase; background-color: #d1fae5; padding: 2px 6px; border-radius: 4px; font-size: 10px; display: inline-block;">PAGADO - IZIPAY</span></p>
            </div>
          </div>
        </div>

        <!-- Buyer Information Block -->
        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; margin-bottom: 25px; box-sizing: border-box;">
          <h3 style="font-size: 11px; font-weight: bold; color: #a70025; text-transform: uppercase; margin-top: 0; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; letter-spacing: 0.5px;">DATOS COMERCIALES DEL ADQUIRIENTE (B2B)</h3>
          <table style="width: 100%; font-size: 11px; border-collapse: collapse;">
            <tr>
              <td style="padding: 4px 0; width: 30%; color: #6b7280;"><strong>Nombre / Razón Social:</strong></td>
              <td id="pdf-buyer-name" style="padding: 4px 0; font-weight: bold; color: #111827;">-</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;"><strong>DNI / RUC Comercial:</strong></td>
              <td id="pdf-buyer-ruc" style="padding: 4px 0; font-family: 'JetBrains Mono', monospace; color: #111827;">-</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;"><strong>Celular / WhatsApp:</strong></td>
              <td id="pdf-buyer-phone" style="padding: 4px 0; color: #111827;">-</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;"><strong>Correo Electrónico:</strong></td>
              <td id="pdf-buyer-email" style="padding: 4px 0; color: #111827;">-</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; color: #6b7280;"><strong>Método de Entrega:</strong></td>
              <td id="pdf-delivery-option" style="padding: 4px 0; font-weight: bold; color: #1b5eac;">-</td>
            </tr>
            <tr id="pdf-address-row">
              <td style="padding: 4px 0; color: #6b7280;"><strong>Dirección de Despacho:</strong></td>
              <td id="pdf-buyer-address" style="padding: 4px 0; color: #111827;">-</td>
            </tr>
          </table>
        </div>

        <!-- Items Table -->
        <table style="width: 100%; font-size: 11px; border-collapse: collapse; margin-bottom: 25px; box-sizing: border-box;">
          <thead>
            <tr style="background-color: #a70025; color: white;">
              <th style="padding: 10px; text-align: left; border-top-left-radius: 6px; border-bottom-left-radius: 6px;">DESCRIPCIÓN DEL ARTÍCULO RELIGIOSO</th>
              <th style="padding: 10px; text-align: center; width: 15%;">CANTIDAD</th>
              <th style="padding: 10px; text-align: right; width: 20%;">P. UNITARIO</th>
              <th style="padding: 10px; text-align: right; width: 20%; border-top-right-radius: 6px; border-bottom-right-radius: 6px;">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody id="pdf-items-tbody">
            <!-- To be filled dynamically -->
          </tbody>
        </table>

        <!-- Calculation Summary & Corporate Stamp (using table cells instead of flexbox for 100% html2canvas alignment safety) -->
        <div style="display: table; width: 100%; margin-top: 15px; box-sizing: border-box;">
          
          <!-- Legal disclaimer and stamp -->
          <div style="display: table-cell; width: 55%; font-size: 10px; color: #6b7280; line-height: 1.6; vertical-align: top; padding-right: 25px; box-sizing: border-box;">
            <p style="margin: 0 0 8px 0;"><strong>TÉRMINOS DE ENTREGA Y GARANTÍA:</strong></p>
            <ul style="margin: 0; padding-left: 15px;">
              <li>Este documento constituye una Nota de Pedido Formal debidamente pagada.</li>
              <li>El envío se coordinará vía agencia de transporte seleccionada en las siguientes 24-48 horas hábiles.</li>
              <li>La mercadería viaja 100% asegurada contra defectos de fabricación.</li>
            </ul>
            
            <!-- Stamp placeholder with pure CSS badge (using sub-table for 100% secure alignment without any SVG elements) -->
            <div style="margin-top: 25px; display: table; width: 100%;">
              <div style="display: table-cell; width: 60px; vertical-align: middle;">
                <div style="width: 60px; height: 60px; border: 2px dashed #a70025; border-radius: 50%; box-sizing: border-box; position: relative; opacity: 0.8; text-align: center; color: #a70025;">
                  <div style="position: absolute; top: 2px; left: 2px; right: 2px; bottom: 2px; border: 1px solid #a70025; border-radius: 50%; box-sizing: border-box; padding-top: 6px;">
                    <div style="font-size: 6px; font-weight: bold; line-height: 1.1; font-family: sans-serif;">DESPACHADO</div>
                    <div style="font-size: 8px; font-weight: bold; line-height: 1.2; margin-top: 1px; font-family: sans-serif;">S. QUISPE</div>
                    <div style="font-size: 5px; font-weight: normal; line-height: 1.1; margin-top: 1px; font-family: sans-serif;">RUC 10027828472</div>
                  </div>
                </div>
              </div>
              <div style="display: table-cell; vertical-align: middle; padding-left: 15px; font-size: 9px; line-height: 1.4; color: #4b5563;">
                <p style="margin: 0; font-weight: bold; color: #111827;">Silvia Quispe Rujel</p>
                <p style="margin: 0; color: #6b7280;">Representante de Ventas Mayoristas</p>
                <p style="margin: 0; color: #6b7280;">Rosarios Peruanos SAC</p>
              </div>
            </div>
          </div>

          <!-- Calculations breakdown -->
          <div style="display: table-cell; width: 45%; vertical-align: top; box-sizing: border-box;">
            <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 15px; box-sizing: border-box; width: 100%;">
              <table style="width: 100%; font-size: 11px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #6b7280;">Subtotal:</td>
                  <td id="pdf-summary-subtotal" style="padding: 6px 0; text-align: right; font-weight: bold; font-family: 'JetBrains Mono', monospace; color: #111827;">S/. 0.00</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280;">IGV (18% Incluido):</td>
                  <td id="pdf-summary-igv" style="padding: 6px 0; text-align: right; font-family: 'JetBrains Mono', monospace; color: #6b7280;">S/. 0.00</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280;">Gasto de Envío:</td>
                  <td id="pdf-summary-shipping" style="padding: 6px 0; text-align: right; font-family: 'JetBrains Mono', monospace; color: #111827;">S/. 0.00</td>
                </tr>
                <tr style="border-top: 1px dashed #e5e7eb;">
                  <td style="padding: 10px 0 0 0; color: #a70025; font-size: 12px; font-weight: bold;">TOTAL PAGADO:</td>
                  <td id="pdf-summary-total" style="padding: 10px 0 0 0; text-align: right; font-size: 14px; font-weight: 900; font-family: 'JetBrains Mono', monospace; color: #a70025;">S/. 0.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!-- QR validation section and footer note anchored perfectly at the bottom of the A4 layout -->
        <div style="position: absolute; bottom: 40px; left: 40px; width: 714px; border-top: 1px solid #e5e7eb; padding-top: 15px; display: table; box-sizing: border-box;">
          <div style="display: table-cell; width: 85%; font-size: 9px; color: #9ca3af; vertical-align: middle;">
            <p style="margin: 2px 0;">Este documento es una representación digital autorizada de la transacción <span id="pdf-cert-tx-number">RP-TX-XXXXXXXX</span>.</p>
            <p style="margin: 2px 0;">Verificado mediante la pasarela de pagos encriptada Izipay. Fecha de certificación: <span id="pdf-cert-date">03/07/2026</span>.</p>
          </div>
          <!-- Simple Mock QR Code (Pure CSS mockup to avoid html2canvas SVG bug) -->
          <div style="display: table-cell; width: 15%; text-align: right; vertical-align: middle;">
            <div style="width: 45px; height: 45px; border: 1px solid #111827; padding: 3px; box-sizing: border-box; background-color: white; position: relative; display: inline-block;">
              <!-- Top Left Finder Pattern -->
              <div style="position: absolute; top: 3px; left: 3px; width: 12px; height: 12px; border: 3px solid #111827; box-sizing: border-box; background-color: white;">
                <div style="position: absolute; top: 2px; left: 2px; width: 2px; height: 2px; background-color: #111827;"></div>
              </div>
              <!-- Top Right Finder Pattern -->
              <div style="position: absolute; top: 3px; right: 3px; width: 12px; height: 12px; border: 3px solid #111827; box-sizing: border-box; background-color: white;">
                <div style="position: absolute; top: 2px; left: 2px; width: 2px; height: 2px; background-color: #111827;"></div>
              </div>
              <!-- Bottom Left Finder Pattern -->
              <div style="position: absolute; bottom: 3px; left: 3px; width: 12px; height: 12px; border: 3px solid #111827; box-sizing: border-box; background-color: white;">
                <div style="position: absolute; top: 2px; left: 2px; width: 2px; height: 2px; background-color: #111827;"></div>
              </div>
              <!-- Random QR data points/pixels -->
              <div style="position: absolute; top: 18px; left: 6px; width: 3px; height: 3px; background-color: #111827;"></div>
              <div style="position: absolute; top: 24px; left: 18px; width: 3px; height: 3px; background-color: #111827;"></div>
              <div style="position: absolute; top: 9px; left: 18px; width: 3px; height: 3px; background-color: #111827;"></div>
              <div style="position: absolute; top: 18px; right: 6px; width: 3px; height: 3px; background-color: #111827;"></div>
              <div style="position: absolute; bottom: 9px; right: 9px; width: 6px; height: 3px; background-color: #111827;"></div>
              <div style="position: absolute; bottom: 6px; right: 15px; width: 3px; height: 6px; background-color: #111827;"></div>
              <div style="position: absolute; top: 15px; left: 15px; width: 6px; height: 6px; border: 1px solid #111827; box-sizing: border-box;"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
`;
