function loadPage(baseFile, content)
{
  fetch(baseFile)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const contentDiv = doc.querySelector("#content");
      if (contentDiv) {
        contentDiv.innerHTML = content;
      }
      document.body.innerHTML = doc.body.innerHTML;

      const bookingForm = document.getElementById('booking-form');
      bookingForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('b-name')?.value.trim() || '';
        const email = document.getElementById('b-email')?.value.trim() || '';
        const phone = document.getElementById('b-phone')?.value.trim() || '';
        const dest = document.getElementById('b-destination')?.value || '';
        const date = document.getElementById('b-date')?.value || '';
        const travelers = document.getElementById('b-travelers')?.value || '';
        if (!name || !email || !phone || !dest || !date || !travelers) {
          alert('Please fill in all required fields.');
          return;
        }
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        if (!/^\+?[0-9\- ]{6,}$/.test(phone)) {
          alert('Please enter a valid phone number.');
          return;
        }
        if (Number(travelers) < 1) {
          alert('Number of travelers must be at least 1.');
          return;
        }
        alert('Booking Confirmed!');
        bookingForm.reset();
      });

      const contactForm = document.getElementById('contact-form');
      contactForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('c-name')?.value.trim() || '';
        const email = document.getElementById('c-email')?.value.trim() || '';
        const message = document.getElementById('c-message')?.value.trim() || '';
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        alert('Message Sent Successfully!');
        contactForm.reset();
      });

      const bookButtons = document.querySelectorAll('.book-now');
      bookButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const dest = btn.dataset.dest || '';
          const destSelect = document.getElementById('b-destination');
          if (destSelect) {
            destSelect.value = dest;
            document.getElementById('b-name')?.focus();
          }
          document.getElementById('booking-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        });
      });
    })
    .catch(err => console.error("Error loading base:", err));
}