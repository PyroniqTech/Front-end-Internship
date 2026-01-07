// Form validation functions

// Booking form validation
function validateBookingForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const travelers = document.getElementById('travelers').value;
    
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Name validation
    if (name === '') {
        document.getElementById('name-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Phone validation (numeric only)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Destination validation
    if (destination === '') {
        document.getElementById('destination-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Date validation
    if (date === '') {
        document.getElementById('date-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Travelers validation
    if (travelers === '' || travelers < 1 || travelers > 10) {
        document.getElementById('travelers-error').classList.remove('hidden');
        isValid = false;
    }
    
    return isValid;
}

// Contact form validation
function validateContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Name validation
    if (name === '') {
        document.getElementById('contact-name-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('contact-email-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Message validation
    if (message === '') {
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    }
    
    return isValid;
}

// Set destination when "Book Now" button is clicked on a destination card
function setDestination(destination) {
    document.getElementById('destination').value = destination;
    
    // Scroll to booking form
    document.getElementById('booking-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Set destination when "Book Now" button is clicked
    document.querySelectorAll('.book-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            setDestination(destination);
        });
    });
    
    // Booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateBookingForm()) {
                alert('Booking Confirmed!');
                this.reset();
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                alert('Message Sent Successfully!');
                this.reset();
            }
        });
    }
});