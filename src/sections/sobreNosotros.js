export const sobreNosotrosHTML = `
      <section id="page-sobre-nosotros" class="page-view animate-fade-in hidden py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-12">
            <span class="text-xs font-mono font-bold text-[#1b5eac] bg-[#d5e3ff] px-2.5 py-1 rounded-full uppercase tracking-wider">FABRICACIÓN NACIONAL PERUANA</span>
            <h1 class="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 mt-4">Silvia Quispe Rujel</h1>
            <p class="text-sm sm:text-base text-gray-500 mt-2">Dedicados a proveer fe y devoción a través de rosarios plásticos de alta calidad.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            <!-- Sidebar with contact / fiscal info -->
            <div class="md:col-span-1 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-6">
              <h3 class="font-display font-bold text-[#a70025] text-sm uppercase tracking-wider">Información Legal</h3>
              <div class="space-y-4 text-xs">
                <div>
                  <strong class="block text-gray-400 font-medium">Titular del Negocio:</strong>
                  <span class="text-gray-900 font-semibold text-sm">Silvia Quispe Rujel</span>
                </div>
                <div>
                  <strong class="block text-gray-400 font-medium">RUC Fiscal:</strong>
                  <span class="text-gray-900 font-mono font-bold text-sm">10027828472</span>
                </div>
                <div>
                  <strong class="block text-gray-400 font-medium">Documento de Identidad:</strong>
                  <span class="text-gray-900 font-mono font-semibold text-sm">DNI 02782847</span>
                </div>
                <div>
                  <strong class="block text-gray-400 font-medium">Dirección Comercial:</strong>
                  <span class="text-gray-900 font-medium">Jirón Tarapacá 260, Magdalena del Mar, Lima - Perú</span>
                  <p class="text-[10px] text-gray-400 italic mt-0.5">* Recojo de pedidos previa cita comercial.</p>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <strong class="block text-gray-400 font-medium">Atención Mayorista:</strong>
                  <span class="text-gray-900 font-medium">Lunes a Sábado</span>
                  <span class="block text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <!-- Detailed profile -->
            <div class="md:col-span-2 space-y-6 text-gray-600 text-sm leading-relaxed">
              <h2 class="font-display font-bold text-gray-900 text-xl sm:text-2xl border-b border-gray-100 pb-3">Nuestra Trayectoria Familiar</h2>
              <p>
                En <strong>Rosarios Peruanos</strong> nos sentimos orgullosos de nuestro legado artesanal e industrial. Bajo la conducción comercial de <strong>Silvia Quispe Rujel</strong>, nos hemos consolidado como los fabricantes y distribuidores de rosarios plásticos por excelencia en Lima Metropolitana y las principales provincias del Perú.
              </p>
              <p>
                Trabajamos exclusivamente con polímeros plásticos vírgenes de primera mano, garantizando un acabado uniforme sin rebarbas molestas y con alta resistencia al quiebre. Cada cruz y cuenta de nuestros rosarios es pulida cuidadosamente, garantizando durabilidad y un tacto sumamente reconfortante durante los misterios de la oración.
              </p>
              
              <div class="bg-gray-50 p-5 rounded-2xl border-l-4 border-[#1b5eac] space-y-2 mt-4">
                <strong class="block font-display font-bold text-gray-900 text-sm">Nuestros valores comerciales:</strong>
                <ul class="list-disc list-inside space-y-1.5 text-xs text-gray-600">
                  <li><strong>Formalidad Total</strong>: Emitimos boletas de venta y facturas electrónicas para su tranquilidad fiscal.</li>
                  <li><strong>Escalabilidad Real</strong>: Adaptamos los precios automáticamente para garantizar excelentes márgenes a distribuidores y librerías.</li>
                  <li><strong>Logística Confiable</strong>: Embalamos con materiales de amortiguación reforzados y despachamos vía agencias líderes de transporte (Shalom, Marvisur, Flores) a todo el Perú.</li>
                </ul>
              </div>

              <div class="pt-6 flex justify-center md:justify-start">
                <button onclick="window.app.navigateTo('tienda')" class="bg-[#a70025] hover:bg-[#8c001e] text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-sm">Explorar Colores en Almacén</button>
              </div>
            </div>
          </div>

          <!-- Maps mockup or localization -->
          <div class="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 p-6 flex flex-col sm:flex-row items-center gap-6">
            <div class="w-16 h-16 bg-[#a70025]/5 rounded-full flex items-center justify-center border border-[#a70025]/10 shrink-0 text-[#a70025]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h3 class="font-display font-bold text-gray-900 text-base">¿Desea retirar personalmente su pedido?</h3>
              <p class="text-xs text-gray-500 mt-1">Estamos ubicados en Jirón Tarapacá 260, Magdalena del Mar, Lima. Procese su pedido con la opción "Recojo en Tienda" y coordine de inmediato su retiro.</p>
              <a href="https://wa.me/51969654895?text=Hola%20Silvia%20Quispe,%20deseo%20retirar%20mi%20pedido%20en%20Magdalena." target="_blank" class="inline-block text-xs font-semibold text-[#1b5eac] hover:underline mt-2">Coordinar con Silvia por WhatsApp →</a>
            </div>
          </div>

        </div>
      </section>
`;
