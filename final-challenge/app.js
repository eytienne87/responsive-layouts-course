const hamburgerButton = document.querySelector('.nav-toggle');
const navbar = document.querySelector('nav')

hamburgerButton.addEventListener('click', () => {
  navbar.classList.toggle('nav-visible')
});
