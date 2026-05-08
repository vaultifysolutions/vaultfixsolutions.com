const navbar   = document.getElementById('navbar');
const toggle   = document.getElementById('navToggle');
const mobileNav = document.getElementById('navMobile');

// Scroll shadow
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger toggle
toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});
