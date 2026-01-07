document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper--navigation', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

    new Swiper('.swiper--pagination', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });
});