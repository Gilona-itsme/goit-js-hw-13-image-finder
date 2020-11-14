const API_KEY = '19097273-498c0f6143a3d5e6f313fb87e';
const BASE_URL = 'https://pixabay.com/api/?';

//Хранение термина запроса + номер группы//
export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchHits() {
    const url = `${BASE_URL}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        console.log(hits);
        this.incrementPage();
        return hits;
      });
  }
  //Увеличивает страницу +1//
  incrementPage() {
    this.page += 1;
  }

  //Сбрасывает страницу к 1//
  resetPage() {
    this.page = 1;
  }

  //Получить термин запроса//
  get query() {
    return this.searchQuery;
  }

  //Записать термин запроса//
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
