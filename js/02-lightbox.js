import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgContainer = document.querySelector(".gallery");
const cardsMarkup = addGalleryCardsText(galleryItems);
imgContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function addGalleryCardsText(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
	        <a class="gallery__item" 
	        href="${original}">
	  <img class="gallery__image" 
	  src="${preview}" 
	  alt="${description}" 
	  />
	</a>
	        `;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
  
});

console.log(galleryItems);
