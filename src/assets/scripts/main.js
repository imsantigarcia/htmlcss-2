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


// Galería


document.addEventListener('DOMContentLoaded', () => {
  const galleryModal = document.getElementById('galleryModal');
  
  if (galleryModal) {
    galleryModal.addEventListener('show.bs.modal', event => {
      // 1. Elemento que disparó el modal (la imagen pequeña)
      const triggerImage = event.relatedTarget;
      
      // 2. Extraemos la info de la imagen pequeña
      const src = triggerImage.getAttribute('src');
      const alt = triggerImage.getAttribute('alt');
      
      // 3. Buscamos la imagen dentro del modal
      const modalImage = galleryModal.querySelector('#modal-image');
      
      // 4. Actualizamos la imagen del modal
      modalImage.src = src;
      modalImage.alt = alt;
    });
  }
});