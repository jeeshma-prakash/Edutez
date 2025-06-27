 const words = ["Growth", "Driving Innovation", "Achieving Lasting"];
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