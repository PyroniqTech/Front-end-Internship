document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click();
        }
      }
    });
  });

  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const cardRect = this.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const angleY = (e.clientX - cardCenterX) / 20;
      const angleX = (cardCenterY - e.clientY) / 20;

      this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)";
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formInputs = this.querySelectorAll(".form-control");
      formInputs.forEach((input) => {
        input.classList.remove("is-invalid", "is-valid");
      });

      let isValid = true;

      const firstName = document.getElementById("firstName");
      if (!firstName.value.trim()) {
        firstName.classList.add("is-invalid");
        isValid = false;
      } else {
        firstName.classList.add("is-valid");
      }

      const lastName = document.getElementById("lastName");
      if (!lastName.value.trim()) {
        lastName.classList.add("is-invalid");
        isValid = false;
      } else {
        lastName.classList.add("is-valid");
      }

      const email = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
      } else {
        email.classList.add("is-valid");
      }

      const subject = document.getElementById("subject");
      if (!subject.value.trim()) {
        subject.classList.add("is-invalid");
        isValid = false;
      } else {
        subject.classList.add("is-valid");
      }

      const message = document.getElementById("message");
      if (!message.value.trim()) {
        message.classList.add("is-invalid");
        isValid = false;
      } else {
        message.classList.add("is-valid");
      }

      if (isValid) {
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();

        formInputs.forEach((input) => {
          input.classList.remove("is-valid");
        });
      }
    });
  }

  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      alert("3D viewer would open here in a full implementation");
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".product-card, .gallery-item, .about-visual"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });
});
