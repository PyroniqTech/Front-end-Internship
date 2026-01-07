function loadPage(baseFile, content) {
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
    })
    .catch(err => console.error("Error loading base:", err));
}
 document.addEventListener("click",(e) => {
   if (e.target.closest("#btn")){
    const menu = document.getElementById("menu");
    if (menu){

     menu.classList.toggle("hidden");
    
   }
 }});

 document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const date = document.getElementById("date").value;
      const seats = document.getElementById("seats").value;

      if (!name || !email || !phone || !date || !seats) {
        alert("⚠️ Please fill out all required fields.");
        return;
      }

      if (isNaN(seats) || seats <= 0) {
        alert("⚠️ Please enter a valid number of seats.");
        return;
      }

      alert("✅ Booking Confirmed!, " + name + ".");
      bookingForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert("❌ Please fill in all required fields.");
      return;
    }

    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("Message send Successfully!");
    form.reset(); 
  });
});
