
// smooth scroll script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// Scroll objects animation
document.addEventListener('DOMContentLoaded', function() {
  // Элементы, которые нужно анимировать
  const fadeElements = document.querySelectorAll('.fade-in');

  // Проверяем, есть ли элементы для анимации
  if (fadeElements.length === 0) return;

  // Настройки анимации
  const options = {
    threshold: 0.1, // Срабатывает, когда 10% элемента видно
    rootMargin: '0px 0px -50px 0px' // Задержка перед срабатыванием
  };

  // Создаем наблюдатель
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Прекращаем наблюдение после анимации
      }
    });
  }, options);

  // Начинаем наблюдать за каждым элементом
  fadeElements.forEach(element => {
    observer.observe(element);
  });
});