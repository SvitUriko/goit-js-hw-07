import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    );

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
galleryEl.addEventListener('click', onClick)

function onClick(event){
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalImageURL = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${originalImageURL}" width="800" height="600">
        </div>
    `);

    function onKeyUp(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    };

    document.addEventListener('keydown', onKeyUp);

    instance.show()

    if (!instance.visible()) {
      document.removeEventListener('keydown', onKeyUp);
    }
}
    