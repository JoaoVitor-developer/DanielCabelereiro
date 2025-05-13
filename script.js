  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Captura o envio do formulário e mostra uma mensagem
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // impede envio real
      alert('Obrigado pelo contato! Em breve retornaremos.');
      form.reset(); // limpa os campos
    });
  }
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.card, .imagens img, .contato, .hero').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('visible');
    }
  });
});

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Obrigado pelo contato! Em breve retornaremos.');
      form.reset();
    });
  }

  // Rolagem animada
  const animateOnScroll = () => {
    document.querySelectorAll('.card, .imagens img, .contato, .hero').forEach(el => {
      const top = el.getBoundingClientRect().top;
      const visible = window.innerHeight - 100;
      if (top < visible) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // inicia ao carregar
});

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Obrigado pelo contato! Em breve retornaremos.');
      form.reset();
    });
  }

  // Animação ao rolar
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .imagens img, .contato, .hero');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // executa logo ao abrir
});

document.addEventListener('DOMContentLoaded', function () {
  // Aplica fade-in nas imagens e nas seções
  const fadeElements = document.querySelectorAll('.card, .imagens img, .contato, .hero');
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('fade-in');
    }, index * 150); // atraso progressivo para efeito em cascata
  });

  // Formulário (se existir)
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Obrigado pelo contato! Em breve retornaremos.');
      form.reset();
    });
  }

  // Menu
  const nav = document.querySelector('nav');
  window.toggleMenu = function () {
    nav.classList.toggle('active');
  };
});
