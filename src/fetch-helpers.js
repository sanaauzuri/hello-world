export const getCountries = () => {
  return fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca3,region')
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};

export const getCountryByCode = (code) => {
  return fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,region,population,languages`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};