const menuButton = document.querySelector('.menuicon');
const hidden = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
     hidden.classList.toggle('hidden');
})