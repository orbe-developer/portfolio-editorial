// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav highlight + mobile section indicator
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const mobileIndicator = document.getElementById('mobileSectionIndicator');

const sectionLabels = {
  hero: '',
  about: 'About',
  experience: 'Experience',
  stack: 'Stack',
  achievement: 'Recognition',
  education: 'Education',
  project: 'Project',
  contact: 'Contact'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
      const label = sectionLabels[entry.target.id] || '';
      mobileIndicator.style.opacity = '0';
      setTimeout(() => {
        mobileIndicator.textContent = label;
        mobileIndicator.style.opacity = '1';
      }, 150);
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// Scroll animations
const animatedEls = document.querySelectorAll('.timeline-entry, .stack-group, .project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
animatedEls.forEach(el => observer.observe(el));
