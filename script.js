// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile Menu Toggle =====
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== Intersection Observer for Fade-In Animations =====
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
fadeEls.forEach((el) => observer.observe(el));
