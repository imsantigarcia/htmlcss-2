/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Modal dinámico para la galería
document.querySelectorAll('.extra__gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src;
  });
});


// Menú móvil

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__nav-list--mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  mobileMenu.classList.toggle('is-open');
});

import * as bootstrap from "bootstrap";

document.querySelectorAll("[data-modal-target]").forEach(img => {
  img.addEventListener("click", () => {
    const modalEl = document.getElementById("galleryModal");
    const modal = new bootstrap.Modal(modalEl);
    const modalImg = document.getElementById("modalImage");

    modalImg.src = img.src;
    modal.show();
  });
});



