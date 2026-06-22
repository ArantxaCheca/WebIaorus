document.addEventListener('submit', function(e) {
  if (e.target && (e.target.id === 'demo-form' || e.target.id === 'contact-form')) {
    e.preventDefault();
    const name = e.target.id === 'demo-form' ? 'solicitud' : 'mensaje';
    window.showToast?.(`¡${name === 'solicitud' ? 'Solicitud' : 'Mensaje'} enviado con éxito! Nos pondremos en contacto pronto.`);
    e.target.reset();
  }
});
