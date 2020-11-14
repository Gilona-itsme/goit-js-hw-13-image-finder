import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

export function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
  }
}
