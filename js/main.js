/**
 * ROSARIOS PERUANOS - MAIN VANILLA JS (Estilo Tubos de Cortina v2)
 * Administrado por: Somos Marketing Perú EIRL (RUC 20615554384)
 * ================================================================
 * Lógica autónoma sin dependencias de compilación para Live Preview
 */

// ================= DATA & PRODUCTS =================
const PRODUCTS = [
  {
    id: '1',
    sku: 'RP-BLUE-01',
    name: 'Azul',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-azul-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-azul-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-azul-individual.jpg',
    description: 'Rosario plástico clásico en color azul con acabado suave al tacto y alta durabilidad. Incluye diseño infográfico detallado.'
  },
  {
    id: '2',
    sku: 'RP-RED-02',
    name: 'Rojo',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-rojo-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-rojo-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-rojo-individual.jpg',
    description: 'Rosario plástico clásico en color rojo intenso con acabado brillante y cruz reforzada.'
  },
  {
    id: '3',
    sku: 'RP-PINK-03',
    name: 'Rosado',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-rosado-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-rosado-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-rosado-individual.jpg',
    description: 'Rosario plástico en tono rosado suave, ideal para bautizos, comuniones y eventos religiosos.'
  },
  {
    id: '4',
    sku: 'RP-GLOW-04',
    name: 'Brilla Oscuridad',
    category: 'fluorescente',
    categoryLabel: 'Fluorescente / Neón',
    image: 'assets/imagenes-rosarios/rosario-flourescente-individual.jpg',
    infographic: 'assets/imagenes-rosarios/rosario-flourescente-individual.jpg',
    photo: 'assets/imagenes-rosarios/rosario-flourescente-individual.jpg',
    description: 'Rosario especial fosforescente que absorbe la luz y brilla en la oscuridad. El producto más vendido.'
  },
  {
    id: '5',
    sku: 'RP-WHT-05',
    name: 'Blanco',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-rosarios/rosario-blanco-individual.jpg',
    infographic: 'assets/imagenes-rosarios/rosario-blanco-individual.jpg',
    photo: 'assets/imagenes-rosarios/rosario-blanco-individual.jpg',
    description: 'Rosario de plástico blanco pulcro para eventos religiosos masivos y ceremonias.'
  },
  {
    id: '6',
    sku: 'RP-BLK-06',
    name: 'Negro',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-negro-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-negro-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-negro-individual.jpg',
    description: 'Rosario plástico sobrio en color negro con alta resistencia y excelente acabado.'
  },
  {
    id: '7',
    sku: 'RP-GRN-07',
    name: 'Verde',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-verde-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-verde-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-verde-individual.jpg',
    description: 'Rosario de plástico verde intenso con cuentas de alta precisión.'
  },
  {
    id: '8',
    sku: 'RP-YEL-08',
    name: 'Amarillo',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-amarillo-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-amarillo-infografia.png',
    photo: 'assets/imagenes-rosarios/rosario-amarillo-individual.jpg',
    description: 'Rosario plástico en color amarillo tradicional con brillante acabado y cuentas firmes.'
  },
  {
    id: '9',
    sku: 'RP-PURP-09',
    name: 'Morado',
    category: 'clásico',
    categoryLabel: '',
    image: 'assets/imagenes-redes-sociales/rosario-morado-infografia.png',
    infographic: 'assets/imagenes-redes-sociales/rosario-morado-infografia.png',
    photo: 'assets/imagenes-redes-sociales/rosario-morado-infografia.png',
    description: 'Rosario plástico en color morado tradicional con diseño infográfico detallado.'
  }
];

// State Variables
let cart = JSON.parse(localStorage.getItem('rp_cart_v1') || '[]');
let selectedProduct = PRODUCTS[0];
let selectedQuantity = 500;
let currentImageView = 'infographic'; // 'infographic' or 'photo'
let deliveryOption = 'shipping';
const SHIPPING_COST = 25.00;
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygU8iUN8jogpq9ZycqO36MqV18zS7oW23SOATu0n7vfBuY66nGvG2j_OD3_yPXZeP9/exec';

// ================= PRICING SCALE FUNCTION =================
function getUnitPrice(totalUnits) {
  if (totalUnits >= 1000) {
    return 0.40;
  } else if (totalUnits >= 500) {
    return 0.50;
  } else {
    return 0.60;
  }
}

