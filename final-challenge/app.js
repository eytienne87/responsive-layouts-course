const hamburgerButton = document.querySelector('.nav-toggle');
const navbar = document.querySelector('nav')

hamburgerButton.addEventListener('click', () => {
  console.log(navbar.classList.toggle('nav-visible'));
});
