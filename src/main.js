import { getCountries, getCountryByCode } from './fetch-helpers.js';
import { renderCountries, renderCountryDetails, renderError, hideError } from './dom-helpers.js';

let allCountries = [];

getCountries().then((countries) => {
  if (countries === null) {
    renderError('Failed to load countries. Please try again later.');
  } else {
    hideError();
    allCountries = countries;
    renderCountries(countries);
  }
});

const countriesList = document.querySelector('#countries-list');
countriesList.addEventListener('click', (event) => {
  const card = event.target.closest('li');
  if (!card) return;

  getCountryByCode(card.dataset.countryCode).then((country) => {
    if (country === null) {
      renderError('Failed to load country details. Please try again later.');
    } else {
      hideError();
      renderCountryDetails(country);
    }
  });
});

const closeBtn = document.querySelector('#close-btn');
closeBtn.addEventListener('click', () => {
  document.querySelector('#country-details').classList.add('hidden');
});

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = form.elements.searchTerm.value.toLowerCase();
  form.reset();

  const filtered = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );

  if (filtered.length === 0) {
    renderError('No countries found matching that search.');
  } else {
    hideError();
    renderCountries(filtered);
  }
});