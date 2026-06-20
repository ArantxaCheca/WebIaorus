function isPlaceholderUrl(url) {
  return url && url.indexOf('VIDEO_ID_') !== -1;
}

function openVideo(videoUrl, videoTitle) {
  if (isPlaceholderUrl(videoUrl)) {
    showComingSoon(videoTitle || 'Vídeo');
    return;
  }

  const existing = document.getElementById('video-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.id = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-inner">
      <button class="video-modal-close" onclick="closeVideo()">✕</button>
      <iframe src="${videoUrl}" title="${videoTitle || ''}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  `;
  modal.addEventListener('click', function(e) {
    if (e.target === this) closeVideo();
  });
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('active'));
}

function closeVideo() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeVideo();
});

function imgFallback(img, text) {
  var d = document.createElement('div');
  d.className = 'video-thumb-fallback';
  d.textContent = text;
  if (img && img.parentNode) img.parentNode.replaceChild(d, img);
}

function showComingSoon(productName) {
  const existing = document.getElementById('video-modal');
  if (existing) existing.remove();

  const initials = productName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.id = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-inner coming-soon-modal">
      <button class="video-modal-close" onclick="closeVideo()">✕</button>
      <div class="coming-soon-content">
        <div class="coming-soon-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <span class="coming-soon-badge">Próximamente</span>
        <h2>Vídeo demo de ${productName}</h2>
        <p>Estamos preparando una demostración en vídeo de <strong>${productName}</strong> para que puedas ver todas sus funcionalidades en acción.</p>
        <p>Mientras tanto, te invitamos a solicitar una demo personalizada con nuestro equipo. Te mostraremos cómo <strong>${productName}</strong> puede transformar tu negocio.</p>
        <a href="demo.html" class="btn btn-demo btn-lg" onclick="closeVideo()">Solicitar demostración gratuita →</a>
      </div>
    </div>
  `;
  modal.addEventListener('click', function(e) {
    if (e.target === this) closeVideo();
  });
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('active'));
}
