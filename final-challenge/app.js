const hamburgerButton = document.querySelector('.nav-toggle');
const navbar = document.querySelector('nav');

const displayHamburgerMenu = () => {
  const menuIsOpened = navbar.classList.contains('nav-visible');

  if (!menuIsOpened) {
    navbar.classList.add('nav-visible');
  } else if (menuIsOpened) {
    navbar.classList.remove('nav-visible')
  }
}

hamburgerButton.addEventListener('click', displayHamburgerMenu);
