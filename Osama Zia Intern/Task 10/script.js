document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', function(){
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
  Array.from(document.querySelectorAll('[data-scroll]')).forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior:'smooth',block:'start'});
      if (navMenu.classList.contains('open')){ navMenu.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); }
    });
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && navMenu.classList.contains('open')){ navMenu.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); }
  });
  document.querySelectorAll('[data-rotate]').forEach(function(view){
    let pointerActive = false;
    view.addEventListener('pointermove', function(e){
      pointerActive = true;
      const rect = view.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (-y) * 8;
      const ry = (x) * 12;
      view.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale(1.02)';
    }, {passive:true});
    view.addEventListener('pointerleave', function(){
      pointerActive = false;
      view.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name')||'').toString().trim();
      const email = (formData.get('email')||'').toString().trim();
      const message = (formData.get('message')||'').toString().trim();
      if (!name || !email || !message){ showFormError(contactForm,'Please complete all required fields.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ showFormError(contactForm,'Enter a valid email address.'); return; }
      Array.from(contactForm.querySelectorAll('input,textarea,button')).forEach(function(el){ el.setAttribute('disabled','true'); });
      formSuccess.hidden = false;
      contactForm.reset();
      setTimeout(function(){ formSuccess.hidden = true; Array.from(contactForm.querySelectorAll('input,textarea,button')).forEach(function(el){ el.removeAttribute('disabled'); }); },2500);
    });
  }
  function showFormError(form,message){
    const existing = form.querySelector('.form-error');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'form-error';
    el.textContent = message;
    el.style.color = '#ffb4b4';
    el.style.marginTop = '.75rem';
    form.appendChild(el);
    setTimeout(function(){ el.remove(); },3000);
  }
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if (en.isIntersecting) en.target.classList.add('in-view'); });
  }, {threshold:0.12});
  document.querySelectorAll('.product-card, .section-title, .gallery-item').forEach(function(el){ observer.observe(el); });
  window.addEventListener('scroll', function(){ const header = document.querySelector('.site-header'); if (!header) return; if (window.scrollY > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled'); }, {passive:true});
});