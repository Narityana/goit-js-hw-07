import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const imagesList = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class = gallery__item>
                <a class="gallery__link" href='${original}'>
                    <img class = gallery__image  src='${preview}' data-source='${original}' alt='${description}'>
                </a>
            </li>`,
	)
	.join("");
galleryEl.insertAdjacentHTML("beforeend", imagesList);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
	event.preventDefault();
	if (!event.target.classList.contains("gallery__image")) {
		return;
	}

	const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
		onShow: () => window.addEventListener("keydown", onEscKeyPress),
		onClose: () => window.removeEventListener("keydown", onEscKeyPress),
	});
	function onEscKeyPress(event) {
		if (event.code === "Escape") {
			instance.close();
		}
	}
	instance.show();
}
console.log(galleryItems);
