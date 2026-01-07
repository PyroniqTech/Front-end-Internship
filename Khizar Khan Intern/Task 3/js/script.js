document.addEventListener('DOMContentLoaded', function() {
  function toggle(idBtn, idMenu) {
    var btn = document.getElementById(idBtn);
    var menu = document.getElementById(idMenu);
    if (!btn || !menu) return;
    btn.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  }
  toggle('mobileMenuBtn', 'mobileMenu');
  toggle('mobileMenuBtn2', 'mobileMenu2');
  toggle('mobileMenuBtn3', 'mobileMenu3');

  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('bookName').value.trim();
      var email = document.getElementById('bookEmail').value.trim();
      var phone = document.getElementById('bookPhone').value.trim();
      var date = document.getElementById('bookDate').value.trim();
      var seats = document.getElementById('bookSeats').value.trim();
      if (!name || !email || !phone || !date || !seats) {
        alert('Please fill all required fields.');
        return;
      }
      if (!/^\d+$/.test(phone.replace(/\s+/g, ''))) {
        alert('Please enter a valid phone number in digits only.');
        return;
      }
      if (!/^\d+$/.test(seats) || parseInt(seats, 10) < 1) {
        alert('Please enter a valid number of seats.');
        return;
      }
      alert('Booking submitted successfully. We will contact you via email.');
      bookingForm.reset();
    });
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('contactName').value.trim();
      var email = document.getElementById('contactEmail').value.trim();
      var message = document.getElementById('contactMessage').value.trim();
      if (!name || !email || !message) {
        alert('Please fill all required fields.');
        return;
      }
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      alert('Message sent successfully. We will respond shortly.');
      contactForm.reset();
    });
  }

  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
