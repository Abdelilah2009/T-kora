const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centerSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 250,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
  });
  