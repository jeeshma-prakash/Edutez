const counters = [
    { id: "students-count", target: 118, suffix: "+" },
    { id: "courses-count", target: 25, suffix: "+" },
    { id: "certs-count", target: 10, suffix: "" },
    { id: "countries-count", target: 100, suffix: "" }
  ];

  let counted = false;

  function animateCounter(id, endValue, suffix = "") {
    const el = document.getElementById(id);
    let start = 0;
    const duration = 1000;
    const increment = endValue / (duration / 20);

    function updateCounter() {
      start += increment;
      if (start < endValue) {
        el.innerText = Math.floor(start) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        el.innerText = endValue + suffix;
      }
    }

    updateCounter();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!counted) {
          counters.forEach(c => animateCounter(c.id, c.target, c.suffix));
          counted = true;
        }
      } else {
        counted = false;
        counters.forEach(c => {
          document.getElementById(c.id).innerText = "0" + c.suffix;
        });
      }
    });
  }, {
    threshold: 0.4
  });

  const section = document.getElementById("counter-section");
  observer.observe(section);
