const products = {
  erp: {
    title: 'IAORUS ERP',
    docs: [
      { name: 'Catálogo Comercial ERP', type: 'Comercial', icon: 'file-text' },
      { name: 'Ficha Funcional ERP', type: 'Funcional', icon: 'clipboard' },
      { name: 'Presentación Comercial', type: 'Comercial', icon: 'presentation' },
      { name: 'Casos de Uso', type: 'Funcional', icon: 'book-open' },
      { name: 'Documento ROI', type: 'Comercial', icon: 'trending-up' },
      { name: 'Implantación y Onboarding', type: 'Implantación', icon: 'rocket' },
      { name: 'Manual de Funcionalidades', type: 'Formación', icon: 'book' }
    ]
  },
  bp360: {
    title: 'IAORUS BP360',
    docs: [
      { name: 'Catálogo BP360', type: 'Comercial', icon: 'file-text' },
      { name: 'Presentación PROMO', type: 'Comercial', icon: 'presentation' },
      { name: 'Dashboard Activos', type: 'Técnico', icon: 'monitor' },
      { name: 'Casos de Uso Inmobiliario', type: 'Funcional', icon: 'book-open' },
      { name: 'Documento ROI BP360', type: 'Comercial', icon: 'trending-up' },
      { name: 'Manual de Usuario BP360', type: 'Formación', icon: 'book' }
    ]
  },
  gestia: {
    title: 'Gest-IA',
    docs: [
      { name: 'Catálogo Gest-IA', type: 'Comercial', icon: 'file-text' },
      { name: 'Ficha Funcional', type: 'Funcional', icon: 'clipboard' },
      { name: 'Guía de Integración', type: 'Técnico', icon: 'settings' }
    ]
  },
  iatask: {
    title: 'IATask',
    docs: [
      { name: 'Catálogo IATask', type: 'Comercial', icon: 'file-text' },
      { name: 'Presentación Control de Presencia', type: 'Comercial', icon: 'presentation' },
      { name: 'Guía de Configuración', type: 'Implantación', icon: 'settings' }
    ]
  },
  apprrhh: {
    title: 'APP RRHH',
    docs: [
      { name: 'Catálogo APP RRHH', type: 'Comercial', icon: 'file-text' },
      { name: 'Ficha Funcional', type: 'Funcional', icon: 'clipboard' }
    ]
  },
  accesos: {
    title: 'Control de Accesos',
    docs: [
      { name: 'Catálogo Control Accesos', type: 'Técnico', icon: 'file-text' },
      { name: 'Guía Técnica Integración', type: 'Técnico', icon: 'settings' },
      { name: 'Documentación API', type: 'Técnico', icon: 'code' }
    ]
  },
  web: {
    title: 'Desarrollo Web y Tiendas Online',
    docs: [
      { name: 'Catálogo Desarrollo Web', type: 'Comercial', icon: 'file-text' },
      { name: 'Metodología de Desarrollo', type: 'Funcional', icon: 'clipboard' },
      { name: 'Documento de Toma de Requisitos', type: 'Implantación', icon: 'file-text' },
      { name: 'Alcance del Proyecto', type: 'Comercial', icon: 'presentation' },
      { name: 'Proceso de Diseño y Validación', type: 'Funcional', icon: 'layout' },
      { name: 'Casos de Éxito Web', type: 'Casos de Éxito', icon: 'award' }
    ]
  }
};

const icons = {
  'file-text': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'clipboard': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  'presentation': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  'book-open': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'trending-up': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  'rocket': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  'book': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  'monitor': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  'settings': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  'code': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  'layout': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  'award': '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>'
};

function getIconSvg(name) {
  return icons[name] || icons['file-text'];
}

function createModal() {
  const div = document.createElement('div');
  div.className = 'modal-overlay';
  div.id = 'modal-overlay';
  div.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <h2 id="modal-title"></h2>
      <div class="modal-body">
        <p style="color:var(--gray-light);margin-bottom:16px;font-size:0.9rem;">Documentación asociada a este producto:</p>
        <ul class="doc-list" id="modal-doc-list"></ul>
      </div>
    </div>
  `;
  div.addEventListener('click', e => { if (e.target === div) closeModal(); });
  document.body.appendChild(div);
  return div;
}

window.openProductModal = function(productId) {
  const product = products[productId];
  if (!product) return;
  const overlay = document.getElementById('modal-overlay') || createModal();
  document.getElementById('modal-title').textContent = product.title;
  const list = document.getElementById('modal-doc-list');
  list.innerHTML = product.docs.map(d => `
    <li>
      <span class="doc-icon">${getIconSvg(d.icon)}</span>
      <span class="doc-name">${d.name}</span>
      <span class="doc-type">${d.type}</span>
      <span class="doc-download" onclick="showToast('Documento disponible próximamente')">Descargar</span>
    </li>
  `).join('');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

window.showToast = function(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
};

