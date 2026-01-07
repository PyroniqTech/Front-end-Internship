
document.addEventListener('DOMContentLoaded', function() {
  
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
         
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
    }
    
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.className = 'fas fa-bars text-xl';
        });
    });
    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            resetErrors('booking-form');
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const eventDate = document.getElementById('event-date').value;
            const seats = document.getElementById('seats').value;
            
            let isValid = true;
            
          
            if (name === '') {
                showError('name-error', 'Please enter your full name');
                isValid = false;
            } else if (name.length < 2) {
                showError('name-error', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
           
            if (email === '') {
                showError('email-error', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
            
            if (phone === '') {
                showError('phone-error', 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                showError('phone-error', 'Please enter a valid phone number');
                isValid = false;
            }
            
           
            if (eventDate === '') {
                showError('date-error', 'Please select an event date');
                isValid = false;
            }
            
          
            if (seats === '') {
                showError('seats-error', 'Please enter the number of seats');
                isValid = false;
            } else if (seats < 1 || seats > 10) {
                showError('seats-error', 'Please enter a valid number of seats (1-10)');
                isValid = false;
            }
            
           
            if (isValid) {
                const submitButton = bookingForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for registering for Evnture 2025!\n\nWe have received your registration and will send a confirmation email shortly with your ticket details.\n\nWe look forward to seeing you at the event!');
                    bookingForm.reset();
                    
                   
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }
    
   
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            resetErrors('contact-form');
     
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
          
            if (name === '') {
                showError('contact-name-error', 'Please enter your name');
                isValid = false;
            } else if (name.length < 2) {
                showError('contact-name-error', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
         
            if (email === '') {
                showError('contact-email-error', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('contact-email-error', 'Please enter a valid email address');
                isValid = false;
            }
            
          
            if (message === '') {
                showError('message-error', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message-error', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
         
            if (isValid) {
             
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                submitButton.disabled = true;
                
               
                setTimeout(() => {
                    alert('Thank you for your message!\n\nWe have received it and will get back to you within 24 hours.\n\nFor urgent matters, please call our support line at +1 (555) 123-4567.');
                    contactForm.reset();
                    
               
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
  
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
            
            
            const inputElement = errorElement.previousElementSibling;
            if (inputElement) {
                inputElement.classList.add('border-red-500');
                inputElement.classList.remove('border-gray-300');
                
               
                inputElement.addEventListener('input', function() {
                    this.classList.remove('border-red-500');
                    this.classList.add('border-gray-300');
                    errorElement.classList.add('hidden');
                });
            }
        }
    }
    
    function resetErrors(formId) {
        const errorElements = document.querySelectorAll(`#${formId} [id$="-error"]`);
        errorElements.forEach(element => {
            element.classList.add('hidden');
            
          
            const inputElement = element.previousElementSibling;
            if (inputElement) {
                inputElement.classList.remove('border-red-500');
                inputElement.classList.add('border-gray-300');
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
    
   
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

});
