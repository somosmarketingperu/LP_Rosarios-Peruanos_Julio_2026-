export const checkoutHTML = `
      <section id="page-checkout" class="page-view animate-fade-in hidden py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          
          <div class="mb-10 text-center md:text-left">
            <h1 class="font-display font-extrabold text-3xl text-gray-900">Cotización y Checkout</h1>
            <p class="text-xs sm:text-sm text-gray-500 mt-1">Gestione sus cantidades mayoristas y complete su pago seguro mediante Izipay.</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- LEFT COLUMN: CART OVERVIEW & B2B INFO FORM (7 cols) -->
            <div class="lg:col-span-7 flex flex-col gap-6">
              
              <!-- 1. Wholesale Cart Overview -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h3 class="font-display font-bold text-gray-900 text-base mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                  <span>Productos en su Cotización</span>
                  <button id="clear-cart-btn" class="text-xs text-[#a70025] hover:underline font-semibold flex items-center gap-1 cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    Vaciar Lista
                  </button>
                </h3>

                <!-- Cart table or empty state -->
                <div id="checkout-cart-container" class="space-y-4">
                  <!-- Javascript will inject table items here or an empty cart warning -->
                </div>

                <!-- B2B Pricing feedback label -->
                <div id="pricing-feedback-container" class="mt-4 p-4 rounded-xl border hidden transition-all">
                  <!-- Javascript will update this message -->
                </div>
              </div>

              <!-- 2. Commercial / B2B Information Form -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h3 class="font-display font-bold text-gray-900 text-base mb-4 border-b border-gray-100 pb-3">Datos Comerciales de Envío</h3>
                <form id="b2b-form" class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 mb-1">Nombre Completo o Razón Social *</label>
                      <input type="text" id="b2b-fullname" required placeholder="Ej: Librería San Pablo o Juan Pérez" class="w-full text-xs border border-gray-200 focus:border-[#a70025] focus:outline-none rounded-lg px-3 py-2.5" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 mb-1">DNI o RUC Comercial *</label>
                      <input type="text" id="b2b-ruc" required placeholder="Ej: 10027828472 o 20564738291" class="w-full text-xs border border-gray-200 focus:border-[#a70025] focus:outline-none rounded-lg px-3 py-2.5 font-mono" />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 mb-1">Celular / WhatsApp *</label>
                      <input type="tel" id="b2b-phone" required placeholder="Ej: 969654895" class="w-full text-xs border border-gray-200 focus:border-[#a70025] focus:outline-none rounded-lg px-3 py-2.5 font-mono" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 mb-1">Correo Electrónico *</label>
                      <input type="email" id="b2b-email" required placeholder="Ej: compras@libreria.com" class="w-full text-xs border border-gray-200 focus:border-[#a70025] focus:outline-none rounded-lg px-3 py-2.5" />
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Opción de Entrega *</label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label class="border-2 border-gray-200 rounded-xl p-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-all" id="delivery-shipping-label">
                        <div class="flex items-center gap-2.5">
                          <input type="radio" name="delivery-option" value="shipping" checked class="text-[#a70025] focus:ring-[#a70025] h-4 w-4" />
                          <div class="flex flex-col">
                            <span class="text-xs font-bold text-gray-900">Envío Nacional</span>
                            <span class="text-[10px] text-gray-500">A todo el Perú vía agencia</span>
                          </div>
                        </div>
                        <span class="text-xs font-bold text-[#1b5eac]">S/. 15.00</span>
                      </label>
                      <label class="border-2 border-gray-200 rounded-xl p-3.5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-all" id="delivery-pickup-label">
                        <div class="flex items-center gap-2.5">
                          <input type="radio" name="delivery-option" value="pickup" class="text-[#a70025] focus:ring-[#a70025] h-4 w-4" />
                          <div class="flex flex-col">
                            <span class="text-xs font-bold text-gray-900">Recojo en Almacén</span>
                            <span class="text-[10px] text-gray-500">Jirón Tarapacá 260, Magdalena</span>
                          </div>
                        </div>
                        <span class="text-xs font-bold text-gray-500">Gratis</span>
                      </label>
                    </div>
                  </div>

                  <div id="shipping-address-container">
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Dirección de Destino Completa *</label>
                    <input type="text" id="b2b-address" required placeholder="Ej: Av. Brasil 4500, Oficina 301, Magdalena del Mar, Lima" class="w-full text-xs border border-gray-200 focus:border-[#a70025] focus:outline-none rounded-lg px-3 py-2.5" />
                    <p class="text-[10px] text-gray-400 mt-1 italic">* Si prefiere envío a provincia, escriba el nombre de la agencia de transporte preferida (Ej: Agencia Shalom Trujillo, Av. España...)</p>
                  </div>
                </form>
              </div>

            </div>


            <!-- RIGHT COLUMN: INVOICE BREAKDOWN & SECURE PAYMENT (5 cols) -->
            <div class="lg:col-span-5 flex flex-col gap-6">
              
              <!-- Cart Totals & Scaled pricing table -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                <h3 class="font-display font-bold text-gray-900 text-base mb-4 border-b border-gray-100 pb-3">Resumen del Pedido</h3>
                
                <div class="space-y-3.5 text-xs">
                  <div class="flex justify-between text-gray-500 font-medium">
                    <span>Cantidad Total Mayorista:</span>
                    <span id="summary-total-qty" class="font-mono text-gray-900 font-bold">0 unidades</span>
                  </div>
                  <div class="flex justify-between text-gray-500 font-medium">
                    <span>Precio Unitario Acordado:</span>
                    <span id="summary-unit-price" class="font-mono text-gray-900 font-bold">S/. 0.00 /u</span>
                  </div>
                  <hr class="border-gray-100" />
                  
                  <div class="flex justify-between text-gray-500 font-medium">
                    <span>Subtotal:</span>
                    <span id="summary-subtotal" class="font-mono text-gray-900 font-bold">S/. 0.00</span>
                  </div>
                  <div class="flex justify-between text-gray-500 font-medium">
                    <span>Impuestos (IGV 18% incluido):</span>
                    <span id="summary-igv" class="font-mono text-gray-900 font-bold">S/. 0.00</span>
                  </div>
                  <div class="flex justify-between text-gray-500 font-medium">
                    <span>Gastos de Despacho / Envío:</span>
                    <span id="summary-shipping" class="font-mono text-gray-900 font-bold">S/. 0.00</span>
                  </div>
                  <hr class="border-gray-100" />
                  
                  <div class="flex justify-between text-[#a70025] text-sm font-bold">
                    <span>Monto Total de Operación:</span>
                    <span id="summary-total-amount" class="font-display text-base font-extrabold text-[#a70025]">S/. 0.00</span>
                  </div>
                </div>

                <!-- Wholesale minimum alert banner inside summaries -->
                <div id="checkout-min-qty-alert" class="mt-4 p-4 bg-[#ffdad9] text-[#92001f] rounded-xl border border-[#ffb3b2] text-xs font-medium space-y-1">
                  <p class="font-bold">⚠️ Compra Mínima Requerida</p>
                  <p class="leading-relaxed">Aún no alcanza el pedido mínimo mayorista de <strong>500 rosarios</strong>. Por favor agregue más unidades en el catálogo para poder cotizar y pagar.</p>
                  <button onclick="window.app.navigateTo('tienda')" class="w-full mt-2 py-1.5 bg-[#a70025] text-white rounded-lg text-[10px] font-bold uppercase hover:bg-[#8c001e] transition-colors">Volver a la Tienda</button>
                </div>
              </div>


              <!-- SECURE IZIPAY PASSWAY PANEL -->
              <div id="izipay-panel" class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hidden">
                <h3 class="font-display font-bold text-gray-900 text-base mb-4 border-b border-gray-100 pb-3 flex items-center justify-between">
                  <span>Método de Pago Seguro</span>
                  <span class="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Izipay Activado</span>
                </h3>

                <p class="text-xs text-gray-500 leading-relaxed mb-4">
                  Su cotización califica para el procesamiento de pago seguro online de <strong class="text-gray-900">Izipay</strong>. Al hacer clic en el botón, se inicializará el formulario de pago cifrado de la pasarela.
                </p>

                <!-- Sandbox / Developer simulation control panel (Realistic like Izipay Developers Portal) -->
                <div class="mb-5 bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900">
                  <div class="flex items-center gap-1.5 mb-2 font-bold text-amber-800">
                    <svg class="w-4 h-4 shrink-0 text-amber-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Consola de Desarrollador - Simulador de Respuestas</span>
                  </div>
                  <p class="text-[10px] text-amber-700 leading-relaxed mb-2">
                    De acuerdo con el portal de desarrolladores de Izipay Perú, puede preconfigurar cómo responderá el servidor de pruebas para verificar los flujos de integración:
                  </p>
                  <select id="simulated-payment-outcome" class="w-full text-xs bg-white text-gray-800 focus:outline-none border border-amber-300 focus:border-amber-500 rounded-lg px-2.5 py-2 font-sans cursor-pointer font-medium">
                    <option value="success">✅ Transacción Exitosa (Conexión Sheets + Alertas Gmail + 3DS SMS)</option>
                    <option value="decline-funds">❌ Rechazo: Fondos Insuficientes (Código IZI-DEC-51)</option>
                    <option value="decline-cvv">❌ Rechazo: Código CVV Erróneo (Código IZI-DEC-CVV)</option>
                    <option value="decline-expiry">❌ Rechazo: Tarjeta Expirada (Código IZI-DEC-EXP)</option>
                    <option value="decline-timeout">❌ Error: Tiempo de Espera de Red Agotado (Código IZI-ERR-TIMEOUT)</option>
                  </select>
                </div>

                <!-- Primary CTA to initialize Pop-in Modal -->
                <button type="button" id="pay-submit-btn" class="w-full bg-[#e1004c] hover:bg-[#c80043] text-white font-black text-xs py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
                  <svg class="w-4.5 h-4.5 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  <span>PAGAR CON IZIPAY</span>
                </button>

                <!-- Secure details -->
                <div class="mt-4 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-mono">
                  <span class="flex items-center gap-1">🔒 SSL 256-bit</span>
                  <span>•</span>
                  <span>💳 PCI-DSS Compliant</span>
                  <span>•</span>
                  <span>🇵🇪 Izipay Perú</span>
                </div>
              </div>

            </div>

          </div>


        </div>
      </section>
`;
