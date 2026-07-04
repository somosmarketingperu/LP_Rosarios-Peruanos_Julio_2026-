export const tiendaHTML = `
      <section id="page-tienda" class="page-view animate-fade-in hidden py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          
          <!-- Shop Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 class="font-display font-extrabold text-3xl text-gray-900">Nuestro Catálogo de Colores</h1>
              <p class="text-xs sm:text-sm text-gray-500 mt-1">Combine a su gusto todos los modelos. El descuento mayorista se aplicará sobre el total de unidades.</p>
            </div>
            
            <!-- Quick Cart Indicator bar in shop -->
            <div id="shop-cart-indicator-bar" class="bg-[#ffdad9] text-[#92001f] text-xs font-semibold px-4 py-2.5 rounded-xl border border-[#ffb3b2] flex items-center justify-between gap-6 hidden">
              <span>Su carrito tiene <strong id="shop-cart-total-qty">0</strong> unidades mayoristas</span>
              <button onclick="window.app.navigateTo('checkout')" class="bg-[#a70025] hover:bg-[#8c001e] text-white px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase">Ver Carrito / Pagar</button>
            </div>
          </div>

          <!-- Shop Layout with Interactive Configurator -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Side: Interactive Dynamic Showcase (span 5) -->
            <div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div class="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-gray-100">
                <img id="cfg-main-image" width="500" height="500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSZnM5QlyU0eK1EmZ9PFPtyW34dw6cYU_TkBMclYnU9siUPpqGuVqrvDbbYy0zbJNDfgJpZTzmoOrLUXPxVPgo9fVyD5Q_QFk7ydP9XaI97skbiLM7tCO2accwg5cmXALhkXJcOFu2deMVv5BvICxVOMsMUG9n4U-O8R_rCfxvJtaZFrSiJK6SrQ3Xdo1KbLV9IIZSlqkk6BRwXt_FbVL82Gh79xj4X_bKPzpn5XHD9_EwbkL76MV7pgONu8XLkJ8EPc" alt="Rosario Plástico" class="w-full h-full object-cover transition-all duration-300" />
                <span id="cfg-category-badge" class="absolute top-4 left-4 px-3 py-1 rounded-md font-mono text-[9px] font-bold tracking-widest uppercase shadow-sm bg-purple-100 text-purple-800">
                  MATE SUAVE
                </span>
                <span class="absolute bottom-4 right-4 bg-white/95 text-gray-700 text-[10px] font-mono px-2.5 py-1 rounded-md shadow-xs font-semibold">
                  SKU: <span id="cfg-sku-label">RP-BLUE-01</span>
                </span>
              </div>
              
              <!-- Color variants quick thumbnail gallery -->
              <div>
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">Colores de Almacén</h4>
                <div id="cfg-thumbnail-gallery" class="flex gap-2.5 overflow-x-auto pb-1">
                  <!-- Thumbnail previews will be dynamically populated here -->
                </div>
              </div>

              <!-- Product specs bullet points -->
              <div class="pt-4 border-t border-gray-100 space-y-2.5">
                <h4 class="text-xs font-extrabold text-gray-800 uppercase tracking-wider">Garantía y Calidad Industrial</h4>
                <div class="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#a70025] font-black">•</span>
                    <span>Plástico Virgen de 1ra</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#a70025] font-black">•</span>
                    <span>Cuentas sin rebaba</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#a70025] font-black">•</span>
                    <span>Cruz de alta resistencia</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#a70025] font-black">•</span>
                    <span>Ligero y reconfortante</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side: Configurator Controls Panel (span 7) -->
            <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              
              <!-- Title and Description -->
              <div>
                <span class="inline-block px-3 py-1 rounded-full bg-[#a70025]/5 text-[#a70025] font-mono text-xs font-bold mb-3 tracking-wider uppercase">FÁBRICA NACIONAL</span>
                <h2 id="cfg-product-title" class="font-display font-black text-2xl sm:text-3xl text-gray-900 leading-tight">Rosario Plástico Mayorista</h2>
                <p id="cfg-product-description" class="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                  Cuentas de tacto agradable y cruz reforzada. Perfecto para grandes distribuidores, congregaciones religiosas, librerías parroquiales y comerciantes.
                </p>
              </div>

              <!-- Control 1: Select Color Variant -->
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <h4 class="text-xs font-extrabold text-gray-900 uppercase tracking-wider">1. Seleccione Color / Acabado:</h4>
                  <span id="cfg-color-name" class="text-xs font-bold text-[#a70025] bg-[#a70025]/5 px-2.5 py-0.5 rounded-full">Azul Tradicional</span>
                </div>
                <!-- Swatches -->
                <div id="cfg-color-swatches" class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <!-- Filled dynamically via JS -->
                </div>
              </div>

              <!-- Control 2: Select Quantity (Wholesale pack sizes) -->
              <div class="space-y-3.5">
                <div class="flex justify-between items-center">
                  <h4 class="text-xs font-extrabold text-gray-900 uppercase tracking-wider">2. Cantidad Mayorista (Lote por Color):</h4>
                  <span class="text-[10px] text-[#1b5eac] font-mono font-bold">* Compra mínima total: 500u</span>
                </div>
                
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <!-- 500u (½ Millar) -->
                  <button type="button" data-qty="500" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">500 u.</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">½ Millar</span>
                  </button>
                  <!-- 1000u (1 Millar) -->
                  <button type="button" data-qty="1000" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">1,000 u.</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">1 Millar</span>
                  </button>
                  <!-- 1500u (1.5 Millares) -->
                  <button type="button" data-qty="1500" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">1,500 u.</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">1.5 Millares</span>
                  </button>
                  <!-- 2000u (2 Millares) -->
                  <button type="button" data-qty="2000" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">2,000 u.</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">2 Millares</span>
                  </button>
                  <!-- 3000u (3 Millares) -->
                  <button type="button" data-qty="3000" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">3,000 u.</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">3 Millares</span>
                  </button>
                  <!-- Custom button -->
                  <button type="button" id="cfg-size-custom-btn" class="cfg-size-btn flex flex-col items-center justify-center border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 cursor-pointer transition-all active:scale-95 bg-white">
                    <span class="font-display font-black text-sm text-gray-900 leading-none">OTRA</span>
                    <span class="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider mt-1.5">Cantidad</span>
                  </button>
                </div>

                <!-- Custom quantity box -->
                <div id="cfg-custom-input-box" class="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between gap-4 mt-3 hidden animate-fade-in">
                  <span class="text-xs font-semibold text-gray-500">Cantidad específica (mínimo 500u):</span>
                  <div class="flex items-center gap-1 bg-white border border-gray-200 p-1 rounded-lg">
                    <button type="button" id="cfg-custom-minus" class="w-12 h-8 bg-red-50 hover:bg-red-100 border border-red-100 text-red-700 font-bold rounded flex items-center justify-center text-xs cursor-pointer transition-all active:scale-95">-100</button>
                    <input type="number" id="cfg-custom-qty-input" value="500" min="500" step="100" class="w-16 text-center text-xs font-mono font-bold bg-white border-0 py-1 focus:outline-none text-gray-800" />
                    <button type="button" id="cfg-custom-plus" class="w-12 h-8 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700 font-bold rounded flex items-center justify-center text-xs cursor-pointer transition-all active:scale-95">+100</button>
                  </div>
                </div>
              </div>

              <!-- Real-time Cotizador Card (Dynamic B2B Pricing feedback) -->
              <div class="bg-[#f5f8ff] rounded-2xl border border-[#d5e3ff] p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <div>
                    <span class="text-[10px] font-mono font-extrabold text-[#1b5eac] uppercase tracking-wider">COTIZACIÓN DE ESTE LOTE:</span>
                    <p class="font-display font-black text-2xl text-[#1b5eac] mt-1">S/. <span id="cfg-real-total">0.00</span></p>
                  </div>
                  <div class="text-right">
                    <span class="text-[10px] font-mono text-gray-400 font-semibold block uppercase">PRECIO UNITARIO B2B</span>
                    <span id="cfg-unit-price" class="font-mono font-bold text-sm text-gray-800">S/. 0.50 c/u</span>
                  </div>
                </div>

                <div class="h-px bg-[#d5e3ff] my-1"></div>

                <div class="flex justify-between text-xs text-gray-600">
                  <span>Monto de IGV incluido (18%):</span>
                  <span id="cfg-igv-amount" class="font-mono font-semibold">S/. 0.00</span>
                </div>

                <!-- Savings dynamic tip -->
                <div id="cfg-savings-banner" class="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 p-2.5 rounded-xl text-[11px] font-medium hidden">
                  <span>💡</span>
                  <span>¡Felicidades! Se aplicará la escala mayorista. <span id="cfg-savings-text"></span></span>
                </div>
              </div>

              <!-- Main interactive CTA button to add / update to order -->
              <div class="space-y-3">
                <button type="button" id="cfg-add-to-cart-btn" class="w-full bg-[#a70025] hover:bg-[#8c001e] text-white font-extrabold text-sm py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5 hover:scale-[1.01] cursor-pointer">
                  <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M11 9H9V11H7V9H5V7H7V5H9V7H11V9M19 13C19 14.1 18.1 15 17 15H15V17H13V15H11V13H13V11H15V13H17C18.1 13 19 13.9 19 15M22 9V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H10C10 2 11 3 12 4H20C21.1 4 22 4.9 22 6V9M20 9H12L10 7H4V20H20V9Z" />
                  </svg>
                  <span id="cfg-btn-label">AGREGAR AL PEDIDO</span>
                </button>
                
                <p id="cfg-cart-status" class="text-center text-xs text-emerald-600 font-bold hidden">
                  ✓ ¡Agregado! Puedes ver el desglose en tu Carrito en Curso.
                </p>
              </div>

            </div>

          </div>

          <!-- Section below: Current Cart Summary in progress -->
          <div id="cfg-live-cart-panel" class="mt-12 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#ffdad9] text-[#a70025] flex items-center justify-center font-bold text-xs">🛒</span>
                <div>
                  <h3 class="font-display font-extrabold text-base text-gray-900">Su Pedido Mayorista en Curso</h3>
                  <p class="text-xs text-gray-500">Combine diferentes colores a su gusto para llegar al millar y pagar menos.</p>
                </div>
              </div>
              <div class="flex items-center justify-between sm:justify-end gap-6">
                <div class="text-right">
                  <span class="text-[10px] text-gray-400 font-mono block">CANTIDAD TOTAL COMBINADA</span>
                  <span id="cfg-live-total-units" class="text-lg font-black text-gray-900 font-mono">0u</span>
                </div>
                <button onclick="window.app.navigateTo('checkout')" class="bg-[#1b5eac] hover:bg-[#004689] text-white font-bold text-xs px-5 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer">
                  <span>PROCEDER AL PAGO (IZIPAY)</span>
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- List of added items as quick edit row list -->
            <div id="cfg-live-cart-list" class="divide-y divide-gray-100 max-h-[300px] overflow-y-auto pr-2">
              <!-- Dynamically populated rows -->
            </div>
          </div>
        </div>
      </section>
`;
