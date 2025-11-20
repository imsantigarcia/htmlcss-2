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

