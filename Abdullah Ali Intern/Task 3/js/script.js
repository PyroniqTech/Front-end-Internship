document.addEventListener('DOMContentLoaded', function () {
  const homeReg = document.getElementById('homeReg');
  if (homeReg) {
    homeReg.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = homeReg.querySelector('[name=name]').value.trim();
      const email = homeReg.querySelector('[name=email]').value.trim();
      if (!name || !email) {
        alert('Please enter name and email for registration.');
        return;
      }
      alert('Thanks ' + name + '! Your registration request has been received.');
      homeReg.reset();
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = bookingForm.querySelector('[name=name]').value.trim();
      const email = bookingForm.querySelector('[name=email]').value.trim();
      const seats = bookingForm.querySelector('[name=seats]').value.trim();
      if (!name || !email || !seats) {
        alert('Please fill required fields: name, email, seats.');
        return;
      }
      if (isNaN(seats) || parseInt(seats) < 1) {
        alert('Please enter a valid number of seats.');
        return;
      }
      alert('Booking confirmed for ' + name + ' (' + seats + ' seats). We sent details to ' + email + '.');
      bookingForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value.trim();
      const email = contactForm.querySelector('[name=email]').value.trim();
      const message = contactForm.querySelector('[name=message]').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      alert('Thanks ' + name + '! Your message was submitted.');
      contactForm.reset();
    });
  }

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
