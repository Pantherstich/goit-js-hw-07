import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(
        ({ preview, original, description }) =>  `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join(""); 
}
function handleClick(event) {
      event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
    const original = event.target.dataset.source;
    const description = event.target.alt;
   
    const instance = basicLightbox.create(`
    <img src="${original}" alt="${description}" />
  `);

  instance.show();

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {if (event.code === "Escape") { instance.close();}
}
}