const countriesList = document.querySelector('#countries-list');
const detailsSection = document.querySelector('#country-details');
const detailContent = document.querySelector('#detail-content');
const errorMessage = document.querySelector('#error-message');


export const renderCountries = (countries) => {
  countriesList.innerHTML = '';

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.dataset.countryCode = country['codes.alpha_3'];

    const flagEmoji = document.createElement('span');
    flagEmoji.textContent = country['flag.emoji'];
    flagEmoji.setAttribute('aria-hidden', 'true');

    const h3 = document.createElement('h3');
    h3.textContent = country['names.common'];

    const p = document.createElement('p');
    p.textContent = country.region;

    li.append(flagEmoji, h3, p);
    countriesList.append(li);
  });
};

export const renderCountryDetails = (country) => {
  detailsSection.classList.remove('hidden');
  detailContent.innerHTML = '';

  const flagEmoji = document.createElement('p');
  flagEmoji.textContent = country['flag.emoji'];
  flagEmoji.style.fontSize = '3rem';
  flagEmoji.style.textAlign = 'center';
  flagEmoji.style.marginBottom = '0.5rem';

  const name = document.createElement('h2');
  name.textContent = country['names.common'];
  name.style.textAlign = 'center';
  name.style.marginBottom = '0.25rem';

  const official = document.createElement('p');
  official.textContent = country['names.official'];
  official.style.textAlign = 'center';
  official.style.fontSize = '0.8rem';
  official.style.color = '#888';
  official.style.marginBottom = '1rem';

  const statGrid = document.createElement('div');
  statGrid.style.display = 'grid';
  statGrid.style.gridTemplateColumns = '1fr 1fr';
  statGrid.style.gap = '0.5rem';

  const stats = [
    { label: 'Region', value: country.region },
    { label: 'Capital', value: country.capitals?.[0]?.name ?? 'N/A' },
    { label: 'Population', value: country.population?.toLocaleString() ?? 'N/A' },
    { label: 'Languages', value: country.languages?.map(l => l.name).join(', ') ?? 'N/A' },
  ];

  stats.forEach(({ label, value }) => {
    const box = document.createElement('div');
    box.style.background = '#F4F4F6';
    box.style.borderRadius = '8px';
    box.style.padding = '0.6rem 0.75rem';

    const statLabel = document.createElement('p');
    statLabel.textContent = label;
    statLabel.style.fontSize = '0.7rem';
    statLabel.style.color = '#888';
    statLabel.style.marginBottom = '2px';

    const statValue = document.createElement('p');
    statValue.textContent = value;
    statValue.style.fontSize = '0.85rem';
    statValue.style.fontWeight = '500';
    statValue.style.color = 'black';

    box.append(statLabel, statValue);
    statGrid.append(box);
  });

  detailContent.append(flagEmoji, name, official, statGrid);
};

export const renderError = (msg) => {
  errorMessage.classList.remove('hidden');
  errorMessage.textContent = msg;
};

export const hideError = () => {
  errorMessage.classList.add('hidden');
  errorMessage.textContent = '';
};