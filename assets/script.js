(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // GitHub Pages is static hosting. Map clean URLs (/about, /contact, /privacypolicy)
  // to their matching HTML files without requiring a server or a framework.
  const routes = {
    '/': '/index.html',
    '/about': '/about.html',
    '/contact': '/contact.html',
    '/privacypolicy': '/privacypolicy.html'
  };
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (routes[path] && !window.location.pathname.endsWith('.html')) {
    // The host's 404 fallback serves this file for clean routes; replace the URL
    // with the requested route after rendering the matching page shell.
    const current = document.documentElement;
    if (path !== '/' && document.body.dataset.routed !== 'true') {
      fetch(routes[path]).then(r => r.ok ? r.text() : Promise.reject()).then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        document.title = doc.title;
        document.body.innerHTML = doc.body.innerHTML;
        document.body.dataset.routed = 'true';
        const script = document.createElement('script');
        script.src = '/assets/script.js';
        document.body.appendChild(script);
      }).catch(() => {});
    }
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`[Time 2 Play Games] ${data.get('topic')}`);
      const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`);
      const address = 'hello@time2playgames.site';
      const status = form.querySelector('.form-status');
      status.textContent = 'Opening your email app… If it does not open, email hello@time2playgames.site directly.';
      window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
    });
  }
})();