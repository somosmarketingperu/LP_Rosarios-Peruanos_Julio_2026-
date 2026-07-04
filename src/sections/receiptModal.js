export const receiptModalHTML = `
    <!-- B2B SALES RECEIPT MODAL (SUCCESS MODAL) -->
    <div id="receipt-modal" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto hidden">
      <div class="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-up my-8">
        
        <!-- Header Banner -->
        <div class="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 text-center relative">
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 class="font-display font-extrabold text-xl">¡Pago Procesado con Éxito!</h2>
          <p class="text-xs opacity-90 mt-1 font-medium">Su cotización ha sido aprobada y procesada formalmente</p>
          <span class="absolute top-4 right-4 bg-white/10 px-2 py-0.5 rounded font-mono text-[9px] tracking-wider font-bold">IZIPAY OK</span>
        </div>

        <!-- Receipt Content -->
        <div class="p-6 space-y-5">
          <div class="text-center">
            <p class="font-mono text-[9px] text-gray-400 tracking-widest uppercase">Número de Transacción</p>
            <p id="receipt-tx-number" class="font-mono text-sm text-gray-800 font-bold">RP-TX-98248231</p>
          </div>

          <hr class="border-dashed border-gray-200" />

          <!-- Fiscal Entity Details -->
          <div class="grid grid-cols-2 gap-4 text-[10px] leading-relaxed text-gray-500 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
            <div>
              <strong class="block text-gray-400 font-medium uppercase tracking-wider">Emitido Por:</strong>
              <span class="text-gray-900 font-bold block">Rosarios Peruanos</span>
              <span class="block">Silvia Quispe Rujel</span>
              <span class="block font-mono">RUC: 10027828472</span>
              <span class="block">Tarapacá 260, Magdalena</span>
            </div>
            <div>
              <strong class="block text-gray-400 font-medium uppercase tracking-wider">Adquiriente B2B:</strong>
              <span id="receipt-buyer-name" class="text-gray-900 font-bold block">-</span>
              <span id="receipt-buyer-ruc" class="font-mono block">-</span>
              <span id="receipt-buyer-phone" class="block">-</span>
              <span id="receipt-buyer-email" class="block truncate">-</span>
            </div>
          </div>

          <!-- Itemized list of products purchased -->
          <div>
            <h4 class="font-display font-bold text-gray-900 text-xs mb-2 uppercase tracking-wide">Detalle de Compra Mayorista:</h4>
            <div class="max-h-40 overflow-y-auto border border-gray-100 rounded-xl">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-gray-50 text-[10px] text-gray-500 font-semibold border-b border-gray-100">
                    <th class="px-3 py-2">Modelo</th>
                    <th class="px-3 py-2 text-center">Cant.</th>
                    <th class="px-3 py-2 text-right">P. Unit</th>
                    <th class="px-3 py-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody id="receipt-items-tbody" class="text-[11px] text-gray-700 divide-y divide-gray-100 font-mono">
                  <!-- JS will dynamically insert item rows -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom calculations -->
          <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs space-y-1.5 font-mono text-gray-600">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span id="receipt-subtotal" class="font-bold text-gray-900">S/. 0.00</span>
            </div>
            <div class="flex justify-between">
              <span>IGV (18% Incluido):</span>
              <span id="receipt-igv" class="font-bold text-gray-900">S/. 0.00</span>
            </div>
            <div class="flex justify-between">
              <span>Gasto de Despacho:</span>
              <span id="receipt-shipping" class="font-bold text-gray-900">S/. 0.00</span>
            </div>
            <hr class="border-gray-200 my-1.5" />
            <div class="flex justify-between text-sm text-green-700 font-black">
              <span class="font-display">TOTAL PAGADO:</span>
              <span id="receipt-total" class="font-display text-base font-extrabold text-green-700">S/. 0.00</span>
            </div>
          </div>

          <!-- WhatsApp Link Generation, PDF Download and Close -->
          <div class="flex flex-col gap-3">
            <!-- 1. Download PDF button -->
            <button id="download-pdf-btn" class="w-full bg-[#a70025] hover:bg-[#8c001e] text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>DESCARGAR NOTA DE PEDIDO (PDF)</span>
            </button>

            <!-- 2. WhatsApp Button -->
            <a id="receipt-whatsapp-link" href="#" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01]">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.975 14.06.953 11.453.953c-5.437 0-9.862 4.371-9.866 9.8.001 2.009.529 3.975 1.531 5.714L2.093 21.93l5.554-1.456zM17.06 14.382c-.272-.135-1.61-.791-1.86-.882-.25-.09-.431-.135-.612.135-.181.271-.702.881-.861 1.062-.159.18-.318.203-.59.068-.272-.135-1.147-.421-2.186-1.348-.809-.721-1.355-1.612-1.514-1.882-.159-.271-.017-.417.119-.552.122-.122.272-.318.408-.475.136-.158.181-.271.272-.452.09-.18.045-.339-.022-.475-.068-.135-.612-1.472-.839-2.016-.22-.53-.441-.457-.612-.466-.158-.008-.339-.01-.52-.01-.181 0-.476.068-.725.339-.249.271-.95.927-.95 2.26s.973 2.62 1.11 2.8c.136.18 1.914 2.923 4.637 4.1c.648.281 1.153.448 1.547.573.651.207 1.243.177 1.711.108.522-.078 1.61-.658 1.837-1.29.226-.633.226-1.176.158-1.29-.067-.113-.249-.18-.52-.315z"/></svg>
              <span>ENVIAR DETALLE Y PDF POR WHATSAPP</span>
            </a>
            
            <p id="pdf-upload-status" class="text-center font-mono text-[9px] text-[#1b5eac] tracking-wide h-4 font-semibold uppercase"></p>

            <!-- Google Sheets & Gmail Integration Status -->
            <div class="bg-blue-50 border border-blue-100 rounded-2xl p-3 text-center flex flex-col items-center justify-center gap-1.5 animate-fade-in my-1">
              <div class="flex items-center gap-1.5 text-[9px] font-black uppercase text-[#1b5eac] tracking-wider font-mono">
                <svg class="w-3.5 h-3.5 text-[#1b5eac] animate-pulse" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 19.25V4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0119.25 21H4.75A1.75 1.75 0 013 19.25z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.5h18M8.5 3v18"></path>
                </svg>
                <span>Registro & Notificación Gmail</span>
              </div>
              <p id="integration-log-status" class="text-[10px] text-blue-700 leading-relaxed font-semibold">
                ⏳ Sincronizando con Google Sheets y enviando comprobantes por correo (Gmail)...
              </p>
            </div>

            <!-- 3. Close button -->
            <button id="receipt-close-btn" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs py-3 rounded-xl transition-all">
              Cerrar Recibo y Volver
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- B2B SALES ERROR MODAL (DECLINED/ERROR MODAL) -->
    <div id="payment-error-modal" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto hidden">
      <div class="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-scale-up my-8 border border-red-100">
        
        <!-- Header Banner for Error -->
        <div class="bg-gradient-to-r from-red-600 to-rose-700 text-white p-6 text-center relative">
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </div>
          <h2 class="font-display font-extrabold text-lg">Transacción Rechazada</h2>
          <p id="error-modal-subtitle" class="text-xs opacity-90 mt-1 font-medium">El procesador de pagos de Izipay no pudo autorizar la operación</p>
          <span class="absolute top-4 right-4 bg-white/10 px-2 py-0.5 rounded font-mono text-[9px] tracking-wider font-bold">IZIPAY DECLINED</span>
        </div>

        <!-- Error Details Content -->
        <div class="p-6 space-y-5">
          <div class="text-center bg-red-50/60 p-4 rounded-2xl border border-red-100">
            <p class="font-mono text-[9px] text-red-400 tracking-widest uppercase font-bold">Código de Diagnóstico</p>
            <p id="error-modal-code" class="font-mono text-base text-red-700 font-extrabold mt-0.5">IZI-DEC-51</p>
            
            <p class="font-display font-bold text-gray-800 text-xs mt-3 uppercase tracking-wider">Causa de Rechazo:</p>
            <p id="error-modal-reason" class="text-xs text-gray-600 mt-1 leading-relaxed font-medium">
              Fondos insuficientes. Por favor verifique el saldo de su tarjeta o intente con un medio de pago alternativo.
            </p>
          </div>

          <!-- Secure Troubleshooting / Best Practices tips -->
          <div class="space-y-2.5 text-xs text-gray-500">
            <h4 class="font-display font-bold text-gray-700 text-[10px] uppercase tracking-wider">Recomendaciones de Seguridad:</h4>
            <ul class="list-disc list-inside space-y-1 text-[10px] leading-relaxed">
              <li>Verifique que su tarjeta tenga habilitadas las <strong class="text-gray-700">compras por Internet</strong> y consumos en canales digitales.</li>
              <li>Asegúrese de contar con saldo suficiente para el monto de venta mayorista.</li>
              <li>Revise que los datos (Número, Fecha de Expiración y CVV) estén digitados exactamente como figuran en el plástico físico o su App bancaria.</li>
              <li>Si el problema persiste, contacte directamente a la distribuidora <strong class="text-gray-700 font-bold">Silvia Quispe Rujel (969 654 895)</strong> para coordinar transferencia directa interbancaria (BCP/BBVA).</li>
            </ul>
          </div>

          <hr class="border-gray-100" />

          <!-- Action buttons inside error modal -->
          <div class="flex flex-col gap-2.5">
            <button id="error-retry-btn" class="w-full bg-[#1b5eac] hover:bg-[#154a88] text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3m0 0l3-3m-3 3V3"></path></svg>
              <span>REINTENTAR PAGO (VOLVER AL FORMULARIO)</span>
            </button>

            <button id="error-whatsapp-direct" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.008 0C5.397 0 .06 5.348.06 12.01c.001 2.102.548 4.147 1.587 5.946L.057 24l6.324-1.658c1.751.954 3.719 1.455 5.724 1.457 6.613 0 11.95-5.34 11.953-11.996C24.062 8.79 22.82 5.77 20.554 3.51 18.29 1.246 15.28 0 12.008 0z"/></svg>
              <span>COORDINAR COMPRA DIRECTA POR WHATSAPP</span>
            </button>

            <button id="error-close-btn" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs py-2.5 rounded-xl transition-all">
              Cerrar
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- IZIPAY HIGH-FIDELITY POP-IN MODAL (SANDBOX & 3DS SIMULATOR) -->
    <div id="izipay-popin-modal" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto hidden">
      <div class="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-scale-up border border-gray-100 flex flex-col relative">
        
        <!-- 1. Sandbox Official Testing Indicator -->
        <div class="bg-amber-500 text-white text-[10px] py-1.5 px-3 font-bold text-center uppercase tracking-wider flex items-center justify-center gap-1.5">
          <span class="w-2 h-2 bg-white rounded-full animate-ping shrink-0"></span>
          ENTORNO DE PRUEBAS - Izipay Sandbox
        </div>

        <!-- 2. MAIN CARD ENTRY VIEW -->
        <div id="izipay-popin-card-view" class="p-6 space-y-4">
          
          <!-- Pop-in Header with Logo -->
          <div class="flex items-center justify-between pb-3 border-b border-gray-100">
            <div class="flex items-center gap-1">
              <span class="text-2xl font-black italic tracking-tighter text-[#e1004c] font-sans">izipay</span>
              <span class="text-[9px] bg-gray-100 text-gray-500 font-bold px-1.5 py-0.5 rounded uppercase font-mono">Pop-In</span>
            </div>
            <div class="flex items-center gap-1 text-gray-400 font-medium text-[10px] font-mono">
              <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span>Pago Seguro SSL</span>
            </div>
          </div>

          <!-- Transaction invoice information snippet -->
          <div class="bg-gray-50 rounded-xl p-3 border border-gray-100 text-xs text-gray-600 space-y-1">
            <div class="flex justify-between">
              <span class="font-medium text-gray-400">Comercio B2B:</span>
              <span class="font-bold text-gray-800">Rosarios Peruanos</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium text-gray-400">Nro. de Pedido:</span>
              <span id="popin-tx-number" class="font-mono font-bold text-gray-800">RP-TX-00000000</span>
            </div>
            <div class="flex justify-between pt-1 border-t border-gray-100 text-sm font-bold text-[#e1004c]">
              <span>Monto a Pagar:</span>
              <span id="popin-total-amount">S/. 0.00</span>
            </div>
          </div>

          <!-- Credit Card input fields -->
          <form id="izipay-popin-form" class="space-y-3" onsubmit="return false;">
            
            <div>
              <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Número de Tarjeta de Crédito/Débito</label>
              <div class="relative">
                <input type="text" id="pay-card-number" required placeholder="0000 0000 0000 0000" maxlength="19" class="w-full text-xs border border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-lg px-3 py-2.5 pl-10 font-mono text-gray-800" />
                <div class="absolute left-3 top-2.5 text-gray-400">
                  <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <span id="pay-card-brand" class="absolute right-3 top-2 font-bold font-mono text-[9px] tracking-wider text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">TARJETA</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Expiración (MM/AA)</label>
                <input type="text" id="pay-card-expiry" required placeholder="MM/AA" maxlength="5" class="w-full text-xs border border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-lg px-3 py-2.5 font-mono text-center text-gray-800" />
              </div>
              <div>
                <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">CVV (Cod. Seguridad)</label>
                <input type="password" id="pay-card-cvv" required placeholder="123" maxlength="4" class="w-full text-xs border border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-lg px-3 py-2.5 font-mono text-center text-gray-800" />
              </div>
            </div>

            <div>
              <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Nombre Completo del Titular</label>
              <input type="text" id="pay-card-name" required placeholder="Como figura en el plástico" class="w-full text-xs border border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-lg px-3 py-2.5 text-gray-800 font-medium" />
            </div>

            <div>
              <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Correo Electrónico (Para su recibo)</label>
              <input type="email" id="pay-card-email" required placeholder="compras@empresa.com" class="w-full text-xs border border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-lg px-3 py-2.5 text-gray-800" />
            </div>

            <!-- Pay button CTA -->
            <button type="submit" id="popin-pay-btn" class="w-full mt-2 bg-[#e1004c] hover:bg-[#c80043] text-white font-black text-xs py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
              <span>PAGAR CON TARJETA</span>
            </button>

            <!-- Cancel link -->
            <button type="button" id="popin-cancel-btn" class="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-1 cursor-pointer font-medium mt-1">
              Cancelar y volver al resumen
            </button>
          </form>

          <!-- Security branding footer -->
          <div class="pt-3 border-t border-gray-50 flex items-center justify-between text-[8px] text-gray-400">
            <span class="font-semibold uppercase tracking-wider">PCI-DSS Level 1 Certificado</span>
            <div class="flex items-center gap-1.5 font-bold">
              <span class="text-blue-700">VISA</span>
              <span class="text-red-600">Mastercard</span>
              <span class="text-emerald-600 font-mono">AMEX</span>
            </div>
          </div>
        </div>

        <!-- 3. PROCESSING STATUS VIEW -->
        <div id="izipay-popin-processing-view" class="p-8 hidden text-center space-y-4 flex flex-col items-center justify-center min-h-[300px]">
          <!-- Big loading spinner -->
          <div class="relative w-16 h-16">
            <div class="absolute inset-0 rounded-full border-4 border-gray-100"></div>
            <div class="absolute inset-0 rounded-full border-4 border-t-[#e1004c] animate-spin"></div>
          </div>
          <div class="space-y-1.5">
            <h4 id="popin-proc-title" class="font-display font-extrabold text-gray-900 text-sm uppercase tracking-wide">Procesando Transacción...</h4>
            <p id="popin-proc-subtitle" class="text-xs text-gray-500 max-w-xs mx-auto">Conectando de forma encriptada con los servidores de validación de Izipay Perú...</p>
          </div>
          <p id="popin-proc-step" class="font-mono text-[9px] text-[#e1004c] tracking-widest uppercase font-bold animate-pulse">PASO 1: ENCRIPTANDO DATOS AES-256...</p>
        </div>

        <!-- 4. 3D SECURE (3DS) SMS SMS OTP AUTHENTICATION SIMULATOR -->
        <div id="izipay-popin-3ds-view" class="p-6 hidden space-y-4">
          
          <!-- Bank mock header layout -->
          <div class="bg-gray-100 p-3.5 rounded-xl border border-gray-200 flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-[9px] font-black uppercase text-gray-400 tracking-wider">Pasarela de Autenticación</span>
              <span class="text-xs font-black text-gray-800">SIMULADOR DE BANCO EMISOR 3DS</span>
            </div>
            <!-- Security Shield logo -->
            <div class="flex items-center gap-1.5 text-[9px] font-bold text-gray-500 font-mono">
              <span class="text-blue-800 font-black">Visa</span> Secure
            </div>
          </div>

          <div class="space-y-2 text-center">
            <h3 class="font-display font-extrabold text-gray-900 text-sm">Verificación de Identidad SMS (3D Secure)</h3>
            <p class="text-xs text-gray-500 leading-relaxed">
              Para validar y autorizar su transacción comercial por <strong id="popin-3ds-total" class="text-gray-950">S/. 0.00</strong>, hemos enviado una clave dinámica SMS de 6 dígitos al celular del tarjetahabiente.
            </p>
          </div>

          <div class="space-y-3 py-1">
            <div>
              <label class="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1 text-center">Ingrese el Código de Seguridad SMS (6 Dígitos)</label>
              <input type="text" id="popin-3ds-otp-input" placeholder="••••••" maxlength="6" class="w-32 mx-auto block text-center text-lg font-mono font-bold border-2 border-gray-200 focus:border-[#e1004c] focus:outline-none rounded-xl py-2 tracking-[0.4em] text-gray-900" />
            </div>

            <!-- Developers tip -->
            <div class="p-3 bg-amber-50 text-[10px] text-amber-800 rounded-lg border border-amber-100 leading-relaxed text-center font-medium">
              💡 <strong>Simulación Sandbox:</strong> Ingrese cualquier código de 6 dígitos (Ej: <code>123456</code>) para autorizar con éxito, o haga clic en cancelar para denegar la compra.
            </div>

            <!-- Action buttons inside 3DS Screen -->
            <div class="flex flex-col gap-2 pt-1">
              <button type="button" id="popin-3ds-submit-btn" class="w-full bg-[#1b5eac] hover:bg-[#154a88] text-white font-black text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 uppercase">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <span>CONFIRMAR Y AUTORIZAR</span>
              </button>
              <button type="button" id="popin-3ds-cancel-btn" class="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-1 cursor-pointer font-medium">
                Cancelar Autenticación (Rechazar pago)
              </button>
            </div>
          </div>

          <div class="text-[8px] text-center text-gray-400 font-mono">
            Proporcionado por la Red de Seguridad Global Izipay Perú. © 2026 Todos los derechos reservados.
          </div>
        </div>

      </div>
    </div>

`;
