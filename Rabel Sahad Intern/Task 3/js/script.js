document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeFormHandlers();
    initializeSmoothScrolling();
    initializeAnimations();
});


function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
      
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}


function initializeFormHandlers() {
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
   
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingFormSubmit);
    }
    
    
    initializeFormValidation();
}


function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name') || document.getElementById('name').value;
    const email = formData.get('email') || document.getElementById('email').value;
    const message = formData.get('message') || document.getElementById('message').value;
    
  
    if (!name || !email || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
 
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
    
}


function handleBookingFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name') || document.getElementById('name').value;
    const email = formData.get('email') || document.getElementById('email').value;
    const phone = formData.get('phone') || document.getElementById('phone').value;
    const seats = formData.get('seats') || document.getElementById('seats').value;
    
 
    if (!name || !email || !phone || !seats) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showNotification('Please enter a valid phone number.', 'error');
        return;
    }
    
    if (seats < 1 || seats > 10) {
        showNotification('Please enter a valid number of seats (1-10).', 'error');
        return;
    }
    

    showNotification('Thank you for your registration! We have sent a confirmation email.', 'success');
    form.reset();
    
}

function initializeFormValidation() {
    
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateEmailField(this);
        });
    });
    

    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validatePhoneField(this);
        });
    });
    

    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateNumberField(this);
        });
    });
}


function validateEmailField(field) {
    const value = field.value.trim();
    if (value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address.');
    } else {
        clearFieldError(field);
    }
}

function validatePhoneField(field) {
    const value = field.value.trim();
    if (value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number.');
    } else {
        clearFieldError(field);
    }
}

function validateNumberField(field) {
    const value = field.value;
    const min = field.min ? parseInt(field.min) : null;
    const max = field.max ? parseInt(field.max) : null;
    
    if (value) {
        if (min !== null && value < min) {
            showFieldError(field, `Value must be at least ${min}.`);
        } else if (max !== null && value > max) {
            showFieldError(field, `Value must be at most ${max}.`);
        } else {
            clearFieldError(field);
        }
    } else {
        clearFieldError(field);
    }
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
   
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showFieldError(field, message) {

    clearFieldError(field);
    
 
    field.classList.add('border-red-500');
    
   
    const errorElement = document.createElement('div');
    errorElement.className = 'text-red-500 text-sm mt-1';
    errorElement.textContent = message;
    
  
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('border-red-500');
    field.classList.remove('border-green-500');
    
    const errorElement = field.parentNode.querySelector('.text-red-500');
    if (errorElement) {
        errorElement.remove();
    }
}


function showNotification(message, type = 'info') {
   
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
   
    document.body.appendChild(notification);
    
   
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
    
   
    notification.addEventListener('click', () => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });
}


function initializeSmoothScrolling() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            
            if (href === '#') return;
            
           
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
              
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function initializeAnimations() {

    const animatedElements = document.querySelectorAll('.speaker-card, .bg-white, .bg-light');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });

}
