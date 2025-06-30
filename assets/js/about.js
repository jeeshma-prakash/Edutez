// assets/js/about.js
let observer;
let animated = false;

function animateCounters() {
  document.querySelectorAll(".counter").forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function setupObserver() {
  const section = document.querySelector("#stats");

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        if (!animated) {
          animateCounters();
          animated = true;
        }
      } else {
        animated = false;
        document.querySelectorAll(".counter").forEach(counter => counter.innerText = "0");
      }
    });
  }, {
    threshold: 0.3 // Reduced from 0.85
  });

  observer.observe(section);
}

document.addEventListener("DOMContentLoaded", setupObserver);





