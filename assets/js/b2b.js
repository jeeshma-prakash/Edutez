 let slideIndex = 0;
  const sliderTrack = document.getElementById("sliderTrack");
  const stepFill = document.getElementById("stepFill");

  function moveSlide(direction) {
    const cardWidth = sliderTrack.offsetWidth / 3;
    const maxIndex = 1;

    slideIndex += direction;
    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex > maxIndex) slideIndex = maxIndex;

    sliderTrack.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
    stepFill.style.width = `${(slideIndex + 1) / 2 * 100}%`;
  }


  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the div you created
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/images/Animation - 1751438605313.json' // path to your Lottie file
  });

