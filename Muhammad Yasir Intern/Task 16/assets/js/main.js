const headerPlaceholder = document.getElementById('header-placeholder');
const footerPlaceholder = document.getElementById('footer-placeholder');
const mainContent = document.getElementById('main-content');

function loadHeader() {
    const headerHTML = `
        <header>
            <div class="container">
                <nav class="navbar">
                    <a href="index.html" class="logo">Port<span>folio</span></a>
                    
                    <button class="hamburger" id="hamburger">
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <ul class="nav-links" id="nav-links">
                        <li><a href="index.html" class="nav-link ${window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/Portfolio/') || window.location.pathname.endsWith('/') ? 'active' : ''}">Home</a></li>
                        <li><a href="about.html" class="nav-link ${window.location.pathname.includes('about.html') ? 'active' : ''}">About</a></li>
                        <li><a href="projects.html" class="nav-link ${window.location.pathname.includes('projects.html') ? 'active' : ''}">Projects</a></li>
                        <li><a href="contact.html" class="nav-link ${window.location.pathname.includes('contact.html') ? 'active' : ''}">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        setupMobileMenu();
        updateActiveNavLink();
    }
}

function loadFooter() {
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <a href="index.html" class="footer-logo">Port<span>folio</span></a>
                    
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    
                    <div class="footer-social">
                        <a href="https://github.com/Muhammd-yasir"><i class="fab fa-github"></i></a>
                        <a href="www.linkedin.com/in/muhammad-yasir-52b9a8284"><i class="fab fa-linkedin"></i></a>
                        <a href="+923106642704"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/muhammadyasir193019/?hl=en"><i class="fab fa-instagram"></i></a>

                        
                    </div>
                    
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} Yasir. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

function updateActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        
        if (currentPage.endsWith(linkHref)) {
            link.classList.add('active');
        } else if (currentPage === '/' && linkHref === 'index.html') {
            link.classList.add('active');
        }
    });
}

function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            
            setTimeout(() => {
                contactForm.reset();
                hideFormMessage();
            }, 3000);
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        messageElement.style.display = 'block';
    }
}

function hideFormMessage() {
    const messageElement = document.getElementById('form-message');
    
    if (messageElement) {
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 3000);
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    
    setupProjectFilter();
    setupContactForm();
    setupSmoothScrolling();
    initScrollAnimations();
    
    console.log('Portfolio website loaded successfully!');
});
