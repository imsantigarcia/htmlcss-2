/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

// Cargar la imagen de la galería

document.addEventListener("DOMContentLoaded", () => {
  const modalImage = document.getElementById("modalImage");
  const images = document.querySelectorAll(".extra__gallery-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
    });
  });
});

// Menú móvil

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__nav-list--mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  mobileMenu.classList.toggle('is-open');
});


