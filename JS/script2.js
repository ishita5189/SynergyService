var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
delay: 2000,
disableOnInteraction:true,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});