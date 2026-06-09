const countriesList = document.querySelector('#countries-list');
const detailsSection = document.querySelector('#country-details');
const detailContent = document.querySelector('#detail-content');
const errorMessage = document.querySelector('#error-message');
const countryCount = document.querySelector('#country-count');

export const renderCountries = (countries) => {
  countriesList.innerHTML = '';

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.dataset.countryCode = country.cca3;

    const img = document.createElement('img');
    img.src = country.flags.png;
    img.alt = country.name.common;

    const h3 = document.createElement('h3');
    h3.textContent = country.name.common;

    const p = document.createElement('p');
    p.textContent = country.region;

    li.append(img, h3, p);
    countriesList.append(li);
  });
};

export const renderCountryDetails = (country) => {
  detailsSection.classList.remove('hidden');
  detailContent.innerHTML = '';

  const flag = document.createElement('img');
  flag.src = country.flags.png;
  flag.alt = country.name.common;

  const name = document.createElement('h2');
  name.textContent = country.name.common;

  const official = document.createElement('p');
  official.textContent = country.name.official;

  const region = document.createElement('p');
  region.textContent = `Region: ${country.region}`;

  const capital = document.createElement('p');
  capital.textContent = `Capital: ${country.capital?.[0] ?? 'N/A'}`;

  const population = document.createElement('p');
  population.textContent = `Population: ${country.population.toLocaleString()}`;

  const languages = document.createElement('p');
  languages.textContent = `Languages: ${Object.values(country.languages ?? {}).join(', ')}`;

  detailContent.append(flag, name, official, region, capital, population, languages);
};

export const renderError = (msg) => {
  errorMessage.classList.remove('hidden');
  errorMessage.textContent = msg;
};

export const hideError = () => {
  errorMessage.classList.add('hidden');
  errorMessage.textContent = '';
};