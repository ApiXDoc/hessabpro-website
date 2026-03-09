// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulate form submission (replace with actual API call)
        try {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for contacting us! We will get back to you within 24 hours.';
            
            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);

            // Here you would normally send the data to your backend
            // Example:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // });
            
        } catch (error) {
            // Show error message
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
            
            // Reset button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane" style="margin-left: 10px;"></i>';
            submitBtn.disabled = false;
        }
    });
}

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Active page highlight in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Pricing section smooth scroll
const pricingLinks = document.querySelectorAll('a[href*="#pricing"]');
pricingLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const pricingSection = document.querySelector('.pricing');
        if (pricingSection) {
            e.preventDefault();
            pricingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Auto-hide messages
document.querySelectorAll('.form-message').forEach(message => {
    if (message.textContent.trim() !== '') {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.textContent = '';
                message.className = 'form-message';
                message.style.opacity = '1';
            }, 500);
        }, 5000);
    }
});

// Back to top button (optional enhancement)
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
        }
    });

    document.body.appendChild(button);
};

// Initialize back to top button
if (window.innerWidth > 768) {
    createBackToTopButton();
}

// Form validation enhancement
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#e2e8f0';
        }
    });

    field.addEventListener('focus', () => {
        field.style.borderColor = 'var(--primary-color)';
    });
});

// Console message
console.log('%c🚀 Welcome to Hessab Pro!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cTransform your business with the best POS solution', 'color: #8b5cf6; font-size: 14px;');
