export const footerHTML = `
    <!-- Footer Section -->
    <footer class="bg-white border-t border-gray-100 w-full mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Column 1: Brand Profile -->
          <div class="md:col-span-1 flex flex-col gap-4">
            <div id="footer-logo" class="flex items-center gap-3 cursor-pointer group">
              <div class="w-8 h-8 bg-[#a70025]/5 rounded-full flex items-center justify-center border border-[#a70025]/10">
                <span class="text-[#a70025] font-bold text-lg">†</span>
              </div>
              <span class="text-lg font-display font-bold text-[#a70025] tracking-tight">
                Rosarios Peruanos
              </span>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">
              Venta de artículos religiosos plásticos al por mayor en todo el territorio del Perú. Fabricación resistente, colores vívidos y el mejor precio asegurado.
            </p>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul class="space-y-2.5 text-xs">
              <li><button onclick="window.app.navigateTo('inicio')" class="text-gray-500 hover:text-[#a70025] transition-colors text-left">Inicio Venta Mayorista</button></li>
              <li><button onclick="window.app.navigateTo('tienda')" class="text-gray-500 hover:text-[#a70025] transition-colors text-left">Catálogo de Colores</button></li>
              <li><button onclick="window.app.navigateTo('sobre-nosotros')" class="text-gray-500 hover:text-[#a70025] transition-colors text-left">Sobre Silvia Quispe</button></li>
              <li><button onclick="window.app.navigateTo('checkout')" class="text-gray-500 hover:text-[#a70025] font-semibold text-[#1b5eac] transition-colors text-left">Pagar Cotización</button></li>
            </ul>
          </div>

          <!-- Column 3: Legal Policy -->
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Información Legal</h4>
            <ul class="space-y-2.5 text-xs text-gray-500">
              <li><span class="cursor-pointer hover:text-[#a70025]">Política de Privacidad</span></li>
              <li><span class="cursor-pointer hover:text-[#a70025]">Términos y Condiciones</span></li>
              <li><span class="cursor-pointer hover:text-[#a70025] flex items-center gap-1">Libro de Reclamaciones <span class="text-[9px] bg-amber-100 text-[#6d4c00] px-1.5 py-0.5 rounded font-mono font-bold uppercase">Virtual</span></span></li>
              <li><span class="cursor-pointer hover:text-[#a70025]">Política de Envíos</span></li>
            </ul>
          </div>

          <!-- Column 4: Contact info -->
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">Contacto Directo</h4>
            <ul class="space-y-3 text-xs text-gray-500">
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Jirón Tarapacá 260, Magdalena del Mar, Lima - Perú</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>(+51) 969 654 895</span>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z"></path></svg>
                <span class="truncate">contacto@rosariosperuanos.com</span>
              </li>
              <li class="pt-2 border-t border-gray-100 text-[10px]">
                <strong>Atención:</strong> Lun - Sáb: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom details -->
        <div class="border-t border-gray-100 mt-8 pt-6 text-center text-[10px] text-gray-400">
          <p>© 2026 Rosarios Peruanos. Silvia Quispe Rujel (DNI: 02782847 / RUC: 10027828472). Magdalena del Mar, Lima - Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/51969654895?text=Hola%20Silvia%20Quispe,%20deseo%20realizar%20consultas%20sobre%20un%20pedido%20mayorista%20de%20rosarios%20plásticos." target="_blank" class="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center group hover:scale-105 active:scale-95 transition-all duration-300" aria-label="Escríbenos por WhatsApp">
      <!-- Pulsing green ring -->
      <span class="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10"></span>
      <!-- Tooltip -->
      <span class="absolute right-14 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none tracking-wide">
        ¿Dudas? Chat con Silvia Quispe
      </span>
      <!-- WhatsApp Icon -->
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.975 14.06.953 11.453.953c-5.437 0-9.862 4.371-9.866 9.8.001 2.009.529 3.975 1.531 5.714L2.093 21.93l5.554-1.456zM17.06 14.382c-.272-.135-1.61-.791-1.86-.882-.25-.09-.431-.135-.612.135-.181.271-.702.881-.861 1.062-.159.18-.318.203-.59.068-.272-.135-1.147-.421-2.186-1.348-.809-.721-1.355-1.612-1.514-1.882-.159-.271-.017-.417.119-.552.122-.122.272-.318.408-.475.136-.158.181-.271.272-.452.09-.18.045-.339-.022-.475-.068-.135-.612-1.472-.839-2.016-.22-.53-.441-.457-.612-.466-.158-.008-.339-.01-.52-.01-.181 0-.476.068-.725.339-.249.271-.95.927-.95 2.26s.973 2.62 1.11 2.8c.136.18 1.914 2.923 4.637 4.1c.648.281 1.153.448 1.547.573.651.207 1.243.177 1.711.108.522-.078 1.61-.658 1.837-1.29.226-.633.226-1.176.158-1.29-.067-.113-.249-.18-.52-.315z"/></svg>
    </a>
`;
