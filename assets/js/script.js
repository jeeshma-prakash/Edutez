fetch('navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);

fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

fetch('icon.html')
    .then(res => res.text())
    .then(data => document.getElementById('icons').innerHTML = data);

const tabButtons = document.querySelectorAll('.tab-button');
  const courseCards = document.querySelectorAll('.course-card');

  function filterCards(category) {
    courseCards.forEach(card => {
      card.classList.remove('active');
      if (card.classList.contains(category)) {
        setTimeout(() => card.classList.add('active'), 10);
      }
    });
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.getAttribute('data-category');
      filterCards(category);
    });
  });

  // Default active category on page load
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button[data-category="cs"]').classList.add('active');
    filterCards('cs');
  });

  
   const words = ["Shape the Future", "Build Excellence", "Achieve Success"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const pause = 2000;
    const target = document.getElementById("typewriter");

    function typeEffect() {
      const currentWord = words[wordIndex];
      const currentText = currentWord.substring(0, charIndex);

      target.textContent = currentText;

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          charIndex++;
          setTimeout(typeEffect, speed);
        } else {
          isDeleting = true;
          setTimeout(typeEffect, pause);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(typeEffect, speed / 2);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 300);
        }
      }
    }

    typeEffect();

    // about page testimonial 

    