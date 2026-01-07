function loadPage(basePath, content) {
  fetch(basePath)
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      document.querySelector('#app').innerHTML = doc.body.innerHTML.replace('<div id="slot"></div>', content);
      initScripts();
    })
    .catch(() => {
      const offlineBase = `
        <header class="bg-gray-950 text-gray-100 sticky top-0 z-50">
          <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3">
              <img src="images/logo.jpg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Travel-icon.png'" alt="Exploria Logo" class="h-10 w-10 rounded">
              <span class="text-lg font-bold">Exploria</span>
            </a>
            <nav class="hidden md:flex items-center gap-6">
              <a href="index.html" class="hover:text-amber-400">Home</a>
              <a href="destinations.html" class="hover:text-amber-400">Destinations</a>
              <a href="contact.html" class="hover:text-amber-400">Contact</a>
            </nav>
            <button id="hamburger-btn" aria-expanded="false" class="md:hidden p-2 rounded bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          <div id="mobile-menu" class="hidden md:hidden bg-gray-900">
            <div class="flex flex-col px-6 py-4">
              <a href="index.html" class="py-2 border-b border-gray-800">Home</a>
              <a href="destinations.html" class="py-2 border-b border-gray-800">Destinations</a>
              <a href="contact.html" class="py-2">Contact</a>
            </div>
          </div>
        </header>
        <div id="slot"></div>
        <footer class="bg-gray-950 mt-12 text-center py-6 text-gray-400 text-sm">© 2025 Exploria Travel Agency</footer>
      `;
      document.querySelector('#app').innerHTML = offlineBase.replace('<div id="slot"></div>', content);
      initScripts();
    });
}

function attachInputMasks() {
  document.querySelectorAll('input[type="tel"], input[inputmode="numeric"], input[name="phone"]').forEach(input => {
    if (!input.__maskAttached) {
      input.addEventListener('input', function() {
        this.value = this.value.replace(/\D+/g, '');
      });
      input.__maskAttached = true;
    }
  });
}

function initScripts() {
  if (window.lucide) try { lucide.createIcons(); } catch (e) {}
  if (!window.__exploriaHandlersAttached) {
    document.addEventListener('click', function(e) {
      const hb = e.target.closest('#hamburger-btn');
      if (hb) {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
          const nowHidden = menu.classList.toggle('hidden');
          hb.setAttribute('aria-expanded', String(!nowHidden));
        }
        return;
      }
      const bookBtn = e.target.closest('.book-now-btn, .book-btn');
      if (bookBtn) {
        const dest = bookBtn.getAttribute('data-dest') || '';
        const destField = document.getElementById('destination') || document.querySelector('input[name="destination"]');
        if (destField) destField.value = dest;
        const bookingEl = document.getElementById('bookingForm');
        if (bookingEl) bookingEl.scrollIntoView({behavior:'smooth', block:'center'});
        return;
      }
    });
    document.addEventListener('submit', function(e) {
      const form = e.target;
      if (!form) return;
      if (form.id === 'bookingForm') {
        e.preventDefault();
        const fd = new FormData(form);
        const name = (fd.get('name') || '').trim();
        const email = (fd.get('email') || '').trim();
        const phone = (fd.get('phone') || '').trim();
        const travelers = (fd.get('travelers') || '').trim();
        if (!name || !email || !phone || !travelers) { alert('All fields are required.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Invalid email format.'); return; }
        if (!/^\d+$/.test(phone) || Number(travelers) <= 0) { alert('Invalid numeric input.'); return; }
        alert('Booking Confirmed!');
        form.reset();
      } else if (form.id === 'contactForm') {
        e.preventDefault();
        const fd = new FormData(form);
        const name = (fd.get('cname') || fd.get('name') || '').trim();
        const email = (fd.get('cemail') || fd.get('email') || '').trim();
        const message = (fd.get('cmessage') || fd.get('message') || '').trim();
        if (!name || !email || !message) { alert('All fields are required.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Invalid email format.'); return; }
        alert('Message Sent Successfully!');
        form.reset();
      }
    });
    window.addEventListener('resize', function() {
      const menu = document.getElementById('mobile-menu');
      const hb = document.getElementById('hamburger-btn');
      if (window.innerWidth >= 768) {
        if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
        if (hb) hb.setAttribute('aria-expanded', 'false');
      }
    });
    window.__exploriaHandlersAttached = true;
  }
  attachInputMasks();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
