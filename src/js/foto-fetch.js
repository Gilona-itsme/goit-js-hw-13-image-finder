import '../styles.scss';
import ApiService from './apiService.js';
import fotoSearchTpl from '../templates/foto-search.hbs';
import LoadMoreBtn from '../js/load-more-btn';
import getRefs from './get-refs';
import { toScroll } from './smooth-scroll';

import { openModal } from './open-modal';

const refs = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearchImage);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);
refs.hitsContainer.addEventListener('click', openModal);

function onSearchImage(e) {
  e.preventDefault();

  //clearHitsContainer();
  apiService.query = e.currentTarget.elements.query.value;
  if (apiService.query === '') {
    return alert('Please, start typing!');
  }

  loadMoreBtn.show();

  clearHitsContainer();
  apiService.resetPage();
  fetchHits();
}

function fetchHits() {
  const height = refs.hitsContainer.clientHeight;

  loadMoreBtn.disable();
  apiService.fetchHits().then(hits => {
    loadMoreBtn.enable();
    appendHitsMarkUp(hits);
    toScroll(height);
  });
}

function appendHitsMarkUp(hits) {
  refs.hitsContainer.insertAdjacentHTML('beforeend', fotoSearchTpl(hits));
}

function clearHitsContainer() {
  refs.hitsContainer.innerHTML = '';
}

export default { onSearchImage, fetchHits };