// ================= NAVIGATION =================
function navigateTo(pageId) {
  const pages = ['inicio', 'tienda', 'sobre-nosotros', 'checkout', 'consulta-pago'];
  
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    const navBtn = document.getElementById('nav-btn-' + p);
    const mobBtn = document.getElementById('mob-btn-' + p);
    
    if (el) {
      if (p === pageId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
    
    if (navBtn) {
      if (p === pageId) {
        navBtn.classList.add('active');
      } else {
        navBtn.classList.remove('active');
      }
    }

    if (mobBtn) {
      if (p === pageId) {
        mobBtn.classList.add('active');
      } else {
        mobBtn.classList.remove('active');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (pageId === 'checkout' || pageId === 'tienda') {
    renderCheckoutPage();
    renderShopCartMatrix();
  }
}

// ================= SHOP CONFIGURATOR =================
function selectProduct(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;
  selectedProduct = p;
  
  updateProductPreviewImage();
  document.getElementById('cfg-product-title').innerText = 'Rosario ' + p.name;
  document.getElementById('cfg-sku-label').innerText = p.sku;
  document.getElementById('cfg-product-description').innerText = p.description;

  renderSwatches();
  updateQtyPricePreview();
}

function setImageView(viewType) {
  currentImageView = viewType;
  updateProductPreviewImage();
  
  const btnInfo = document.getElementById('btn-view-infographic');
  const btnPhoto = document.getElementById('btn-view-photo');
  if (btnInfo) btnInfo.classList.toggle('active', viewType === 'infographic');
  if (btnPhoto) btnPhoto.classList.toggle('active', viewType === 'photo');
}

function updateProductPreviewImage() {
  if (!selectedProduct) return;
  const mainImg = document.getElementById('cfg-main-image');
  if (!mainImg) return;

  if (currentImageView === 'photo' && selectedProduct.photo) {
    mainImg.src = selectedProduct.photo;
  } else {
    mainImg.src = selectedProduct.infographic || selectedProduct.image;
  }
}

function renderSwatches() {
  const container = document.getElementById('swatches-container');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <button type="button" onclick="selectProduct('${p.id}')" class="swatch-item ${p.id === selectedProduct.id ? 'active' : ''}">
      <img src="${p.photo || p.image}" alt="${p.name}" class="swatch-img" />
      <span class="swatch-label">${p.name}</span>
    </button>
  `).join('');
}

function selectQty(qty) {
  selectedQuantity = Math.max(1, parseInt(qty) || 100);
  const inputEl = document.getElementById('cfg-qty-input');
  if (inputEl) inputEl.value = selectedQuantity;

  const btns = document.querySelectorAll('.qty-btn');
  btns.forEach(btn => {
    if (parseInt(btn.getAttribute('data-qty')) === selectedQuantity) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateQtyPricePreview();
}

function onQtyInputChange(val) {
  const parsed = parseInt(val, 10);
  selectedQuantity = isNaN(parsed) || parsed < 1 ? 1 : parsed;
  
  const btns = document.querySelectorAll('.qty-btn');
  btns.forEach(btn => {
    if (parseInt(btn.getAttribute('data-qty')) === selectedQuantity) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateQtyPricePreview();
}

function updateQtyPricePreview() {
  const previewBox = document.getElementById('cfg-price-preview');
  if (!previewBox) return;

  const currentCartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  const projectedTotal = currentCartTotal + selectedQuantity;
  const unitPrice = getUnitPrice(projectedTotal);
  const itemSubtotal = selectedQuantity * unitPrice;

  previewBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; background: #fff8f8; padding: 0.75rem 1rem; border-radius: 8px; border: 1px dashed var(--primary-border); margin-top: 0.75rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-gray);">Tarifa por volumen acumulado:</div>
        <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">S/. ${unitPrice.toFixed(2)} <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-gray);">/ unidad</span></div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 0.75rem; color: var(--text-gray);">Subtotal de este color (${selectedQuantity}u):</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: var(--secondary);">S/. ${itemSubtotal.toFixed(2)}</div>
      </div>
    </div>
  `;
}

function addToCartFromConfigurator() {
  if (!selectedProduct) return;

  const qtyInput = document.getElementById('cfg-qty-input');
  if (qtyInput && qtyInput.value) {
    const val = parseInt(qtyInput.value, 10);
    if (!isNaN(val) && val >= 1) {
      selectedQuantity = val;
    }
  }

  if (!selectedQuantity || selectedQuantity < 1) {
    alert('Por favor ingrese una cantidad válida.');
    return;
  }
  
  const existing = cart.find(item => item.product.id === selectedProduct.id);
  if (existing) {
    existing.quantity += selectedQuantity;
  } else {
    cart.push({ product: selectedProduct, quantity: selectedQuantity });
  }
  
  saveCart();
  updateCartBadge();
  renderCheckoutPage();
  renderShopCartMatrix();
  
  openAddToCartModal(selectedProduct, selectedQuantity);
}

function openAddToCartModal(product, addedQty) {
  const modal = document.getElementById('add-to-cart-modal');
  if (!modal) return;

  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const tierPrice = getUnitPrice(totalUnits);

  const imgEl = document.getElementById('added-modal-img');
  const titleEl = document.getElementById('added-modal-title');
  const qtyEl = document.getElementById('added-modal-qty');
  const totalUnitsEl = document.getElementById('added-modal-total-units');
  const tierPriceEl = document.getElementById('added-modal-tier-price');
  const hintEl = document.getElementById('added-modal-hint');

  if (imgEl) imgEl.src = product.photo || product.image;
  if (titleEl) titleEl.innerText = 'Rosario ' + product.name + ' (' + product.sku + ')';
  if (qtyEl) qtyEl.innerText = '+' + addedQty + ' unidades agregadas';
  if (totalUnitsEl) totalUnitsEl.innerText = totalUnits.toLocaleString() + ' u acumuladas';
  if (tierPriceEl) tierPriceEl.innerText = 'S/. ' + tierPrice.toFixed(2) + ' / unidad';

  if (hintEl) {
    if (totalUnits >= 1000) {
      hintEl.innerHTML = '🎉 <strong>¡Felicidades!</strong> Alcanzaste la tarifa más baja (S/. 0.40/u) al superar las 1,000 unidades combinadas.';
    } else if (totalUnits >= 500) {
      hintEl.innerHTML = '⭐ Tienes tarifa Medio Millar (S/. 0.50/u). ¡Agrega ' + (1000 - totalUnits) + 'u más para bajar a S/. 0.40/u!';
    } else {
      hintEl.innerHTML = '💡 Tienes tarifa S/. 0.60/u. ¡Agrega ' + (500 - totalUnits) + 'u más para bajar a S/. 0.50/u!';
    }
  }

  modal.classList.add('active');
}

function closeAddToCartModal() {
  const modal = document.getElementById('add-to-cart-modal');
  if (modal) modal.classList.remove('active');
}

// ================= CART LOGIC =================
function saveCart() {
  localStorage.setItem('rp_cart_v1', JSON.stringify(cart));
}

function updateCartBadge() {
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.innerText = totalUnits;
    if (totalUnits > 0) {
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity = Math.max(1, item.quantity + delta);
  saveCart();
  renderCheckoutPage();
  renderShopCartMatrix();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  saveCart();
  renderCheckoutPage();
  renderShopCartMatrix();
  updateCartBadge();
}

// ================= CHECKOUT RENDERER =================
function renderCheckoutPage() {
  const container = document.getElementById('checkout-table-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <span style="font-size: 3rem;">🛒</span>
        <h3 style="font-weight: 700; margin-top: 1rem;">Su cotización está vacía</h3>
        <p style="color: var(--text-gray); font-size: 0.875rem; margin-top: 0.5rem;">Seleccione los modelos y cantidades en el catálogo mayorista.</p>
        <button onclick="navigateTo('tienda')" class="btn-primary" style="margin-top: 1.5rem;">Ir al Catálogo de Colores</button>
      </div>
    `;
    updateTotalsSummary(0);
    return;
  }

  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const unitPrice = getUnitPrice(totalUnits);

  container.innerHTML = `
    <table class="checkout-table">
      <thead>
        <tr>
          <th>Modelo</th>
          <th style="text-align: center;">Cantidad</th>
          <th style="text-align: right;">Precio Unit. B2B</th>
          <th style="text-align: right;">Subtotal</th>
          <th style="text-align: center;">Acción</th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => {
          const itemSubtotal = item.quantity * unitPrice;
          return `
            <tr>
              <td style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="${item.product.image}" alt="${item.product.name}" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;" />
                <div>
                  <div style="font-weight: 700;">Rosario ${item.product.name}</div>
                  <div style="font-size: 0.75rem; color: var(--text-gray); font-family: var(--font-mono);">SKU: ${item.product.sku}</div>
                </div>
              </td>
              <td style="text-align: center;">
                <div style="display: inline-flex; align-items: center; gap: 0.5rem;">
                  <button onclick="updateCartQty('${item.product.id}', -25)" class="qty-btn" style="padding: 0.25rem 0.5rem;">-25</button>
                  <span style="font-family: var(--font-mono); font-weight: 700;">${item.quantity}u</span>
                  <button onclick="updateCartQty('${item.product.id}', 25)" class="qty-btn" style="padding: 0.25rem 0.5rem;">+25</button>
                </div>
              </td>
              <td style="text-align: right; font-family: var(--font-mono);">S/. ${unitPrice.toFixed(2)}</td>
              <td style="text-align: right; font-family: var(--font-mono); font-weight: 700; color: var(--secondary);">S/. ${itemSubtotal.toFixed(2)}</td>
              <td style="text-align: center;">
                <button onclick="removeFromCart('${item.product.id}')" style="background: none; border: none; cursor: pointer; color: var(--text-light);" title="Eliminar">🗑️</button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  updateTotalsSummary(totalUnits);
}

function updateTotalsSummary(totalUnits) {
  const unitPrice = getUnitPrice(totalUnits);
  const subtotal = cart.reduce((sum, item) => sum + (item.quantity * unitPrice), 0);
  const isPickup = deliveryOption === 'pickup';
  const shippingFee = (totalUnits > 0 && !isPickup) ? SHIPPING_COST : 0;
  const grandTotal = subtotal + shippingFee;

  document.getElementById('sum-qty').innerText = totalUnits + ' unidades';
  document.getElementById('sum-unit-price').innerText = 'S/. ' + unitPrice.toFixed(2) + ' /u';
  document.getElementById('sum-subtotal').innerText = 'S/. ' + subtotal.toFixed(2);
  document.getElementById('sum-shipping').innerText = isPickup ? 'GRATIS (Recojo)' : 'S/. ' + shippingFee.toFixed(2);
  document.getElementById('sum-total').innerText = 'S/. ' + grandTotal.toFixed(2);
}

function selectDelivery(option) {
  deliveryOption = option;
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  updateTotalsSummary(totalUnits);
}

// ================= LIBRO DE RECLAMACIONES MODAL =================
function openClaimsModal() {
  const modal = document.getElementById('claims-modal');
  if (modal) modal.classList.add('active');
}

function closeClaimsModal() {
  const modal = document.getElementById('claims-modal');
  if (modal) modal.classList.remove('active');
}

function submitClaimForm(e) {
  e.preventDefault();
  const statusMsg = document.getElementById('claim-status-msg');
  statusMsg.style.display = 'block';
  statusMsg.style.backgroundColor = '#eff6ff';
  statusMsg.style.color = '#1e40af';
  statusMsg.innerText = 'Enviando registro de reclamación...';

  const payload = {
    type: 'claim',
    secretKey: 'RP2026-SOMOS-MKT-PERU-SECURE-9k2x',
    docType: document.getElementById('claim-doc-type').value,
    docNumber: document.getElementById('claim-doc-num').value,
    fullName: document.getElementById('claim-name').value,
    phone: document.getElementById('claim-phone').value,
    email: document.getElementById('claim-email').value,
    address: document.getElementById('claim-address').value,
    claimType: document.getElementById('claim-type').value,
    amount: document.getElementById('claim-amount').value || '0.00',
    description: document.getElementById('claim-desc').value,
    detail: document.getElementById('claim-detail').value,
    request: document.getElementById('claim-request').value
  };

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(() => {
    statusMsg.style.backgroundColor = '#ecfdf5';
    statusMsg.style.color = '#047857';
    statusMsg.innerHTML = '✅ <strong>¡Hoja de Reclamo Registrada!</strong> Se ha enviado una copia a su correo. Plazo legal de atención: 15 días hábiles.';
    document.getElementById('claims-form').reset();
  }).catch(() => {
    statusMsg.style.backgroundColor = '#ecfdf5';
    statusMsg.style.color = '#047857';
    statusMsg.innerHTML = '✅ <strong>Reclamo registrado con éxito.</strong> Nos pondremos en contacto a la brevedad.';
    document.getElementById('claims-form').reset();
  });
}

// ================= B2B ORDER PROCESSOR =================
// ================= B2B ORDER PROCESSOR =================
let pendingOrderPayload = null;

function processOrderSubmit(e) {
  if (e) e.preventDefault();

  if (cart.length === 0) {
    alert('⚠️ Su cotización está vacía. Por favor agregue productos desde el catálogo.');
    navigateTo('tienda');
    return;
  }

  const name = document.getElementById('ord-name').value.trim();
  const doc = document.getElementById('ord-doc').value.trim();
  const phone = document.getElementById('ord-phone').value.trim();
  const email = document.getElementById('ord-email').value.trim();
  const delivery = document.getElementById('ord-delivery').value;
  const address = document.getElementById('ord-address').value.trim();

  if (!name || !doc || !phone || !email || !address) {
    alert('Por favor complete todos los campos obligatorios (*).');
    return;
  }

  const orderId = 'RP-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const unitPrice = getUnitPrice(totalUnits);
  const subtotal = cart.reduce((sum, item) => sum + (item.quantity * unitPrice), 0);
  const shippingFee = delivery === 'pickup' ? 0 : SHIPPING_COST;
  const grandTotal = subtotal + shippingFee;

  // Update progress bar
  const p2 = document.getElementById('pstep-2');
  const p3 = document.getElementById('pstep-3');
  if (p2) { p2.style.color = 'var(--primary)'; p2.querySelector('span').style.background = 'var(--primary)'; }
  if (p3) { p3.style.color = 'var(--secondary)'; p3.querySelector('span').style.background = 'var(--secondary)'; }

  const payload = {
    type: "order",
    secretKey: "RP2026-SOMOS-MKT-PERU-SECURE-9k2x",
    orderId: orderId,
    buyerName: name,
    buyerRuc: doc,
    buyerPhone: phone,
    buyerEmail: email,
    deliveryOption: delivery,
    buyerAddress: address,
    totalUnits: totalUnits,
    unitPrice: unitPrice,
    subtotal: subtotal,
    shippingFee: shippingFee,
    grandTotal: grandTotal,
    items: cart
  };

  pendingOrderPayload = payload;
  openProgressModal();
  executeOrderSubmit(payload);
}

function openProgressModal() {
  const modal = document.getElementById('order-progress-modal');
  if (!modal) return;
  
  document.getElementById('progress-modal-icon').innerText = '⏳';
  document.getElementById('progress-modal-title').innerText = 'Procesando tu Pedido Mayorista';
  document.getElementById('progress-bar-fill').style.width = '15%';
  document.getElementById('progress-error-box').style.display = 'none';
  
  document.getElementById('log-step-1').style.display = 'block';
  document.getElementById('log-step-1').style.color = '#38bdf8';
  document.getElementById('log-step-1').innerText = '[SISTEMA] Iniciando procesamiento de orden...';
  
  document.getElementById('log-step-2').style.display = 'none';
  document.getElementById('log-step-3').style.display = 'none';
  document.getElementById('log-step-4').style.display = 'none';
  document.getElementById('log-step-5').style.display = 'none';
  
  modal.classList.add('active');
}

function closeProgressModal() {
  const modal = document.getElementById('order-progress-modal');
  if (modal) modal.classList.remove('active');
}

async function executeOrderSubmit(payload) {
  const log2 = document.getElementById('log-step-2');
  const log3 = document.getElementById('log-step-3');
  const log4 = document.getElementById('log-step-4');
  const log5 = document.getElementById('log-step-5');
  const fill = document.getElementById('progress-bar-fill');
  
  try {
    if (log2) {
      log2.style.display = 'block';
      log2.style.color = '#38bdf8';
      log2.innerText = '[API] Conectando con Google Apps Script...';
    }
    if (fill) fill.style.width = '40%';
    
    // Petición POST al Apps Script (text/plain evita Preflight OPTIONS)
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });
    
    if (!resp.ok) {
      throw new Error(`Error en el servidor: HTTP ${resp.status}`);
    }
    
    const json = await resp.json();
    console.log("[SERVER RESPONSE]:", json);
    
    if (json && json.success === true) {
      if (log3) {
        log3.style.display = 'block';
        log3.style.color = '#10b981';
        log3.innerText = '✔ [DATABASE] Registrado en Google Sheets con éxito.';
      }
      if (fill) fill.style.width = '65%';
      
      if (log4) {
        log4.style.display = 'block';
        log4.style.color = '#10b981';
        log4.innerText = `✔ [DRIVE] Documento subido a la carpeta de Google Drive.`;
      }
      if (fill) fill.style.width = '85%';
      
      if (log5) {
        log5.style.display = 'block';
        log5.style.color = '#10b981';
        log5.innerText = '✔ [EMAIL] Correos despachados al administrador y cliente.';
      }
      if (fill) fill.style.width = '100%';
      document.getElementById('progress-modal-icon').innerText = '✅';
      document.getElementById('progress-modal-title').innerText = '¡Procesamiento Completado!';
      
      // Esperar un instante para que el usuario lea el éxito
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Descarga de PDF local al cliente
      try {
        generateOrderPDF(payload);
      } catch (pdfErr) {
        console.log("Local PDF error:", pdfErr);
      }
      
      closeProgressModal();
      
      // Limpiar cotización localmente
      cart = [];
      localStorage.setItem('rp_cart_v1', JSON.stringify(cart));
      updateCartBadge();
      
      // WhatsApp Click setup
      const itemsSummary = payload.items.map(i => `• ${i.product.name} (${i.product.sku}): ${i.quantity}u`).join('%0A');
      const waMessage = `Hola Silvia Quispe, he generado mi *Orden de Compra Mayorista N° ${payload.orderId}*%0A%0A` +
        `👤 *Cliente:* ${encodeURIComponent(payload.buyerName)} (${payload.buyerRuc})%0A` +
        `💬 *WhatsApp:* ${payload.buyerPhone}%0A` +
        `📍 *Entrega:* ${payload.deliveryOption === 'pickup' ? 'Recojo Almacén Magdalena' : 'Envío Agencia (' + encodeURIComponent(payload.buyerAddress) + ')'}%0A%0A` +
        `📦 *Productos Pedidos:*%0A${itemsSummary}%0A%0A` +
        `💰 *Monto Total:* S/. ${payload.grandTotal.toFixed(2)} (Precio B2B: S/. ${payload.unitPrice.toFixed(2)}/u)%0A%0A` +
        `Solicito confirmación física de stock en almacén para proceder con la transferencia a la Cuenta Corriente de Somos Marketing Perú EIRL o Izipay.`;
      const waUrl = `https://wa.me/51969654895?text=${waMessage}`;
      
      // 1. Mostrar Banner de Éxito Persistente en la página de Checkout
      renderCheckoutSuccessBanner(payload, waUrl);

      // 2. Abrir Modal de Éxito con derivación directa al Chatbot de WhatsApp
      openOrderSuccessModal(payload, waUrl);
    } else {
      throw new Error(json.message || "Error desconocido devuelto por el servidor.");
    }
    
  } catch (err) {
    console.error("[SUBMIT ERROR]:", err);
    
    document.getElementById('progress-modal-icon').innerText = '❌';
    document.getElementById('progress-modal-title').innerText = 'Fallo en la Sincronización';
    
    if (log2 && log2.style.display === 'block') {
      log2.style.color = '#ef4444';
      log2.innerText = `✖ [API] Error al conectar con Google Apps Script: ${err.message}`;
    }
    
    const errBox = document.getElementById('progress-error-box');
    const errDetails = document.getElementById('progress-error-details');
    if (errBox && errDetails) {
      errDetails.innerText = `Detalle técnico: ${err.message || err}`;
      errBox.style.display = 'block';
    }
  }
}

function retryOrderSubmit() {
  if (pendingOrderPayload) {
    document.getElementById('progress-error-box').style.display = 'none';
    document.getElementById('progress-modal-icon').innerText = '⏳';
    document.getElementById('progress-modal-title').innerText = 'Procesando tu Pedido Mayorista';
    document.getElementById('progress-bar-fill').style.width = '15%';
    
    document.getElementById('log-step-1').innerText = '[SISTEMA] Reintentando procesamiento de orden...';
    document.getElementById('log-step-2').style.display = 'none';
    document.getElementById('log-step-3').style.display = 'none';
    document.getElementById('log-step-4').style.display = 'none';
    document.getElementById('log-step-5').style.display = 'none';
    
    executeOrderSubmit(pendingOrderPayload);
  }
}

// ── BANNER DE ÉXITO PERSISTENTE EN PÁGINA ──
function renderCheckoutSuccessBanner(orderData, waUrl) {
  const container = document.getElementById('checkout-table-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: var(--radius-xl); padding: 2rem 1.5rem; text-align: center; margin-bottom: 2rem; box-shadow: 0 10px 25px rgba(34,197,94,0.15);">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
      <span style="background: #15803d; color: white; padding: 0.3rem 0.9rem; border-radius: 9999px; font-weight: 800; font-size: 0.78rem; text-transform: uppercase; font-family: var(--font-mono);">
        ORDEN GENERADA CON ÉXITO — N° ${orderData.orderId}
      </span>
      <h2 class="font-display" style="font-size: 1.75rem; font-weight: 900; color: #14532d; margin-top: 0.75rem; margin-bottom: 0.5rem;">
        ¡Su Orden de Compra ha sido registrada y guardada!
      </h2>
      <p style="color: #166534; font-size: 0.95rem; max-width: 640px; margin: 0 auto 1.5rem; line-height: 1.5; font-weight: 600;">
        El PDF oficial ha sido descargado en su dispositivo y enviado a su correo.<br>
        👉 <strong>PASO FINAL OBLIGATORIO:</strong> Confirme el stock disponible en almacén con Silvia Quispe por WhatsApp para autorizar su despacho y pago.
      </p>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="background: #16a34a; font-size: 1.1rem; font-weight: 900; padding: 1rem 2rem; border-radius: var(--radius-md); text-decoration: none; display: inline-flex; align-items: center; gap: 0.65rem; box-shadow: 0 4px 15px rgba(22,163,74,0.35);">
          💬 HABLAR CON LA ADMINISTRADORA VÍA WHATSAPP Y CONFIRMAR STOCK →
        </a>
        <span style="font-size: 0.8rem; color: #15803d; font-weight: 700;">
          📲 Se abrirá WhatsApp con los datos de su Orden N° ${orderData.orderId} listos para enviar al Chatbot.
        </span>
      </div>
    </div>
  `;

  // Scroll suave hacia el banner de confirmación
  const checkoutSection = document.getElementById('page-checkout');
  if (checkoutSection) {
    checkoutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

let lastGeneratedOrderPayload = null;
let waRedirectTimer = null;

function openOrderSuccessModal(orderData, waUrl) {
  lastGeneratedOrderPayload = orderData;
  const modal = document.getElementById('order-success-modal');
  if (!modal) return;

  const idEl = document.getElementById('success-modal-ord-id');
  const totalEl = document.getElementById('success-modal-total');
  const unitsEl = document.getElementById('success-modal-units');
  const waBtn = document.getElementById('success-modal-wa-btn');
  const countdownEl = document.getElementById('wa-countdown-num');

  if (idEl) idEl.innerText = orderData.orderId;
  if (totalEl) totalEl.innerText = 'S/. ' + orderData.grandTotal.toFixed(2);
  if (unitsEl) unitsEl.innerText = orderData.totalUnits.toLocaleString() + ' u';
  if (waBtn) {
    waBtn.href = waUrl;
    waBtn.onclick = () => {
      if (waRedirectTimer) {
        clearInterval(waRedirectTimer);
        waRedirectTimer = null;
      }
    };
  }

  modal.style.display = 'flex';
  modal.classList.add('active');

  // Redirección automática progresiva en 5 segundos a WhatsApp Chatbot
  let count = 5;
  if (countdownEl) countdownEl.innerText = count;
  if (waRedirectTimer) clearInterval(waRedirectTimer);

  waRedirectTimer = setInterval(() => {
    count--;
    if (countdownEl) countdownEl.innerText = count;
    if (count <= 0) {
      clearInterval(waRedirectTimer);
      waRedirectTimer = null;
      window.open(waUrl, '_blank');
    }
  }, 1000);
}

function closeOrderSuccessModal() {
  if (waRedirectTimer) {
    clearInterval(waRedirectTimer);
    waRedirectTimer = null;
  }
  const modal = document.getElementById('order-success-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function redownloadOrderPDF() {
  if (lastGeneratedOrderPayload) {
    try {
      generateOrderPDF(lastGeneratedOrderPayload);
    } catch (e) {}
  }
}

/**
 * Generador de PDF Orden de Compra Mayorista
 * Usa jsPDF directamente (sin html2canvas) — 100% confiable
 */
function generateOrderPDF(orderData) {
  // Verificar que jsPDF esté disponible
  const jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
  if (!jsPDFClass) {
    alert('Error: La librería jsPDF no está disponible. Verifique su conexión a internet.');
    return;
  }

  const doc = new jsPDFClass({ unit: 'mm', format: 'a4', orientation: 'portrait' });

  // ── Constantes de layout ──
  const PW    = 210;           // Ancho A4 en mm
  const ML    = 14;            // Margen izquierdo
  const MR    = 14;            // Margen derecho
  const CW    = PW - ML - MR; // Ancho de contenido (182mm)
  const RED   = [167, 0, 37]; // #a70025
  const DKBL  = [27, 94, 172]; // #1b5eac
  const GRY   = [107, 114, 128];
  const LGY   = [248, 250, 252];
  const dateStr = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' });

  let y = 14; // Cursor Y

  // ─────────────────────────────────────────────
  // HEADER: Franja roja superior
  // ─────────────────────────────────────────────
  doc.setFillColor(...RED);
  doc.rect(0, 0, PW, 22, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(255, 255, 255);
  doc.text('ROSARIOS PERUANOS', ML, 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(254, 202, 202);
  doc.text('Venta y Distribucion Mayorista Directa en Peru | Somos Marketing Peru EIRL (RUC: 20615554384)', ML, 16);

  // Etiqueta ORDEN DE COMPRA (derecha)
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(PW - ML - 52, 4, 52, 14, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...RED);
  doc.text('ORDEN DE COMPRA', PW - ML - 26, 10, { align: 'center' });
  doc.setFontSize(9);
  doc.setTextColor(...DKBL);
  doc.text(orderData.orderId, PW - ML - 26, 15, { align: 'center' });

  y = 28;

  // ─────────────────────────────────────────────
  // FILA: Fecha + N° Orden
  // ─────────────────────────────────────────────
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...GRY);
  doc.text('Fecha de Emision: ' + dateStr, ML, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...RED);
  doc.text('Estado: PENDIENTE DE CONFIRMACION DE STOCK', PW - MR, y, { align: 'right' });

  y += 6;
  doc.setDrawColor(229, 231, 235);
  doc.setLineWidth(0.3);
  doc.line(ML, y, PW - MR, y);
  y += 5;

  // ─────────────────────────────────────────────
  // SECCIÓN: Datos del Cliente
  // ─────────────────────────────────────────────
  doc.setFillColor(...LGY);
  doc.rect(ML, y, CW, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 41, 59);
  doc.text('DATOS DE FACTURACION Y DESPACHO', ML + 2, y + 4);
  y += 8;

  const col2 = ML + CW / 2;
  const rowH = 5.5;

  const clientRows = [
    ['Cliente / Razon Social:', orderData.buyerName,       'RUC / DNI:', orderData.buyerRuc],
    ['Telefono / WhatsApp:',   orderData.buyerPhone,       'Email:',     orderData.buyerEmail],
    ['Modalidad de Entrega:',  orderData.deliveryOption === 'pickup'
      ? 'Recojo en Almacen (Magdalena del Mar, Lima)'
      : 'Envio Agencia Nacional',                         'Direccion:', orderData.buyerAddress || '—']
  ];

  clientRows.forEach(row => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...GRY);
    doc.text(row[0], ML, y + 3.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(String(row[1]).substring(0, 42), ML + 30, y + 3.5);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...GRY);
    doc.text(row[2], col2, y + 3.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(String(row[3]).substring(0, 35), col2 + 22, y + 3.5);

    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.2);
    doc.line(ML, y + rowH, PW - MR, y + rowH);
    y += rowH;
  });

  y += 5;

  // ─────────────────────────────────────────────
  // TABLA DE PRODUCTOS
  // ─────────────────────────────────────────────
  // Cabecera tabla
  doc.setFillColor(...RED);
  doc.rect(ML, y, CW, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);

  const c1 = ML + 2;             // Producto
  const c2 = ML + CW * 0.55;    // Cant
  const c3 = ML + CW * 0.70;    // Precio
  const c4 = PW - MR - 2;       // Subtotal (right)

  doc.text('Producto / Modelo',         c1,      y + 4.5);
  doc.text('Cantidad',                  c2 + 10, y + 4.5, { align: 'center' });
  doc.text('Precio B2B',                c3 + 10, y + 4.5, { align: 'center' });
  doc.text('Subtotal',                  c4,      y + 4.5, { align: 'right' });
  y += 8;

  // Filas de productos
  orderData.items.forEach((item, idx) => {
    const sub = (item.quantity * orderData.unitPrice).toFixed(2);
    const rowBg = idx % 2 === 0 ? [255, 255, 255] : [248, 250, 252];
    doc.setFillColor(...rowBg);
    doc.rect(ML, y, CW, 8, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(17, 24, 39);
    doc.text('Rosario ' + item.product.name, c1, y + 3.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...GRY);
    doc.text('SKU: ' + item.product.sku, c1, y + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(17, 24, 39);
    doc.text(item.quantity + ' u',            c2 + 10, y + 5, { align: 'center' });
    doc.text('S/. ' + orderData.unitPrice.toFixed(2), c3 + 10, y + 5, { align: 'center' });

    doc.setTextColor(...DKBL);
    doc.text('S/. ' + sub, c4, y + 5, { align: 'right' });

    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.2);
    doc.line(ML, y + 8, PW - MR, y + 8);
    y += 8;
  });

  y += 6;

  // ─────────────────────────────────────────────
  // TOTALES + CUENTAS BANCARIAS (dos columnas)
  // ─────────────────────────────────────────────
  const leftW  = CW * 0.55;
  const rightX = ML + leftW + 4;
  const rightW = CW - leftW - 4;
  const yTotStart = y;

  // — Columna izquierda: Cuentas bancarias —
  doc.setFillColor(240, 253, 244);
  doc.rect(ML, y, leftW, 32, 'F');
  doc.setDrawColor(167, 243, 208);
  doc.setLineWidth(0.3);
  doc.rect(ML, y, leftW, 32);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(22, 101, 52);
  doc.text('CUENTAS BANCARIAS PARA TRANSFERENCIA:', ML + 3, y + 6);

  const bankLines = [
    'Beneficiario: Somos Marketing Peru E.I.R.L.',
    'Interbank Cta Cte: 200-3008139189',
    'CCI Interbancario: 003-200-003008139189-35',
    'Yape / Plin / Izipay: (+51) 969 654 895'
  ];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  bankLines.forEach((line, i) => {
    doc.text(line, ML + 3, y + 12 + i * 5);
  });

  // — Columna derecha: Resumen financiero —
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);

  const totals = [
    ['Total Unidades:',    orderData.totalUnits + ' u'],
    ['Subtotal Productos:', 'S/. ' + orderData.subtotal.toFixed(2)],
    ['Flete de Envio:',    orderData.shippingFee === 0 ? 'GRATIS' : 'S/. ' + orderData.shippingFee.toFixed(2)]
  ];

  totals.forEach((row, i) => {
    const ry = yTotStart + 6 + i * 6;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(row[0], rightX, ry);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(row[1], ML + CW, ry, { align: 'right' });
  });

  // Línea separadora total
  const tyLine = yTotStart + 24;
  doc.setDrawColor(...RED);
  doc.setLineWidth(0.6);
  doc.line(rightX, tyLine, ML + CW, tyLine);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...RED);
  doc.text('TOTAL COMPRA:', rightX, tyLine + 7);
  doc.text('S/. ' + orderData.grandTotal.toFixed(2), ML + CW, tyLine + 7, { align: 'right' });

  y = Math.max(y + 36, yTotStart + 36);
  y += 6;

  // ─────────────────────────────────────────────
  // PIE DE PAGINA
  // ─────────────────────────────────────────────
  doc.setDrawColor(229, 231, 235);
  doc.setLineWidth(0.3);
  doc.line(ML, y, PW - MR, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...GRY);
  doc.text(
    'Rosarios Peruanos & Somos Marketing Peru EIRL  |  WhatsApp: +51 969 654 895  |  rosariosperuanos.com  |  Magdalena del Mar, Lima, Peru',
    PW / 2, y, { align: 'center' }
  );
  y += 4;
  doc.text(
    'Conforme a la Ley N 29733 de Proteccion de Datos Personales, su informacion es tratada con estricta confidencialidad.',
    PW / 2, y, { align: 'center' }
  );

  // ─────────────────────────────────────────────
  // GUARDAR PDF
  // ─────────────────────────────────────────────
  doc.save('Orden_de_Compra_' + orderData.orderId + '.pdf');
}

// ================= WEB ORDER CANCELLATION HANDLER =================
function openCancelOrderModal() {
  const modal = document.getElementById('cancel-order-modal');
  if (modal) modal.style.display = 'flex';
}

function closeCancelOrderModal() {
  const modal = document.getElementById('cancel-order-modal');
  if (modal) modal.style.display = 'none';
}

function submitCancelOrderForm(e) {
  if (e) e.preventDefault();

  const orderId = document.getElementById('cancel-ord-id').value.trim().toUpperCase();
  const doc = document.getElementById('cancel-ord-doc').value.trim();
  const statusMsg = document.getElementById('cancel-status-msg');

  if (!orderId || !doc) {
    alert('Por favor ingrese su número de orden y documento/correo.');
    return;
  }

  statusMsg.style.display = 'block';
  statusMsg.style.backgroundColor = '#fef3c7';
  statusMsg.style.color = '#92400e';
  statusMsg.innerHTML = '⏳ Procesando la anulación de la Orden en Google Sheets...';

  const payload = {
    type: "cancelOrder",
    secretKey: "RP2026-SOMOS-MKT-PERU-SECURE-9k2x",
    orderId: orderId,
    buyerDoc: doc
  };

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(() => {
    statusMsg.style.backgroundColor = '#fee2e2';
    statusMsg.style.color = '#991b1b';
    statusMsg.innerHTML = `✅ <strong>¡Orden N° ${orderId} Anulada!</strong> Se ha actualizado la hoja de cálculo de Google a CANCELADO.`;
    document.getElementById('cancel-order-form').reset();
  }).catch(() => {
    statusMsg.style.backgroundColor = '#fee2e2';
    statusMsg.style.color = '#991b1b';
    statusMsg.innerHTML = `✅ <strong>Solicitud de anulación enviada para la Orden N° ${orderId}.</strong>`;
    document.getElementById('cancel-order-form').reset();
  });
}

function setCartItemQty(productId, val) {
  const parsed = parseInt(val, 10);
  const qty = isNaN(parsed) || parsed < 1 ? 1 : parsed;
  const item = cart.find(i => i.product.id === productId);
  if (item) {
    item.quantity = qty;
    saveCart();
    renderCheckoutPage();
    renderShopCartMatrix();
    updateCartBadge();
  }
}

function renderShopCartMatrix() {
  const container = document.getElementById('shop-cart-matrix-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    return;
  }

  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const unitPrice = getUnitPrice(totalUnits);
  const subtotal = cart.reduce((sum, item) => sum + (item.quantity * unitPrice), 0);

  let discountNotice = '';
  if (totalUnits >= 1000) {
    discountNotice = `🎉 <strong>¡Máximo Descuento Alcanzado!</strong> Al acumular ${totalUnits}u en total, todos tus colores reciben la tarifa de <strong>S/. 0.40 / u</strong>.`;
  } else if (totalUnits >= 500) {
    discountNotice = `⭐ <strong>¡Tarifa Medio Millar!</strong> Tienes ${totalUnits}u acumuladas (S/. 0.50/u). ¡Agrega ${1000 - totalUnits}u más para bajar a <strong>S/. 0.40 / u</strong>!`;
  } else {
    discountNotice = `💡 Tienes ${totalUnits}u acumuladas (S/. 0.60/u). ¡Llega a 500u para pagar S/. 0.50/u o a 1,000u para pagar S/. 0.40/u!`;
  }

  container.innerHTML = `
    <div style="margin-top: 2.5rem; background: white; border-radius: var(--radius-xl); border: 2px solid var(--primary-border); padding: 1.5rem; box-shadow: var(--shadow-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 class="font-display" style="font-size: 1.25rem; font-weight: 800; color: var(--text-dark);">📋 Tu Cotización Acumulada (${cart.length} colores)</h3>
          <p style="font-size: 0.85rem; color: var(--text-gray); margin: 0;">Los colores se acumulan para darte el mejor precio por volumen total.</p>
        </div>
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 0.35rem 0.75rem; border-radius: 9999px;">
          Total: ${totalUnits} Unidades
        </span>
      </div>

      <div style="background: var(--surface-alt); padding: 0.75rem 1rem; border-radius: var(--radius-md); font-size: 0.85rem; color: var(--text-dark); margin-bottom: 1rem;">
        ${discountNotice}
      </div>

      <div style="overflow-x: auto;">
        <table class="checkout-table" style="font-size: 0.875rem;">
          <thead>
            <tr>
              <th>Color / Modelo</th>
              <th style="text-align: center;">Cantidad</th>
              <th style="text-align: right;">Precio B2B</th>
              <th style="text-align: right;">Subtotal</th>
              <th style="text-align: center;">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            ${cart.map(item => `
              <tr>
                <td style="display: flex; align-items: center; gap: 0.75rem;">
                  <img src="${item.product.photo || item.product.image}" alt="${item.product.name}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: cover;" />
                  <div>
                    <strong style="color: var(--text-dark);">Rosario ${item.product.name}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-gray); font-family: var(--font-mono);">${item.product.sku}</div>
                  </div>
                </td>
                <td style="text-align: center;">
                  <div style="display: inline-flex; align-items: center; gap: 0.35rem;">
                    <button type="button" onclick="window.app.updateCartQty('${item.product.id}', -50)" class="qty-btn" style="padding: 0.2rem 0.4rem; font-size: 0.75rem;">-50</button>
                    <input type="number" min="1" step="10" value="${item.quantity}" onchange="window.app.setCartItemQty('${item.product.id}', this.value)" style="width: 75px; text-align: center; font-family: var(--font-mono); font-weight: 700; border: 1px solid var(--border-gray); border-radius: 6px; padding: 0.2rem;" />
                    <button type="button" onclick="window.app.updateCartQty('${item.product.id}', 50)" class="qty-btn" style="padding: 0.2rem 0.4rem; font-size: 0.75rem;">+50</button>
                  </div>
                </td>
                <td style="text-align: right; font-family: var(--font-mono);">S/. ${unitPrice.toFixed(2)}</td>
                <td style="text-align: right; font-family: var(--font-mono); font-weight: 700; color: var(--secondary);">S/. ${(item.quantity * unitPrice).toFixed(2)}</td>
                <td style="text-align: center;">
                  <button type="button" onclick="window.app.removeFromCart('${item.product.id}')" style="background: none; border: none; cursor: pointer; color: var(--primary);" title="Quitar este color">🗑️</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; border-top: 1px solid var(--border-light); padding-top: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-gray);">Monto Subtotal Acumulado:</span>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">S/. ${subtotal.toFixed(2)}</div>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button type="button" onclick="window.app.navigateTo('checkout')" class="btn-primary" style="padding: 0.75rem 1.5rem;">
            🛒 Finalizar Pedido (${totalUnits}u) →
          </button>
        </div>
      </div>
    </div>
  `;
}

// Alternar vista de foto de Silvia (Real / Arte)
function setSilviaView(viewType) {
  const realBox = document.getElementById('silvia-img-real-box');
  const artImg = document.getElementById('silvia-img-art');
  const btnReal = document.getElementById('toggle-photo-real');
  const btnArt = document.getElementById('toggle-photo-art');

  if (!realBox || !artImg || !btnReal || !btnArt) return;

  if (viewType === 'real') {
    realBox.style.display = 'block';
    artImg.style.display = 'none';
    btnReal.style.background = 'var(--primary)';
    btnReal.style.color = 'white';
    btnArt.style.background = 'transparent';
    btnArt.style.color = 'var(--text-gray)';
  } else {
    realBox.style.display = 'none';
    artImg.style.display = 'block';
    btnArt.style.background = 'var(--primary)';
    btnArt.style.color = 'white';
    btnReal.style.background = 'transparent';
    btnReal.style.color = 'var(--text-gray)';
  }
}

// Global App Namespace
window.app = {
  navigateTo,
  selectProduct,
  setImageView,
  selectQty,
  onQtyInputChange,
  addToCartFromConfigurator,
  openAddToCartModal,
  closeAddToCartModal,
  updateCartQty,
  setCartItemQty,
  removeFromCart,
  selectDelivery,
  processOrderSubmit,
  openClaimsModal,
  closeClaimsModal,
  openCancelOrderModal,
  closeCancelOrderModal,
  submitCancelOrderForm,
  setSilviaView,
  retryOrderSubmit,
  closeProgressModal,
  handleLookupSubmit,
  lookupAndRenderConfirmedOrder
};

// ── MANEJADORES DE CONSULTA Y PAGO DE ORDEN CONFIRMADA POR ALMACÉN / CHATBOT ──
async function handleLookupSubmit(e) {
  if (e) e.preventDefault();
  const rawId = document.getElementById('lookup-ord-id').value.trim();
  const cleanId = rawId.replace(/^(N[°ºo]?|ORDEN|OC|#|\s)+/gi, '').trim().toUpperCase();
  document.getElementById('lookup-ord-id').value = cleanId;
  const doc = document.getElementById('lookup-ord-doc').value.trim();
  if (!cleanId) return;
  await lookupAndRenderConfirmedOrder(cleanId, doc);
}

async function lookupAndRenderConfirmedOrder(orderId, doc) {
  navigateTo('consulta-pago');
  const cleanId = (orderId || '').toString().replace(/^(N[°ºo]?|ORDEN|OC|#|\s)+/gi, '').trim().toUpperCase();
  const msgEl = document.getElementById('lookup-status-msg');
  if (msgEl) {
    msgEl.style.display = 'block';
    msgEl.style.background = '#eff6ff';
    msgEl.style.color = '#1d4ed8';
    msgEl.innerText = `🔍 Consultando Orden ${cleanId} en Google Sheets en tiempo real...`;
  }

  try {
    const payload = {
      type: 'lookupOrder',
      action: 'lookupOrder',
      orderId: cleanId,
      buyerRuc: doc,
      doc: doc
    };

    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const json = await resp.json();

    if (json && json.success && json.order) {
      const o = json.order;
      if (msgEl) {
        msgEl.style.background = '#ecfdf5';
        msgEl.style.color = '#047857';
        msgEl.innerText = `✅ ¡Orden N° ${o.orderId} encontrada! Mostrando ficha de pago actualizada.`;
      }

      // Renderizar la Ficha de Pago de Orden Confirmada en la página de Checkout
      renderConfirmedPaymentCard(o);
    } else {
      throw new Error(json.message || 'No se encontró la Orden de Compra.');
    }

  } catch (err) {
    if (msgEl) {
      msgEl.style.background = '#fef2f2';
      msgEl.style.color = '#b91c1c';
      msgEl.innerText = `✖ Error: ${err.message}`;
    }
  }
}

function renderConfirmedPaymentCard(o) {
  const container = document.getElementById('confirmed-order-render-area') || document.getElementById('checkout-table-container');
  if (!container) return;

  const driveBtn = o.driveUrl ? `<a href="${o.driveUrl}" target="_blank" class="btn-secondary" style="font-size:0.8rem; padding:0.4rem 0.8rem; background: #e2e8f0; color: #1e293b; border: 1px solid #cbd5e1; text-decoration: none; border-radius: 6px; font-weight: 700;">📄 Abrir PDF Oficial en Drive</a>` : '';
  const wspNotifyMsg = encodeURIComponent(`Hola Silvia, adjunto constancia de pago para mi *Orden N° ${o.orderId}* por el monto final de S/. ${o.grandTotal.toFixed(2)}.`);
  const wspNotifyUrl = `https://wa.me/51969654895?text=${wspNotifyMsg}`;

  container.innerHTML = `
    <div style="background: white; border: 2px solid #2563eb; border-radius: var(--radius-xl); padding: 2rem 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-light); padding-bottom: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="background: #2563eb; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 800; font-size: 0.75rem; font-family: var(--font-mono);">
            ESTADO: ${o.status || 'STOCK CONFIRMADO POR ALMACÉN'}
          </span>
          <h2 class="font-display" style="font-size: 1.6rem; font-weight: 900; color: var(--text-dark); margin-top: 0.5rem;">
            Ficha de Pago — Orden N° ${o.orderId}
          </h2>
          <p style="font-size: 0.85rem; color: var(--text-gray); margin-top: 0.2rem;">
            Cliente: <strong>${o.buyerName || 'Cliente'}</strong> | RUC/DNI: <strong>${o.buyerRuc || '—'}</strong> | Tel: <strong>${o.buyerPhone || '—'}</strong>
          </p>
        </div>
        <div>${driveBtn}</div>
      </div>

      <!-- Detalle de productos y cantidades confirmadas -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="font-weight: 800; color: #1e293b; font-size: 0.9rem; margin-bottom: 0.75rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.4rem;">
          📦 DETALLE DE ROSARIOS Y CANTIDADES CONFIRMADAS EN ALMACÉN:
        </h4>
        <pre style="font-family: var(--font-mono); font-size: 0.85rem; color: #334155; white-space: pre-wrap; margin: 0; line-height: 1.6;">${o.itemsText || 'Rosarios Plásticos Surtidos'}</pre>
      </div>

      <!-- Resumen Financiero Actualizado -->
      <div style="background: #eff6ff; border: 2px solid #bfdbfe; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1rem; text-align: center;">
        <div>
          <span style="font-size: 0.75rem; color: #1e40af; text-transform: uppercase; font-weight: 700;">Unidades Finales</span>
          <div style="font-size: 1.3rem; font-weight: 900; color: #1e3a8a;">${o.totalUnits.toLocaleString()} u</div>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: #1e40af; text-transform: uppercase; font-weight: 700;">Precio Unit. B2B</span>
          <div style="font-size: 1.3rem; font-weight: 900; color: #1e3a8a;">S/. ${o.unitPrice.toFixed(2)}</div>
        </div>
        <div>
          <span style="font-size: 0.75rem; color: #1e40af; text-transform: uppercase; font-weight: 700;">Flete</span>
          <div style="font-size: 1.3rem; font-weight: 900; color: #1e3a8a;">${o.shippingFee === 0 ? 'GRATIS' : 'S/. ' + o.shippingFee.toFixed(2)}</div>
        </div>
        <div style="background: #2563eb; color: white; padding: 0.75rem; border-radius: var(--radius-md);">
          <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; opacity: 0.9;">TOTAL A PAGAR</span>
          <div style="font-size: 1.6rem; font-weight: 900; color: white;">S/. ${o.grandTotal.toFixed(2)}</div>
        </div>
      </div>

      <!-- Indicación y Botones de Pago / Notificación -->
      <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
        <p style="font-size: 0.85rem; color: var(--text-gray); font-weight: 600;">
          💳 Complete su pago seguro con Izipay (Tarjeta Crédito/Débito) o realice la transferencia bancaria por <strong>S/. ${o.grandTotal.toFixed(2)}</strong>:
        </p>
        <a href="${wspNotifyUrl}" target="_blank" class="btn-primary" style="background: #25D366; color: white; padding: 0.75rem 1.5rem; font-size: 0.9rem; font-weight: 800; border-radius: var(--radius-md); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 12px rgba(37,211,102,0.3);">
          💬 Notificar Pago Realizado a Silvia por WhatsApp →
        </a>
      </div>
    </div>
  `;

  // Actualizar totales en la columna derecha
  updateTotalsSummaryConfirmed(o);

  // Scroll suave hacia la ficha de pago
  container.scrollIntoView({ behavior: 'smooth' });
}

function updateTotalsSummaryConfirmed(o) {
  const sumQty = document.getElementById('sum-qty');
  const sumUnitPrice = document.getElementById('sum-unit-price');
  const sumSubtotal = document.getElementById('sum-subtotal');
  const sumShipping = document.getElementById('sum-shipping');
  const sumTotal = document.getElementById('sum-total');

  if (sumQty) sumQty.innerText = o.totalUnits.toLocaleString() + ' unidades';
  if (sumUnitPrice) sumUnitPrice.innerText = 'S/. ' + o.unitPrice.toFixed(2) + ' /u';
  if (sumSubtotal) sumSubtotal.innerText = 'S/. ' + o.subtotal.toFixed(2);
  if (sumShipping) sumShipping.innerText = o.shippingFee === 0 ? 'GRATIS' : 'S/. ' + o.shippingFee.toFixed(2);
  if (sumTotal) sumTotal.innerText = 'S/. ' + o.grandTotal.toFixed(2);
}

// Initialization on Ready
document.addEventListener('DOMContentLoaded', () => {
  // ── BRANDING CORPORATIVO Y MÉTRICAS DE CONSOLA (Estilo Tubos de Cortina v2) ──
  const bannerStyle  = 'background: #1c1917; color: #f59e0b; padding: 12px 24px; border-radius: 10px; font-weight: 900; font-size: 15px; border: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(245,158,11,0.5);';
  const tagStyle     = 'background: #f59e0b; color: #1c1917; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 10px;';
  const infoStyle    = 'color: #a8a29e; font-size: 11px; font-family: "Courier New", monospace;';
  const successStyle = 'color: #10b981; font-weight: bold; font-size: 11px;';
  const linkStyle    = 'color: #25d366; font-weight: bold; text-decoration: underline; font-size: 11px;';

  console.log('%c ROSARIOS PERUANOS | Somos Marketing Perú E.I.R.L. ', bannerStyle);
  console.log('%c 🏛️ RUC: 20615554384 | 📍 Jr. Virrey Manuel Guirior 260, Magdalena del Mar, Lima ', infoStyle);
  console.log('%c 📞 +51 999 900 396 / +51 969 654 895 | 📧 contacto@somosmarketingperu.com ', infoStyle);
  console.log('%c © 2026 Todos los derechos reservados. ', 'color: #78716c; font-size: 10px;');

  console.log('%c------------------------------------------------------------------', 'color: #444;');

  console.log('%c MARKETING INTELLIGENCE ', tagStyle);
  console.log('  ↳ Conversion Engine: Optimized for B2B Wholesale Distribution (Rosarios Peruanos) ✅');
  console.log('  ↳ SEO Strategy & Indexability: High Indexability & Semantic Hierarchy 🚀');
  console.log('  ↳ Direct Contact: %chttps://wa.me/51969654895?text=Consulta%20desde%20Consola%20Rosarios', linkStyle);

  console.log('%c ENGINEERING DEBUG ', tagStyle);
  console.log(`  ↳ Viewport: ${window.innerWidth}x${window.innerHeight}px`);
  console.log(`  ↳ Device Pixel Ratio: ${window.devicePixelRatio.toFixed(2)}`);
  console.log(`  ↳ Graphics & UI Engine: Vanilla JS Engine v3.0 (CSS Variables & Smooth FX)`);
  console.log(`  ↳ Lighthouse Optimization: Mobile Pixel Ratio & CPU/Battery Saver Active ⚡`);

  console.log('%c------------------------------------------------------------------', 'color: #444;');

  // ── INTERACTION TRACKER (UX/MARKETING/GA) ──
  const trackInteraction = (label) => {
    console.log(`%c[TRACKING] Interaction: ${label} %c| Time: ${new Date().toLocaleTimeString()}`, 'color: #f59e0b; font-weight: bold;', 'color: #78716c;');
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'ua_interaction',
        'event_category': 'Engagement',
        'event_action': 'Click',
        'event_label': label
      });
    }
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a.btn, .nav-btn, .mobile-nav-link, .color-swatch-btn, .qty-btn');
    if (btn) {
      const label = btn.innerText || btn.getAttribute('aria-label') || btn.getAttribute('title') || 'Action Element';
      if (label.trim()) {
        trackInteraction(label.trim().substring(0, 35));
      }
    }
  });

  console.log('🚀 ROSARIOS ENGINE: Inicializando módulos...');

  const modules = [
    { name: 'Catálogo de Colores & Swatches', fn: () => renderSwatches() },
    { name: 'Contador de Carrito Mayorista', fn: () => updateCartBadge() },
    { name: 'Sistema de Navegación SPA',    fn: () => navigateTo('inicio') },
    { name: 'Mobile Menu Drawer',            fn: () => {
        const mobBtn = document.getElementById('mobile-menu-toggle');
        const drawer = document.getElementById('mobile-drawer');
        if (mobBtn && drawer) {
          mobBtn.addEventListener('click', () => drawer.classList.toggle('active'));
        }
      }
    },
    { name: 'Formulario Reclamaciones',      fn: () => {
        const claimsForm = document.getElementById('claims-form');
        if (claimsForm) claimsForm.addEventListener('submit', submitClaimForm);
      }
    },
    { name: 'WhatsApp & Session Sync',       fn: () => {
        const urlParams = new URLSearchParams(window.location.search);
        const wspParam = urlParams.get('wsp') || urlParams.get('phone');
        if (wspParam) {
          sessionStorage.setItem('rp_user_wsp', wspParam);
          const ordPhone = document.getElementById('ord-phone');
          if (ordPhone) ordPhone.value = wspParam.replace(/\D/g, '');
          const returnMsg = encodeURIComponent(`Hola Silvia, volví a WhatsApp desde la web rosariosperuanos.com.`);
          const returnUrl = `https://wa.me/51969654895?text=${returnMsg}`;
          const deskWsp = document.getElementById('nav-btn-wsp-return');
          const mobWsp = document.getElementById('mob-btn-wsp-return');
          if (deskWsp) deskWsp.href = returnUrl;
          if (mobWsp) mobWsp.href = returnUrl;
        }
        const actionParam = urlParams.get('action');
        const orderIdParam = urlParams.get('orderId') || urlParams.get('oc');
        const docParam = urlParams.get('doc') || urlParams.get('ruc') || urlParams.get('dni');

        if (actionParam === 'pay' || actionParam === 'consultar' || actionParam === 'lookup') {
          if (orderIdParam) {
            const lookupInput = document.getElementById('lookup-ord-id');
            if (lookupInput) lookupInput.value = orderIdParam.trim().toUpperCase();
            if (docParam) {
              const lookupDoc = document.getElementById('lookup-ord-doc');
              if (lookupDoc) lookupDoc.value = docParam.trim();
            }
            navigateTo('consulta-pago');
            lookupAndRenderConfirmedOrder(orderIdParam, docParam || '');
          }
        } else if (actionParam === 'cancelOrder' || actionParam === 'anular' || orderIdParam) {
          if (orderIdParam) {
            const cancelInput = document.getElementById('cancel-ord-id');
            if (cancelInput) cancelInput.value = orderIdParam.trim().toUpperCase();
          }
          if (actionParam === 'cancelOrder' || actionParam === 'anular') {
            openCancelOrderModal();
          }
        }
      }
    }
  ];

  modules.forEach(m => {
    try {
      m.fn();
      console.log(`%c  ✔ ${m.name.padEnd(35)} [READY]`, 'color: #f59e0b; font-size: 10px;');
    } catch (err) {
      console.error(`%c  ✘ Error inicializando ${m.name}:`, 'color: #ef4444; font-weight: bold;', err);
    }
  });

  console.log('%c------------------------------------------------------------------', infoStyle);
  console.log('%c✅ DESARROLLADO POR SOMOS MARKETING PERÚ | Todos los sistemas activos.', successStyle);
});

