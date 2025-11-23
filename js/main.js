/**
 * Dignitate Website - Main JavaScript
 * Enhanced interactivity and user experience
 */

(function () {
    'use strict';

    // ===== DOM ELEMENTS =====
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const contactForm = document.getElementById('contact-form');
    const sections = document.querySelectorAll('section[id]');

    // ===== MOBILE NAVIGATION =====
    function openMenu() {
        navMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', openMenu);
    }

    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('show') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            closeMenu();
        }
    });

    // ===== HEADER SCROLL EFFECT =====
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load

    // ===== ACTIVE NAVIGATION LINK =====
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== CONTACT FORM HANDLING =====
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"></circle>
                </svg>
                Sending...
            `;

            // Simulate API call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                showNotification('Thank you! Your message has been sent. We will get back to you soon.', 'success');
                this.reset();
            }, 1500);
        });
    }

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification__close" aria-label="Close notification">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;

        // Add styles
        const styles = `
            .notification {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                max-width: 400px;
                padding: 1rem 1.5rem;
                border-radius: 0.75rem;
                background: white;
                box-shadow: 0 10px 25px rgb(0 0 0 / 0.15);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 9999;
                animation: slideIn 0.3s ease;
            }
            .notification--success {
                border-left: 4px solid #10b981;
            }
            .notification--error {
                border-left: 4px solid #ef4444;
            }
            .notification--info {
                border-left: 4px solid #6366f1;
            }
            .notification__close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.25rem;
                color: #64748b;
            }
            .notification__close:hover {
                color: #1e293b;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .spinner {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;

        // Add styles to document if not already added
        if (!document.getElementById('notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(notification);

        // Close button functionality
        notification.querySelector('.notification__close').addEventListener('click', () => {
            notification.remove();
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===== CINEMATIC TEXT REVEAL =====
    const splitText = (element) => {
        const text = element.textContent.trim();
        const words = text.split(' ');
        element.innerHTML = '';
        words.forEach(word => {
            const wrapper = document.createElement('span');
            wrapper.className = 'reveal-text-wrapper';
            const span = document.createElement('span');
            span.className = 'reveal-text';
            span.textContent = word + ' ';
            wrapper.appendChild(span);
            element.appendChild(wrapper);
        });
    };

    // ===== INTERSECTION OBSERVER =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');

                // Trigger children animations if any
                const children = entry.target.querySelectorAll('.reveal-text');
                children.forEach((child, index) => {
                    child.style.animationPlayState = 'running';
                });

                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.reveal-up, .reveal-in, .hero__title').forEach(el => {
        el.style.animationPlayState = 'paused';
        animateOnScroll.observe(el);

        // Pause children too
        const children = el.querySelectorAll('.reveal-text');
        children.forEach(child => child.style.animationPlayState = 'paused');
    });

    // ===== COUNTER ANIMATION FOR STATS =====
    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);

            element.textContent = current.toLocaleString() + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const countElements = statsSection.querySelectorAll('[data-count]');
                    countElements.forEach(countElement => {
                        const target = parseInt(countElement.dataset.count);
                        animateCounter(countElement, target);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ===== KEYBOARD ACCESSIBILITY =====
    // Add keyboard support for custom elements
    document.querySelectorAll('.service__card, .course__card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = card.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });

    // ===== PREFERS REDUCED MOTION =====
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-normal', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
    }

    // ===== PERFORMANCE: PASSIVE EVENT LISTENERS =====
    // Already using passive listeners for scroll events by default in modern browsers

    // ===== NEWSLETTER FORM =====
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(newsletterForm);
            const name = formData.get('newsletter-name');
            const email = formData.get('newsletter-email');

            // Show success message
            const button = newsletterForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribed!';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                newsletterForm.reset();
            }, 3000);
            console.log('Newsletter subscription:', { name, email });
        });
    }

    // ===== THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.theme-icon-sun');
    const moonIcon = document.querySelector('.theme-icon-moon');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.setAttribute('data-theme', 'dark');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    } else {
        body.removeAttribute('data-theme');
        if (sunIcon && moonIcon) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (sunIcon && moonIcon) {
                    sunIcon.style.display = 'block';
                    moonIcon.style.display = 'none';
                }
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (sunIcon && moonIcon) {
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'block';
                }
            }
        });
    }


    // ===== FAQ ACCORDION =====
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion__header');
        if (header) {
            header.addEventListener('click', () => {
                const openItem = document.querySelector('.accordion-open');

                toggleItem(item);

                if (openItem && openItem !== item) {
                    toggleItem(openItem);
                }
            });
        }
    });

    const toggleItem = (item) => {
        const accordionContent = item.querySelector('.accordion__content');
        if (accordionContent) {
            if (item.classList.contains('accordion-open')) {
                accordionContent.removeAttribute('style');
                item.classList.remove('accordion-open');
                item.querySelector('.accordion__header').setAttribute('aria-expanded', 'false');
            } else {
                accordionContent.style.height = accordionContent.scrollHeight + 'px';
                item.classList.add('accordion-open');
                item.querySelector('.accordion__header').setAttribute('aria-expanded', 'true');
            }
        }
    };

    // ===== CHARACTER COUNTER =====
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', () => {
            charCount.textContent = messageTextarea.value.length;
        });
    }

    // ===== CONSOLE MESSAGE =====
    console.log('%cDignitate', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cDignity in Dementia', 'font-size: 14px; color: #64748b;');
    console.log('%cSupporting the South Asian community through the dementia journey.', 'font-size: 12px; color: #64748b;');

})();
