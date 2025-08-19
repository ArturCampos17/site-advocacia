// Rolagem suave
document.querySelectorAll('nav a, .dropdown-content a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
    }
  });
});

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  e.target.reset();
});
