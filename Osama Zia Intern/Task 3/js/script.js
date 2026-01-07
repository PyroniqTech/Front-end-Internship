document.addEventListener("DOMContentLoaded", function () {
  var menuButtons = document.querySelectorAll("#menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  menuButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    });
  });

  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = bookingForm.name.value.trim();
      var email = bookingForm.email.value.trim();
      var phone = bookingForm.phone.value.trim();
      var date = bookingForm.date.value;
      var seats = bookingForm.seats.value.trim();
      if (!name || !email || !phone || !date || !seats) {
        alert("All fields are required.");
        return;
      }
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      var phoneDigits = phone.replace(/\D/g, "");
      if (!/^\d+$/.test(phoneDigits) || phoneDigits.length < 7) {
        alert("Please enter a valid phone number.");
        return;
      }
      if (!/^\d+$/.test(seats) || Number(seats) <= 0) {
        alert("Please enter a valid number of seats.");
        return;
      }
      alert("Booking confirmed. Thank you, " + name + "!");
      bookingForm.reset();
    });
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.name.value.trim();
      var email = contactForm.email.value.trim();
      var message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        alert("All fields are required.");
        return;
      }
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Message sent. We will get back to you soon, " + name + "!");
      contactForm.reset();
    });
  }
});

