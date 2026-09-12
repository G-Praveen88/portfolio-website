/**
 * ============================================================================
 * PERSONAL PORTFOLIO INTERACTION SCRIPT
 * Project: ApexPlanet Internship - Task 1 (Foundation & Environment Setup)
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * 
 * Features:
 * 1. Mobile navigation toggle & accessible keyboard/focus handling
 * 2. Active navigation highlighting (ScrollSpy via IntersectionObserver)
 * 3. Client-side form validation (Frontend-only; Task 1 has no backend)
 * 4. Scroll-to-top floating button with smooth return
 * 5. Subtle section reveal animations (with prefers-reduced-motion check)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. STICKY HEADER SHADOW ON SCROLL
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Initialize on page load

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION MENU TOGGLE
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('primary-navigation');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    // Function to close the mobile menu
    const closeMobileMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-active');
    };

    // Function to open the mobile menu
    const openMobileMenu = () => {
      navToggle.setAttribute('aria-expanded', 'true');
      navMenu.classList.add('is-active');
    };

    // Toggle button click event
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when any nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when clicking outside of header/menu
    document.addEventListener('click', (event) => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        closeMobileMenu();
      }
    });

    // Close menu when pressing Escape key (Keyboard accessibility)
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
        navToggle.focus(); // Return focus to toggle button
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. ACTIVE NAVIGATION HIGHLIGHT (SCROLLSPY)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the active middle portion
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    // Fallback scroll listener if IntersectionObserver is not supported
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
        });
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     4. CLIENT-SIDE CONTACT FORM VALIDATION
     (Frontend validation only: ApexPlanet Task 1 does NOT require a backend)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const formStatus = document.getElementById('form-status');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // RFC-compliant standard email regex for frontend format checking (requires valid domain with dot)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  // Helper to show field error
  const setFieldError = (input, errorSpan, message) => {
    if (!input || !errorSpan) return;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    errorSpan.textContent = message;
    errorSpan.classList.add('is-visible');
  };

  // Helper to clear field error
  const clearFieldError = (input, errorSpan) => {
    if (!input || !errorSpan) return;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.removeAttribute('aria-invalid');
    errorSpan.textContent = '';
    errorSpan.classList.remove('is-visible');
  };

  // Real-time input cleanup as user types
  if (nameInput && nameError) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        clearFieldError(nameInput, nameError);
      }
    });
  }

  if (emailInput && emailError) {
    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value.trim())) {
        clearFieldError(emailInput, emailError);
      }
    });
  }

  if (messageInput && messageError) {
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        clearFieldError(messageInput, messageError);
      }
    });
  }

  // Handle Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // Prevent actual submission / reload (Frontend only)
      event.preventDefault();

      let isValid = true;

      // 1. Validate Name
      const nameValue = nameInput ? nameInput.value.trim() : '';
      if (!nameValue) {
        setFieldError(nameInput, nameError, 'Please enter your full name.');
        isValid = false;
      } else if (nameValue.length < 2) {
        setFieldError(nameInput, nameError, 'Name must be at least 2 characters long.');
        isValid = false;
      } else {
        clearFieldError(nameInput, nameError);
      }

      // 2. Validate Email
      const emailValue = emailInput ? emailInput.value.trim() : '';
      if (!emailValue) {
        setFieldError(emailInput, emailError, 'Please enter your email address.');
        isValid = false;
      } else if (!emailRegex.test(emailValue)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email format (e.g. name@example.com).');
        isValid = false;
      } else {
        clearFieldError(emailInput, emailError);
      }

      // 3. Validate Message
      const messageValue = messageInput ? messageInput.value.trim() : '';
      if (!messageValue) {
        setFieldError(messageInput, messageError, 'Please enter your message.');
        isValid = false;
      } else if (messageValue.length < 10) {
        setFieldError(messageInput, messageError, 'Message should be at least 10 characters long.');
        isValid = false;
      } else {
        clearFieldError(messageInput, messageError);
      }

      // Update Form Status Message Container
      if (formStatus) {
        if (!isValid) {
          formStatus.className = 'form-status status-error';
          formStatus.textContent = 'Please correct the highlighted errors above and try again.';
          formStatus.style.display = 'block';

          // Move focus to first invalid field for accessibility
          const firstInvalid = contactForm.querySelector('.is-invalid');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        } else {
          // Success state
          formStatus.className = 'form-status status-success';
          formStatus.innerHTML = `
            <strong>Thank you, ${escapeHtml(nameValue)}!</strong><br>
            Your message has passed client-side validation successfully.<br>
            <small>(Demonstration mode: Task 1 requires frontend validation only; no backend email dispatch was attempted.)</small>
          `;
          formStatus.style.display = 'block';

          // Reset Form and Field States
          contactForm.reset();
          [nameInput, emailInput, messageInput].forEach((input) => {
            if (input) {
              input.classList.remove('is-valid');
              input.classList.remove('is-invalid');
              input.removeAttribute('aria-invalid');
            }
          });

          // Focus on status message
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  // Security Helper: Basic HTML escaping for output
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }

  /* --------------------------------------------------------------------------
     5. SCROLL-TO-TOP BUTTON
     -------------------------------------------------------------------------- */
  const scrollTopBtn = document.getElementById('scroll-to-top');

  if (scrollTopBtn) {
    const toggleScrollTopVisibility = () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('is-visible');
      } else {
        scrollTopBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', toggleScrollTopVisibility, { passive: true });
    toggleScrollTopVisibility(); // Check initial state

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Return focus to header logo for accessibility
      const brandLogo = document.querySelector('.brand-logo');
      if (brandLogo) {
        brandLogo.focus({ preventScroll: true });
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. SECTION REVEAL ANIMATIONS (IntersectionObserver Enhancement)
     -------------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll(
      '.skill-card, .project-card, .timeline-card, .highlight-card, .contact-item, .contact-form-wrapper'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-init');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal once
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }
});
