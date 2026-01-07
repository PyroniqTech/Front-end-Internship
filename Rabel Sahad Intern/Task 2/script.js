// Mobile nav toggle
function toggleMobileNav() {
  document.querySelector("nav").classList.toggle("show");
}

// Buy Now
function buyNow() {
  alert("Redirecting to checkout...");
}

// Learn More
function learnMore() {
  window.location = "#features";
}

// FAQ toggle
function toggleFAQ(id) {
  const item = document.getElementById(id);
  const answer = item.querySelector(".answer");
  const button = item.querySelector("button");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    button.querySelector(".micro").textContent = "+";
  } else {
    answer.style.display = "block";
    button.querySelector(".micro").textContent = "−";
  }
}
const sentences = [
  "It transforms your mindset.",
  "It helps you build powerful learning habits fast.",
  "Readers report better concentration & confidence.",
];

const typingElement = document.getElementById("typing");

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50; // faster typing
let backSpeed = 25; // faster backspacing
let pauseDelay = 1000; // pause before deleting

function typeEffect() {
  const currentSentence = sentences[sentenceIndex];

  if (!isDeleting) {
    typingElement.textContent = currentSentence.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentSentence.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseDelay);
      return;
    }
  } else {
    typingElement.textContent = currentSentence.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  const delay = isDeleting ? backSpeed : typingSpeed;
  setTimeout(typeEffect, delay);
}

typeEffect();
