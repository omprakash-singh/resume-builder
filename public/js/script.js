const menuButton = document.querySelector('.menuicon');
const hidden = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
     hidden.classList.toggle('hidden');
})

var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },
});