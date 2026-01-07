console.log("JS file connected successfully!");


const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}


const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = bookingForm.querySelector("#name").value.trim();
    const email = bookingForm.querySelector("#email").value.trim();
    const phone = bookingForm.querySelector("#phone").value.trim();
    const destination = bookingForm.querySelector("#destination").value.trim();
    const date = bookingForm.querySelector("#date").value.trim();
    const travelers = bookingForm.querySelector("#travelers").value.trim();

    if (!name || !email || !phone || !destination || !date || !travelers) {
      alert("Please fill in all fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (isNaN(phone) || isNaN(travelers)) {
      alert("Phone and Travelers must be numeric!");
      return;
    }

    alert("Booking Confirmed! We’ll contact you soon.");
    bookingForm.reset();
  });
}


const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("#cname").value.trim();
    const email = contactForm.querySelector("#cemail").value.trim();
    const message = contactForm.querySelector("#cmessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Message Sent Successfully!");
    contactForm.reset();
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});
