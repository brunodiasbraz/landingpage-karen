const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.classList.contains('counter')) animateCounter(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .counter').forEach((element) => observer.observe(element));

function animateCounter(element) {
  const target = Number(element.dataset.target);
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    element.textContent = String(current);
    if (current >= target) clearInterval(timer);
  }, 35);
}

const testimonials = [...document.querySelectorAll('.testimonial')];
let testimonialIndex = 0;
function showTestimonial(direction) {
  testimonials[testimonialIndex].classList.remove('active');
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}
document.querySelector('.next').addEventListener('click', () => showTestimonial(1));
document.querySelector('.prev').addEventListener('click', () => showTestimonial(-1));

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Olá, Karen! Meu nome é ${data.get('nome')}. Tenho interesse em ${data.get('servico')}. ${data.get('mensagem')} Meu telefone é ${data.get('telefone')}.`;
  window.open(`https://wa.me/553288500189?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
