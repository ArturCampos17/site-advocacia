// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Evento de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    this.reset();
});
const cards = document.querySelectorAll('#equipe .card');
let currentIndex = 0;
let autoSlide;  // variável para armazenar o intervalo

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right');
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
}

document.getElementById('next').addEventListener('click', () => {
    nextCard();
    resetAutoSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    prevCard();
    resetAutoSlide();
});

function startAutoSlide() {
    // limpa qualquer intervalo antes
    clearInterval(autoSlide);
    // cria novo intervalo e armazena na variável
    autoSlide = setInterval(() => {
        nextCard();
    }, 4000); // 4 segundos entre movimentos
}

function resetAutoSlide() {
    startAutoSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
    startAutoSlide();
});
