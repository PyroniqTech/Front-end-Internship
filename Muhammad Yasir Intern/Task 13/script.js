function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuToggle && navMenu) {
        console.log('Mobile menu elements found');

        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Hamburger clicked');

            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');


            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                createMobileOverlay();
            } else {
                document.body.style.overflow = '';
                removeMobileOverlay();
            }
        });


        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
                removeMobileOverlay();
            });
        });


        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
                removeMobileOverlay();
            }
        });


        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
                removeMobileOverlay();
            }
        });
    } else {
        console.log('Mobile menu elements NOT found:', {
            toggle: mobileMenuToggle,
            menu: navMenu
        });
    }
}


function createMobileOverlay() {
    removeMobileOverlay();

    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        backdrop-filter: blur(2px);
    `;

    overlay.addEventListener('click', () => {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        removeMobileOverlay();
        document.body.style.overflow = '';
    });

    document.body.appendChild(overlay);
}

function removeMobileOverlay() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay) {
        overlay.remove();
    }
}


function enhanceMobileMenu() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


function getCurrentPage() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
}

function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');

    if (!galleryGrid) return;

    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        img.addEventListener('error', function () {
            console.log('Image failed to load:', this.src);
            this.alt = 'Image not available';
            this.style.backgroundColor = '#2a1a14';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#e6d6c8';
            this.style.fontSize = '14px';
            this.innerHTML = 'Image<br>Not Available';
        });

        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    galleryGrid.addEventListener('click', function (e) {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const img = galleryItem.querySelector('img');
            const title = galleryItem.querySelector('h3').textContent;
            console.log('Gallery item clicked:', title, img.src);
            showGalleryModal(title, img.src, galleryItem.querySelector('p').textContent);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeGalleryModal();
        }
    });
}

function showGalleryModal(title, imageSrc, description) {
    closeGalleryModal();

    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%; max-height: 90%; background: #3a261c; border-radius: 8px; padding: 20px; position: relative;">
            <button class="modal-close" style="position: absolute; top: 10px; right: 10px; background: #e6d6c8; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 16px; color: #3a261c; display: flex; align-items: center; justify-content: center;">×</button>
            <img src="${imageSrc}" alt="${title}" style="max-width: 100%; max-height: 70vh; object-fit: contain; border-radius: 4px;">
            <div style="margin-top: 15px; text-align: center;">
                <h3 style="color: #e6d6c8; margin-bottom: 5px;">${title}</h3>
                <p style="color: #fff; opacity: 0.8;">${description}</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeGalleryModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
}

function closeGalleryModal() {
    const existingModal = document.querySelector('.gallery-modal');
    if (existingModal) {
        existingModal.remove();
    }
}

function initializeSettings() {
    const settingsContainer = document.querySelector('.settings-container');

    if (!settingsContainer) return;

    const themeToggle = document.getElementById('theme-toggle');
    const themeOptions = document.querySelectorAll('.theme-option');

    if (themeToggle) {
        themeToggle.addEventListener('change', function () {
            if (this.checked) {
                themeOptions[0]?.classList.remove('active');
                themeOptions[1]?.classList.add('active');
                console.log('Theme changed to: Dark');
                showToast('Theme changed to Dark mode');
            } else {
                themeOptions[0]?.classList.add('active');
                themeOptions[1]?.classList.remove('active');
                console.log('Theme changed to: Light');
                showToast('Theme changed to Light mode');
            }
            saveSettings();
        });
    }

    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function () {
            console.log('Language changed to:', this.value);
            showToast(`Language changed to ${this.options[this.selectedIndex].text}`);
            saveSettings();
        });
    }

    const settingButtons = {
        'edit-profile': () => {
            showToast('Profile editing feature would open here');
            console.log('Edit Profile clicked');
        },
        'change-password': () => {
            showToast('Password change dialog would appear here');
            console.log('Change Password clicked');
        },
        'manage-notifications': () => {
            showToast('Notification preferences panel would open');
            console.log('Manage Notifications clicked');
        },
        'configure-privacy': () => {
            showToast('Privacy settings would be displayed');
            console.log('Configure Privacy clicked');
        },
        'enable-2fa': () => {
            const button = document.getElementById('enable-2fa');
            if (button.textContent === 'Enable') {
                button.textContent = 'Disable';
                button.style.background = '#ff6b6b';
                showToast('Two-factor authentication enabled');
                console.log('2FA Enabled');
            } else {
                button.textContent = 'Enable';
                button.style.background = '#e6d6c8';
                showToast('Two-factor authentication disabled');
                console.log('2FA Disabled');
            }
        }
    };

    Object.keys(settingButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', settingButtons[buttonId]);
        }
    });

    loadSettings();
}

function saveSettings() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');

    if (themeToggle && languageSelect) {
        const settings = {
            theme: themeToggle.checked ? 'dark' : 'light',
            language: languageSelect.value,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('ingoudeSettings', JSON.stringify(settings));
        console.log('Settings saved:', settings);
    }
}

function loadSettings() {
    const savedSettings = localStorage.getItem('ingoudeSettings');
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');
    const themeOptions = document.querySelectorAll('.theme-option');

    if (savedSettings && themeToggle && languageSelect) {
        try {
            const settings = JSON.parse(savedSettings);
            themeToggle.checked = settings.theme === 'dark';

            if (themeOptions.length >= 2) {
                themeOptions[0].classList.toggle('active', settings.theme === 'light');
                themeOptions[1].classList.toggle('active', settings.theme === 'dark');
            }

            if (settings.language) {
                languageSelect.value = settings.language;
            }

            console.log('Settings loaded:', settings);
        } catch (error) {
            console.error('Error loading settings:', error);
            localStorage.removeItem('ingoudeSettings');
        }
    }
}

function showToast(message, duration = 3000) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #e6d6c8;
        color: #3a261c;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1001;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;

    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, duration);
}

function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                showToast(`Searching for: ${query}`);
                searchInput.value = '';
            }
        };

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('Ingoude Company Website initialized');

    initializeMobileMenu();
    initializeSearch();
    enhanceMobileMenu();

    if (document.querySelector('.gallery-section')) {
        initializeGallery();
        console.log('Gallery page initialized');
    }

    if (document.querySelector('.settings-section')) {
        initializeSettings();
        console.log('Settings page initialized');
    }
});

const IngoudeUtils = {
    debounce: function (func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatFileSize: function (bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    getCurrentPage: function () {
        const path = window.location.pathname;
        return path.split('/').pop() || 'index.html';
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeMobileMenu,
        initializeGallery,
        initializeSettings,
        IngoudeUtils
    };
}