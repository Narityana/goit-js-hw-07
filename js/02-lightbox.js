import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesList = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class = gallery__item>
                <a class="gallery__link" href='${original}'>
                <img class = gallery__image  src='${preview}' alt='${description}'>
                </a>
                </li>`,
	)
	.join("");
galleryEl.insertAdjacentHTML("beforeend", imagesList);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	captionPosition: "bottom",
});
