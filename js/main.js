// Mobile Navigation
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });
}
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Product modal
function openProductModal(productId) {
  const products = {
    erp: {
      title: 'IAORUS ERP',
      docs: [
        { name: 'Catálogo Comercial ERP', type: 'Comercial', icon: '📄' },
        { name: 'Ficha Funcional ERP', type: 'Funcional', icon: '📋' },
        { name: 'Presentación Comercial', type: 'Comercial', icon: '📊' },
        { name: 'Casos de Uso', type: 'Funcional', icon: '📘' },
        { name: 'Documento ROI', type: 'Comercial', icon: '📈' },
        { name: 'Implantación y Onboarding', type: 'Implantación', icon: '🚀' },
        { name: 'Manual de Funcionalidades', type: 'Formación', icon: '📖' }
      ]
    },
    bp360: {
      title: 'IAORUS BP360',
      docs: [
        { name: 'Catálogo BP360', type: 'Comercial', icon: '📄' },
        { name: 'Presentación PROMO', type: 'Comercial', icon: '📊' },
        { name: 'Dashboard Activos', type: 'Técnico', icon: '📱' },
        { name: 'Casos de Uso Inmobiliario', type: 'Funcional', icon: '📘' },
        { name: 'Documento ROI BP360', type: 'Comercial', icon: '📈' },
        { name: 'Manual de Usuario BP360', type: 'Formación', icon: '📖' }
      ]
    },
    gestia: {
      title: 'Gest-IA',
      docs: [
        { name: 'Catálogo Gest-IA', type: 'Comercial', icon: '📄' },
        { name: 'Ficha Funcional', type: 'Funcional', icon: '📋' },
        { name: 'Guía de Integración', type: 'Técnico', icon: '🔧' }
      ]
    },
    iatask: {
      title: 'IATask',
      docs: [
        { name: 'Catálogo IATask', type: 'Comercial', icon: '📄' },
        { name: 'Presentación Control de Presencia', type: 'Comercial', icon: '📊' },
        { name: 'Guía de Configuración', type: 'Implantación', icon: '⚙️' }
      ]
    },
    apprrhh: {
      title: 'APP RRHH',
      docs: [
        { name: 'Catálogo APP RRHH', type: 'Comercial', icon: '📄' },
        { name: 'Ficha Funcional', type: 'Funcional', icon: '📋' }
      ]
    },
    accesos: {
      title: 'Control de Accesos',
      docs: [
        { name: 'Catálogo Control Accesos', type: 'Técnico', icon: '📄' },
        { name: 'Guía Técnica Integración', type: 'Técnico', icon: '🔧' },
        { name: 'Documentación API', type: 'Técnico', icon: '🔗' }
      ]
    },
    web: {
      title: 'Desarrollo Web y Tiendas Online',
      docs: [
        { name: 'Catálogo Desarrollo Web', type: 'Comercial', icon: '📄' },
        { name: 'Metodología de Desarrollo', type: 'Funcional', icon: '📋' },
        { name: 'Documento de Toma de Requisitos', type: 'Implantación', icon: '📝' },
        { name: 'Alcance del Proyecto', type: 'Comercial', icon: '📊' },
        { name: 'Proceso de Diseño y Validación', type: 'Funcional', icon: '🎨' },
        { name: 'Casos de Éxito Web', type: 'Casos de Éxito', icon: '🏆' }
      ]
    }
  };
  const product = products[productId];
  if (!product) return;
  const overlay = document.getElementById('modal-overlay') || createModal();
  document.getElementById('modal-title').textContent = product.title;
  const list = document.getElementById('modal-doc-list');
  list.innerHTML = product.docs.map(d => `
    <li>
      <span class="doc-icon">${d.icon}</span>
      <span class="doc-name">${d.name}</span>
      <span class="doc-type">${d.type}</span>
      <span class="doc-download" onclick="showToast('Documento disponible próximamente')">Descargar</span>
    </li>
  `).join('');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
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
        <p style="color:#6c757d;margin-bottom:16px;">Documentación asociada a este producto:</p>
        <ul class="doc-list" id="modal-doc-list"></ul>
      </div>
    </div>
  `;
  div.addEventListener('click', e => { if (e.target === div) closeModal(); });
  document.body.appendChild(div);
  return div;
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Toast notifications
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
    background: '#333', color: '#fff', padding: '12px 24px', borderRadius: '8px',
    fontSize: '0.9rem', zIndex: '3000', boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    opacity: '0', transition: 'opacity 0.3s ease'
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.opacity = '1');
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Filter resources
function filterResources(category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.resource-card').forEach(card => {
    const cats = card.dataset.category || '';
    card.style.display = (!category || category === 'all' || cats.split(',').includes(category)) ? 'block' : 'none';
  });
}

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card, .sector-card, .service-card, .resource-card, .case-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// Demo form
document.addEventListener('submit', function(e) {
  if (e.target && e.target.id === 'demo-form') {
    e.preventDefault();
    showToast('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
    e.target.reset();
  }
});

// Contact form
document.addEventListener('submit', function(e) {
  if (e.target && e.target.id === 'contact-form') {
    e.preventDefault();
    showToast('¡Mensaje enviado con éxito! Le responderemos a la mayor brevedad.');
    e.target.reset();
  }
});
