document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuButton && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target) && 
            !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            resetErrors();
            
            const isValid = validateBookingForm();
            
            if (isValid) {
                alert('Booking Confirmed! We will contact you shortly with more details.');
                bookingForm.reset();
            }
        });
        
        const bookNowButtons = document.querySelectorAll('.book-now-btn');
        bookNowButtons.forEach(button => {
            button.addEventListener('click', function() {
                const destination = this.getAttribute('data-destination');
                const destinationSelect = document.getElementById('destination');
                
                if (destinationSelect) {
                    for (let i = 0; i < destinationSelect.options.length; i++) {
                        if (destinationSelect.options[i].value === destination) {
                            destinationSelect.selectedIndex = i;
                            break;
                        }
                    }
                    
                    document.getElementById('booking-form').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            resetContactErrors();
            
            const isValid = validateContactForm();
            
            if (isValid) {
                alert('Message Sent Successfully! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    function validateBookingForm() {
        let isValid = true;
        
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            showError('name-error', 'Please enter your full name');
            isValid = false;
        }
        
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('email-error', 'Please enter your email address');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        const phone = document.getElementById('phone');
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phone.value.trim()) {
            showError('phone-error', 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone.value)) {
            showError('phone-error', 'Please enter a valid phone number');
            isValid = false;
        }
        
        const destination = document.getElementById('destination');
        if (!destination.value) {
            showError('destination-error', 'Please select a destination');
            isValid = false;
        }
        
        const date = document.getElementById('date');
        if (!date.value) {
            showError('date-error', 'Please select a travel date');
            isValid = false;
        } else {
            const selectedDate = new Date(date.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                showError('date-error', 'Please select a future date');
                isValid = false;
            }
        }
        
        const travelers = document.getElementById('travelers');
        if (!travelers.value || travelers.value < 1 || travelers.value > 20) {
            showError('travelers-error', 'Please enter a valid number of travelers (1-20)');
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateContactForm() {
        let isValid = true;
        
        const name = document.getElementById('contact-name');
        if (!name.value.trim()) {
            showError('contact-name-error', 'Please enter your full name');
            isValid = false;
        }
        
        const email = document.getElementById('contact-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError('contact-email-error', 'Please enter your email address');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError('contact-email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError('message-error', 'Please enter your message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('message-error', 'Message should be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
    }
    
    function resetErrors() {
        const errorElements = document.querySelectorAll('[id$="-error"]');
        errorElements.forEach(element => {
            element.classList.add('hidden');
        });
    }
    
    function resetContactErrors() {
        const errorElements = document.querySelectorAll('[id$="-error"]');
        errorElements.forEach(element => {
            if (element.id.startsWith('contact-') || element.id === 'message-error') {
                element.classList.add('hidden');
            }
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});