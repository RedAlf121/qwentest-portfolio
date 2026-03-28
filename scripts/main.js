/**
 * Portfolio Website - Main JavaScript
 * Handles all interactions, animations, and dynamic functionality
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const roleItems = document.querySelectorAll('.role-item');
    const progressBars = document.querySelectorAll('.progress-bar');
    const statNumbers = document.querySelectorAll('.stat-number');
    const particlesContainer = document.getElementById('particles');

    // ========================================
    // Navigation
    // ========================================
    const Navigation = {
        init() {
            this.handleScroll();
            this.handleToggle();
            this.handleLinks();
            this.handleActiveLink();
        },

        handleScroll() {
            let ticking = false;
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        if (window.scrollY > 50) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        },

        handleToggle() {
            // Handle both click and touch events
            const toggleMenu = () => {
                const isActive = !navMenu.classList.contains('active');
                navToggle.classList.toggle('active', isActive);
                navMenu.classList.toggle('active', isActive);
                navOverlay.classList.toggle('active', isActive);
                document.body.style.overflow = isActive ? 'hidden' : '';
            };

            navToggle.addEventListener('click', toggleMenu);
            navToggle.addEventListener('touchstart', (e) => {
                e.preventDefault();
                toggleMenu();
            });

            // Close menu when clicking overlay
            const closeMenu = () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            };

            navOverlay.addEventListener('click', closeMenu);
            navOverlay.addEventListener('touchstart', closeMenu, { passive: true });

            // Close menu when clicking a link
            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        },

        handleLinks() {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

        handleActiveLink() {
            const sections = document.querySelectorAll('section[id]');

            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;

                sections.forEach(section => {
                    const sectionHeight = section.offsetHeight;
                    const sectionTop = section.offsetTop - 100;
                    const sectionId = section.getAttribute('id');
                    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        if (correspondingLink) {
                            correspondingLink.classList.add('active');
                        }
                    }
                });
            });
        }
    };

    // ========================================
    // Back to Top Button
    // ========================================
    const BackToTop = {
        init() {
            let ticking = false;
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        if (window.scrollY > 500) {
                            backToTop.classList.add('visible');
                        } else {
                            backToTop.classList.remove('visible');
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            const scrollToTop = (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };

            backToTop.addEventListener('click', scrollToTop);
            backToTop.addEventListener('touchstart', scrollToTop, { passive: true });
        }
    };

    // ========================================
    // Particle Animation
    // ========================================
    const Particles = {
        init() {
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                this.createParticle();
            }
        },

        createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random properties
            const size = Math.random() * 6 + 2;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;

            // Random colors
            const colors = ['#6366f1', '#0ea5e9', '#10b981'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            particlesContainer.appendChild(particle);
        }
    };

    // ========================================
    // Role Rotator
    // ========================================
    const RoleRotator = {
        init() {
            let currentIndex = 0;
            const roles = Array.from(roleItems);

            setInterval(() => {
                roles[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % roles.length;
                roles[currentIndex].classList.add('active');
            }, 2500);
        }
    };

    // ========================================
    // Project Filter
    // ========================================
    const ProjectFilter = {
        init() {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => this.applyFilter(btn));
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    this.applyFilter(btn);
                }, { passive: true });
            });
        },

        applyFilter(btn) {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            this.filterProjects(filter);
        },

        filterProjects(filter) {
            projectCards.forEach((card, index) => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
                } else {
                    card.style.display = 'none';
                }
            });
        }
    };

    // ========================================
    // Progress Bars Animation
    // ========================================
    const ProgressBars = {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const progress = progressBar.dataset.progress;
                        
                        setTimeout(() => {
                            progressBar.style.width = `${progress}%`;
                        }, 200);

                        observer.unobserve(progressBar);
                    }
                });
            }, { threshold: 0.5 });

            progressBars.forEach(bar => observer.observe(bar));
        }
    };

    // ========================================
    // Counter Animation
    // ========================================
    const CounterAnimation = {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.dataset.count);
                        this.animateCounter(counter, target);
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });

            statNumbers.forEach(counter => observer.observe(counter));
        },

        animateCounter(element, target) {
            let current = 0;
            const increment = target / 50;
            const duration = 2000;
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = `${target}+`;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, stepTime);
        }
    };

    // ========================================
    // Scroll Animations
    // ========================================
    const ScrollAnimations = {
        init() {
            const animatedElements = document.querySelectorAll(
                '.skill-card, .project-card, .stat-item, .about-content, .contact-content'
            );

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(el => {
                el.classList.add('animate-on-scroll');
                observer.observe(el);
            });
        }
    };

    // ========================================
    // Contact Form
    // ========================================
    const ContactForm = {
        init() {
            if (!contactForm) return;

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        },

        handleSubmit() {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span class="spinner"></span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Show success message
                this.showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        },

        showToast(message, type = 'success') {
            // Remove existing toast
            const existingToast = document.querySelector('.toast');
            if (existingToast) existingToast.remove();

            // Create toast
            const toast = document.createElement('div');
            toast.classList.add('toast');
            if (type === 'success') toast.classList.add('toast-success');

            const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
            toast.innerHTML = `
                <i class="fas fa-${icon}" style="color: ${type === 'success' ? '#10b981' : '#ef4444'}"></i>
                <span>${message}</span>
            `;

            document.body.appendChild(toast);

            // Show toast
            setTimeout(() => toast.classList.add('show'), 10);

            // Remove toast
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }
    };

    // ========================================
    // Smooth Scroll for All Anchor Links
    // ========================================
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            const offsetTop = target.offsetTop - 70;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        }
    };

    // ========================================
    // Parallax Effect
    // ========================================
    const Parallax = {
        init() {
            const heroBackground = document.querySelector('.hero-background');
            
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });
        }
    };

    // ========================================
    // Active Skill Card Highlight
    // ========================================
    const SkillCards = {
        init() {
            const skillCards = document.querySelectorAll('.skill-card');
            
            skillCards.forEach(card => {
                // Desktop hover
                card.addEventListener('mouseenter', () => {
                    skillCards.forEach(c => c.style.opacity = '0.7');
                    card.style.opacity = '1';
                });

                card.addEventListener('mouseleave', () => {
                    skillCards.forEach(c => c.style.opacity = '1');
                });

                // Mobile tap
                card.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    skillCards.forEach(c => c.style.opacity = '0.7');
                    card.style.opacity = '1';
                }, { passive: true });
            });
        }
    };

    // ========================================
    // Keyboard Navigation
    // ========================================
    const KeyboardNav = {
        init() {
            document.addEventListener('keydown', (e) => {
                // ESC to close mobile menu
                if (e.key === 'Escape') {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    };

    // ========================================
    // Initialize All Modules
    // ========================================
    const App = {
        init() {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.start());
            } else {
                this.start();
            }
        },

        start() {
            // Initialize all modules
            Navigation.init();
            BackToTop.init();
            Particles.init();
            RoleRotator.init();
            ProjectFilter.init();
            ProgressBars.init();
            CounterAnimation.init();
            ScrollAnimations.init();
            ContactForm.init();
            SmoothScroll.init();
            SkillCards.init();
            KeyboardNav.init();
            Parallax.init();

            // Log initialization
            console.log('%c Portfolio Initialized ', 'background: #6366f1; color: white; padding: 5px; border-radius: 3px;');
        }
    };

    // Start the application
    App.init();

})();
