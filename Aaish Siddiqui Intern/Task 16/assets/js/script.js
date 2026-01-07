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

document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = 1;
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

    alert("✅ Thank you! Your message has been submitted successfully.");
    form.reset(); 
  });
});




