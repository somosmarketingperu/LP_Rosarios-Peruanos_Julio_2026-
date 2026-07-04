export const inicioHTML = `
      <section id="page-inicio" class="page-view animate-fade-in">
        
        <!-- Hero Section -->
        <div class="relative overflow-hidden bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Hero Content -->
            <div>
              <span class="inline-block px-3.5 py-1 rounded-full bg-[#a70025]/10 text-[#a70025] font-mono text-xs font-bold mb-6 tracking-wider">
                FABRICACIÓN Y VENTA DIRECTA DESDE MAGDALENA
              </span>
              <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight tracking-tight">
                Rosarios plásticos de alta calidad al por mayor
              </h1>
              <p class="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Abastezca su librería católica, parroquia o negocio religioso con los rosarios más duraderos, brillantes y económicos del Perú. Producción local con acabados de primera.
              </p>

              <!-- Quick Pricing Highlights -->
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="bg-gray-50 p-5 rounded-xl border-l-4 border-[#6d4c00]">
                  <p class="font-mono text-xs text-[#6d4c00] font-bold uppercase tracking-wider mb-1">
                    Precio por Ciento (100u)
                  </p>
                  <p class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
                    S/. 50.00
                  </p>
                  <span class="text-xs text-gray-500 font-medium">S/. 0.50 por unidad</span>
                </div>
                <div class="bg-gray-50 p-5 rounded-xl border-l-4 border-[#a70025]">
                  <p class="font-mono text-xs text-[#a70025] font-bold uppercase tracking-wider mb-1">
                    Precio por Millar (1000u)
                  </p>
                  <p class="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
                    S/. 400.00
                  </p>
                  <span class="text-xs text-gray-500 font-medium">S/. 0.40 por unidad</span>
                </div>
              </div>

              <!-- CTAs -->
              <div class="flex flex-col sm:flex-row gap-4 items-center">
                <button id="hero-btn-catalogo" class="w-full sm:w-auto bg-[#a70025] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#8c001e] transition-all hover:scale-[1.02] active:scale-95 text-center cursor-pointer flex items-center justify-center gap-2">
                  Ver Catálogo Completo
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <button id="hero-btn-contacto" class="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl transition-all text-center cursor-pointer">
                  Sobre Nuestra Fábrica
                </button>
              </div>

              <p class="mt-6 text-xs text-gray-500 italic flex items-center gap-1.5 font-medium">
                <svg class="w-4 h-4 text-[#a70025] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Venta mínima mayorista desde solo 500 unidades (S/. 250.00)
              </p>
            </div>

            <!-- Hero Images Collage (Peruvian Rosaries Colors) -->
            <div class="relative mt-8 lg:mt-0">
              <div class="absolute -top-10 -right-10 w-72 h-72 bg-[#a70025]/5 opacity-30 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-[#1b5eac]/5 opacity-30 rounded-full blur-3xl"></div>
              
              <div class="relative grid grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img alt="Rosario Azul Detalle" width="400" height="300" class="w-full h-52 sm:h-60 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSZnM5QlyU0eK1EmZ9PFPtyW34dw6cYU_TkBMclYnU9siUPpqGuVqrvDbbYy0zbJNDfgJpZTzmoOrLUXPxVPgo9fVyD5Q_QFk7ydP9XaI97skbiLM7tCO2accwg5cmXALhkXJcOFu2deMVv5BvICxVOMsMUG9n4U-O8R_rCfxvJtaZFrSiJK6SrQ3Xdo1KbLV9IIZSlqkk6BRwXt_FbVL82Gh79xj4X_bKPzpn5XHD9_EwbkL76MV7pgONu8XLkJ8EPc" />
                  </div>
                  <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img alt="Rosarios Multicolor" width="400" height="360" class="w-full h-60 sm:h-72 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSxO_yGDvLtypEIqMlL3c2XoHdyssMcYXVzCXKn3yQhuKoDDJhBL5UBGcijbBnFXRnKRse7Qd-00VSpG0whf0EjtYLpXyR2jx2-JSXUG9Eh0NEkcEDFThrfxZVi5Lx8GcHHCA0L1m9MHTDfIQ-tHIr51w9dFtpiZjni0N_T4Sv9FZgAYaJhCbZyHZ9J-7atYhLS0KeVKD8v46JuZ2w4FKGqr7JogNwMHpNdQ5XpSIPt8xI2Ec5oFRVBUwzaCrpbKECXKg" />
                  </div>
                </div>
                <div class="space-y-4 pt-8">
                  <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img alt="Rosarios Brilla Oscuridad" width="400" height="360" class="w-full h-60 sm:h-72 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5MucJvMrl2LQuTlqRL_vl1RNqA31xafHbYt13rmspXtPyMmCwERP4X6YRaPtDNx-7967wsvy2gTEckYFIxIwAgDVJX3Wf2IVubvtQ7xrLrI5Me7Gw7qf9nuhI3c0BUqlMPrwaiaPZs5hK4ARKmYCVxbhQsSDxx9mdTHFDsDm-1LYkyEprg0mftHQhVCy5GxArH98K32TBQOM98fi6qS2XxvfyW-xmWGsNCceIorlipfTzg6868M4ZrPB9nlQOdCWL4Q" />
                  </div>
                  <div class="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img alt="Rosario Morado Detalle" width="400" height="300" class="w-full h-52 sm:h-60 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_5ohor8AFQqiNShay-iAiGSgED_QFtxUG8PaHMzAlmiDYeor72AlSN37so4Q9Sm8IjVRTs2NvVR9T1Nx9hT8xsUziULfyLLjjviNTXL9h1wf_UWwdssc5QcpTcXOrQbU1P--0y3nGjDRR5th8fs8LpgdiePCu4zTl27zmv9fn7QVe55j3NukT56f1KCmeYAJnR4ZGVHQUjLvhmcHUpowNzNV0KmRrg6d0vHyU5NhERUQlsxW1uj3VSlbMrJ0maRZuig" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- B2B Pricing Table Section -->
        <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="font-display font-extrabold text-3xl text-gray-900 mb-3">
                Tarifario Escalable para Mayoristas
              </h2>
              <p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Nuestros precios disminuyen de forma automática según el volumen acumulado de su pedido en el carrito de compras. ¡Combine libremente los colores y acabados!
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <!-- Tier 1 -->
              <div class="bg-white p-6 rounded-2xl border-2 border-[#1b5eac]/20 shadow-xs flex flex-col justify-between relative">
                <span class="absolute -top-3 right-6 bg-[#1b5eac] text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">PEDIDO MÍNIMO</span>
                <div>
                  <span class="text-xs font-mono font-bold text-[#001b3c] bg-[#d5e3ff] px-2.5 py-0.5 rounded-full">BASE</span>
                  <h3 class="font-display font-bold text-lg text-gray-900 mt-3">Desde 500 unidades</h3>
                  <p class="text-3xl font-display font-black text-[#1b5eac] my-4">S/. 0.50 <span class="text-xs text-gray-500 font-medium">/u</span></p>
                  <ul class="text-xs text-gray-500 space-y-2 mb-6">
                    <li class="flex items-center gap-1.5 font-medium text-gray-700">✓ Equivalente a S/. 50 el ciento</li>
                    <li class="flex items-center gap-1.5">✓ Ideal para librerías y parroquias</li>
                    <li class="flex items-center gap-1.5">✓ Combine colores y acabados libremente</li>
                  </ul>
                </div>
                <button onclick="window.app.navigateTo('tienda')" class="w-full py-2.5 bg-[#1b5eac] text-white hover:bg-[#004689] font-semibold text-xs rounded-xl transition-all">Ver Colores</button>
              </div>

              <!-- Tier 2 -->
              <div class="bg-white p-6 rounded-2xl border-2 border-[#a70025] shadow-sm flex flex-col justify-between relative">
                <span class="absolute -top-3 right-6 bg-[#a70025] text-white font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">Ahorre 20%</span>
                <div>
                  <span class="text-xs font-mono font-bold text-[#410008] bg-[#ffdad9] px-2.5 py-0.5 rounded-full">SÚPER PRECIO</span>
                  <h3 class="font-display font-bold text-lg text-gray-900 mt-3">Desde 1,000 unidades</h3>
                  <p class="text-3xl font-display font-black text-[#a70025] my-4">S/. 0.40 <span class="text-xs text-gray-500 font-medium">/u</span></p>
                  <ul class="text-xs text-gray-500 space-y-2 mb-6">
                    <li class="flex items-center gap-1.5 font-medium text-gray-700">✓ Equivalente a S/. 400 el millar</li>
                    <li class="flex items-center gap-1.5">✓ Preferido de grandes distribuidores</li>
                    <li class="flex items-center gap-1.5">✓ Envasados en empaques protectores</li>
                  </ul>
                </div>
                <button onclick="window.app.navigateTo('tienda')" class="w-full py-2.5 bg-[#a70025] text-white hover:bg-[#8c001e] font-semibold text-xs rounded-xl transition-all">Comprar Millar</button>
              </div>

              <!-- Tier 3 -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
                <div>
                  <span class="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">DISTRIBUIDOR</span>
                  <h3 class="font-display font-bold text-lg text-gray-900 mt-3">Más de 5,000 unidades</h3>
                  <p class="text-2xl font-display font-extrabold text-gray-900 my-4">Consultar</p>
                  <ul class="text-xs text-gray-500 space-y-2 mb-6">
                    <li class="flex items-center gap-1.5">✓ Precios de importador directo</li>
                    <li class="flex items-center gap-1.5">✓ Atención prioritaria de Silvia Quispe</li>
                    <li class="flex items-center gap-1.5">✓ Despacho en transporte de confianza</li>
                  </ul>
                </div>
                <a href="https://wa.me/51969654895?text=Hola%20Silvia%20Quispe,%20deseo%20cotizar%20un%20pedido%20de%20más%20de%205000%20unidades%20de%20rosarios%20plásticos." target="_blank" class="w-full py-2.5 bg-gray-900 text-white hover:bg-black font-semibold text-xs rounded-xl transition-all text-center">Consultar WhatsApp</a>
              </div>

            </div>
          </div>
        </div>

        <!-- Featured Bento Grid Section -->
        <div class="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 class="font-display font-extrabold text-3xl text-gray-900 mb-2">Colecciones de Rosario Destacadas</h2>
                <p class="text-sm text-gray-600">Explore acabados opacos clásicos, brillos neón radiantes o nuestra exclusiva línea fluorescente.</p>
              </div>
              <button onclick="window.app.navigateTo('tienda')" class="bg-[#1b5eac] text-white hover:bg-[#004689] px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                Comenzar mi Pedido
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

            <!-- Bento Layout -->
            <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
              
              <!-- Card 1: Mate Premium -->
              <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 min-h-[300px]">
                <img alt="Colección Devoción Mate" loading="lazy" width="600" height="600" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1KU5ss6sUyIxO8ykWB20NcN4ehDkHz7uFZE7sDb37FKp5ZATXtpTopuOMcMv2CXn7yqRPAgZcSMCT4351vLw1HxF20keeiNI-M_UrpilfrU5_5cjCGnh6WuRFW-rMb30Emf3SR8q8yrjl-ybBA9geMq8WmoZZHAX9t9kAA-VK23d42LOq6b-48lW8kQc3Ng810Y1VnbAaLgI4oCdo1KGOR7QqHJVlmz-mKJhsOGVExPCI4YLo7hdXROawWIu4nQ4D4Ew" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-8 text-white">
                  <span class="bg-[#a70025] text-white px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest mb-3 inline-block">MATE PREMIUM</span>
                  <h3 class="font-display font-extrabold text-2xl mb-1.5">Línea Tradicional y Mate</h3>
                  <p class="text-sm text-gray-200 leading-relaxed max-w-sm">
                    Rosarios de colores pasteles y opacos, ideales para devocionarios y oraciones cotidianas. Resistentes al desgaste.
                  </p>
                </div>
              </div>

              <!-- Card 2: Neón Brillante -->
              <div class="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 min-h-[160px]">
                <img alt="Rosarios de Brillo Pulido" loading="lazy" width="600" height="300" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB6XBK0RaE6umWjUDMLlrKdvQKcF2AHfd_DkBrGWvCfH1pbfLpZmpV4VfRsSmtXc3Q2WDW-iKRo8WJ0aqs-0mLEIBEr-d7yPYxgQPRpuOGAgLRQpZUFqtxSPnc6rXSvJtLGsmko4LnyC2Sg6MSoI32smEWe5Veq4pp3VV-w4RMEeek6TichvxXDDevf4QSFVZAFcoKXT3iJYV1At3q9b7i0MmpmXljX7Ww5PTdX1e91h_SLfV-dGlGZuJAB8zygFF5GI4" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 text-white">
                  <span class="bg-[#1b5eac] text-white px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest mb-2 inline-block">NUESTRO FAVORITO</span>
                  <h3 class="font-display font-bold text-xl">Línea de Brillo y Neón</h3>
                  <p class="text-xs text-gray-200">Colores radiantes que capturan la luz y captan la atención instantánea en estanterías.</p>
                </div>
              </div>

              <!-- Card 3: Rosario Surtido -->
              <div class="relative group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 min-h-[160px] hidden md:block">
                <img alt="Rosario Surtidos" loading="lazy" width="300" height="300" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoex_EzREhEJhhAySuUWDJRB3rYO_8rDrrsO_mw4PudQpzdiW-9W-cXq9-ladk8EVvP6NXgkIUskgysKquCoFBaYczopt9--e6wiMTd3iLX4alSC3Vo7yNNyINvZZl_iKVlUkQgD2r1yrlvNIkzLB3RK8aKHn_9xikDES29TaAlTzoEaHZMl-rKlbV0nOMsjKWMVGJVN2l55p2j55p9dYDmSrezKmKI2_USXQH9egVcMUyCarHl7SEEkmHuT7EtlxXJMw" />
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
              </div>

              <!-- Card 4: WhatsApp direct contact -->
              <div class="bg-[#a70025] flex flex-col justify-center items-center p-6 rounded-2xl text-white text-center min-h-[160px]">
                <span class="text-[9px] font-mono font-bold tracking-widest uppercase text-[#ffdad9] mb-2">PAGO CONTRAENTREGA</span>
                <h4 class="font-display font-extrabold text-2xl mb-1">Lima Metropolitana</h4>
                <p class="text-xs opacity-90 mb-4">Pague de forma cómoda al recibir sus rosarios plásticos en su local u hogar.</p>
                <div class="h-px w-10 bg-white/20 my-2"></div>
                <button onclick="window.app.navigateTo('sobre-nosotros')" class="bg-white text-[#a70025] font-bold px-5 py-1.5 rounded-full text-[11px] hover:bg-[#ffdad9] transition-all">Ver Dirección</button>
              </div>

            </div>
          </div>
        </div>

        <!-- B2B Trust Badges Banner -->
        <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#a70025]/5 flex items-center justify-center border border-[#a70025]/10 text-[#a70025] shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h4 class="font-display font-bold text-gray-900 text-sm">Empresa 100% Formalizada</h4>
                <p class="text-xs text-gray-500 mt-1">Conducción comercial liderada por Silvia Quispe Rujel (RUC: 10027828472). Emitimos boleta o factura.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#1b5eac]/5 flex items-center justify-center border border-[#1b5eac]/10 text-[#1b5eac] shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 class="font-display font-bold text-gray-900 text-sm">Garantía de Satisfacción</h4>
                <p class="text-xs text-gray-500 mt-1">Inspeccionamos minuciosamente cada lote de rosarios antes de su envío. Reposición inmediata si hay piezas defectuosas.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#6d4c00]/5 flex items-center justify-center border border-[#6d4c00]/10 text-[#6d4c00] shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 class="font-display font-bold text-gray-900 text-sm">Envío Ágil Garantizado</h4>
                <p class="text-xs text-gray-500 mt-1">Llegamos a todo el territorio nacional por agencias de transporte confiables. Embalajes rígidos súper reforzados.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- B2B How To Buy Section -->
        <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
              <span class="inline-block px-3 py-1 rounded-full bg-[#1b5eac]/10 text-[#1b5eac] font-mono text-xs font-bold mb-3 tracking-wider">PROCESO DE COMPRA</span>
              <h2 class="font-display font-extrabold text-3xl text-gray-900 mb-3">¿Cómo Realizar tu Pedido Mayorista?</h2>
              <p class="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
                Comprar en Rosarios Peruanos es simple y totalmente seguro. Sigue estos 4 pasos para abastecer tu negocio.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <!-- Progress line (hidden on mobile) -->
              <div class="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -translate-y-12 -z-10"></div>

              <!-- Step 1 -->
              <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center relative group">
                <span class="absolute -top-4 left-6 bg-[#a70025] text-white font-mono font-bold text-[10px] px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">Paso 01</span>
                <div class="w-14 h-14 bg-[#a70025]/5 rounded-full flex items-center justify-center border border-[#a70025]/10 text-[#a70025] mb-5 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </div>
                <h3 class="font-display font-bold text-gray-900 text-sm mb-2">Explora el Catálogo</h3>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Ingresa a la sección "Catálogo Mayorista" y selecciona las cantidades de los modelos que necesitas (mínimo 50 unidades en total).
                </p>
              </div>

              <!-- Step 2 -->
              <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center relative group">
                <span class="absolute -top-4 left-6 bg-[#1b5eac] text-white font-mono font-bold text-[10px] px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">Paso 02</span>
                <div class="w-14 h-14 bg-[#1b5eac]/5 rounded-full flex items-center justify-center border border-[#1b5eac]/10 text-[#1b5eac] mb-5 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 class="font-display font-bold text-gray-900 text-sm mb-2">Completa tus Datos</h3>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Ve al carrito, ingresa tu RUC/DNI para tu comprobante, selecciona envío nacional o retiro en almacén en Magdalena.
                </p>
              </div>

              <!-- Step 3 -->
              <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center relative group">
                <span class="absolute -top-4 left-6 bg-[#6d4c00] text-white font-mono font-bold text-[10px] px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">Paso 03</span>
                <div class="w-14 h-14 bg-[#6d4c00]/5 rounded-full flex items-center justify-center border border-[#6d4c00]/10 text-[#6d4c00] mb-5 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 class="font-display font-bold text-gray-900 text-sm mb-2">Paga Seguro con Izipay</h3>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Realiza tu transacción de forma segura con tarjetas de crédito/débito. Recibirás tu recibo digital oficial al instante.
                </p>
              </div>

              <!-- Step 4 -->
              <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center relative group">
                <span class="absolute -top-4 left-6 bg-emerald-600 text-white font-mono font-bold text-[10px] px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">Paso 04</span>
                <div class="w-14 h-14 bg-emerald-50/50 rounded-full flex items-center justify-center border border-emerald-200 text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 class="font-display font-bold text-gray-900 text-sm mb-2">Coordinar Despacho</h3>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Presiona el botón de enviar por WhatsApp para coordinar los detalles del despacho inmediato de tus rosarios con Silvia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- B2B Testimonials Section -->
        <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
              <span class="inline-block px-3 py-1 rounded-full bg-[#a70025]/10 text-[#a70025] font-mono text-xs font-bold mb-3 tracking-wider">TESTIMONIOS DE CLIENTES</span>
              <h2 class="font-display font-extrabold text-3xl text-gray-900 mb-3">Socios Comerciales que Confían en Nosotros</h2>
              <p class="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
                Conoce las opiniones de librerías católicas, parroquias y distribuidores de todo el Perú sobre nuestra puntualidad y calidad.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Testimonial 1 -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="space-y-4">
                  <div class="flex items-center gap-1 text-amber-500">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <p class="text-xs text-gray-600 italic leading-relaxed">
                    "La calidad del acabado es excelente. No tienen rebarbas plásticas molestas como otros rosarios de menor calidad. Compramos un millar para la Librería Católica de Chiclayo y se vendieron en pocas semanas. ¡Muy recomendados!"
                  </p>
                </div>
                <div class="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                  <div class="w-9 h-9 rounded-full bg-[#a70025]/5 text-[#a70025] flex items-center justify-center font-bold text-xs shrink-0">
                    MC
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs font-bold text-gray-900">María del Carmen Castro</span>
                    <span class="text-[10px] text-gray-400 font-medium">Librería Católica de Chiclayo</span>
                  </div>
                </div>
              </div>

              <!-- Testimonial 2 -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="space-y-4">
                  <div class="flex items-center gap-1 text-amber-500">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <p class="text-xs text-gray-600 italic leading-relaxed">
                    "Excelente trato de la Sra. Silvia Quispe. Coordinamos el envío de 2,000 rosarios neón y nos dio un súper descuento. Llegó todo embalado en caja sellada por Shalom hasta Trujillo. Son formales y de confianza."
                  </p>
                </div>
                <div class="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                  <div class="w-9 h-9 rounded-full bg-[#1b5eac]/5 text-[#1b5eac] flex items-center justify-center font-bold text-xs shrink-0">
                    HR
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs font-bold text-gray-900">Hugo Rodríguez Vega</span>
                    <span class="text-[10px] text-gray-400 font-medium">Distribuidora La Fe - Trujillo</span>
                  </div>
                </div>
              </div>

              <!-- Testimonial 3 -->
              <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div class="space-y-4">
                  <div class="flex items-center gap-1 text-amber-500">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <p class="text-xs text-gray-600 italic leading-relaxed">
                    "Compramos rosarios fluorescentes para las vigilias de jóvenes de nuestra parroquia en Arequipa. Brillan espectacularmente en la oscuridad y a los muchachos les encantaron. Excelente servicio de envío."
                  </p>
                </div>
                <div class="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                  <div class="w-9 h-9 rounded-full bg-[#6d4c00]/5 text-[#6d4c00] flex items-center justify-center font-bold text-xs shrink-0">
                    PT
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs font-bold text-gray-900">Padre Tomás Meléndez</span>
                    <span class="text-[10px] text-gray-400 font-medium">Parroquia del Pilar - Arequipa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- B2B Interactive FAQ Section -->
        <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <span class="inline-block px-3 py-1 rounded-full bg-[#1b5eac]/10 text-[#1b5eac] font-mono text-xs font-bold mb-3 tracking-wider">RESOLVEMOS TUS DUDAS</span>
              <h2 class="font-display font-extrabold text-3xl text-gray-900 mb-3">Preguntas Frecuentes</h2>
              <p class="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
                Aquí respondemos todas las consultas habituales sobre el proceso comercial, envíos, métodos de pago y facturación.
              </p>
            </div>

            <!-- Accordion container -->
            <div class="space-y-4">
              <!-- Q1 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Hacen envíos a provincias de todo el Perú y cuánto cuesta?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    Sí, enviamos a todas las provincias del Perú utilizando agencias de transporte líderes y de total confianza como <strong>Shalom, Marvisur, Flores Hermanos, CIVA o Antezana</strong>. El costo de envío general es una tarifa plana de <strong>S/. 15.00</strong> si decide prepagarlo aquí, o podemos despacharlo en modalidad "Pago en Destino" para que lo cancele al retirar en la misma agencia. El empaque está reforzado para evitar cualquier daño.
                  </div>
                </div>
              </div>

              <!-- Q2 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Cuál es la cantidad mínima para calificar como pedido mayorista?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    Para mantener los costos más competitivos del mercado, la cantidad mínima total para procesar un pedido mayorista es de solo <strong>50 unidades</strong>. El carrito calculará de forma automática el precio unitario exacto según el volumen total que sumen todos tus rosarios.
                  </div>
                </div>
              </div>

              <!-- Q3 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Qué métodos de pago tienen disponibles y son seguros?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, Amex, Diners) mediante nuestra pasarela encriptada segura respaldada por <strong>Izipay</strong>. También puedes coordinar transferencias directas a cuentas BCP/BBVA o pagos mediante Yape y Plin, además de pago contraentrega en nuestro almacén en Magdalena del Mar.
                  </div>
                </div>
              </div>

              <!-- Q4 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Silvia Quispe emite Factura o Boleta de Venta formal?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    Sí, por supuesto. Somos un negocio familiar 100% formalizado registrado ante la SUNAT. Silvia Quispe Rujel (con RUC activo <strong>10027828472</strong>) emite boletas de venta y facturas electrónicas válidas. El precio mostrado en el cotizador incluye el 18% del IGV por ley, por lo que no tendrá recargos sorpresa.
                  </div>
                </div>
              </div>

              <!-- Q5 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Puedo mezclar acabados y colores distintos en un solo pedido?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    ¡Sí! Creemos en darle total flexibilidad a nuestros socios. Puedes agregar la combinación de colores que prefieras: azul tradicional estándar, colores neón brillantes, fluorescentes que brillan en la oscuridad o packs arcoíris. El volumen total se calcula uniendo todas las piezas en el carrito para darte la mejor tarifa por escala (S/. 0.50 desde 100u, S/. 0.40 desde 1,000u).
                  </div>
                </div>
              </div>

              <!-- Q6 -->
              <div class="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden transition-all duration-300">
                <button class="faq-accordion-toggle w-full px-6 py-5 text-left font-display font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50 transition-colors">
                  <span>¿Dónde queda su almacén para recojo personal?</span>
                  <span class="faq-icon text-[#a70025] font-extrabold text-lg transition-transform duration-300">+</span>
                </button>
                <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div class="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    Nuestro almacén físico de despacho está ubicado en <strong>Jirón Tarapacá 260, Magdalena del Mar, Lima</strong> (cerca de la Av. Brasil). Atendemos de Lunes a Sábado de 9:00 AM a 6:00 PM. El recojo de pedidos es previa coordinación directa por WhatsApp para confirmar que tu lote ya se encuentra listo y envasado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
`;
