const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.restcountries.com/countries/v5';
const HEADERS = { 'Authorization': `Bearer ${API_KEY}` };

export const getCountries = async () => {
  try {
    const response = await fetch(
      `${API_URL}?response_fields=names.common,flag.emoji,codes.alpha_3,region&limit=100`,
      { headers: HEADERS }
    );
    if (!response.ok) {
      throw new Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data.objects;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};
 
export const getCountryByCode = async (code) => {
  try {
    const response = await fetch(
      `${API_URL}/codes.alpha_3/${code}?response_fields=names.common,flag.emoji,capitals,region,population,languages`,
      { headers: HEADERS }
    );
    if (!response.ok) {
      throw new Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data.objects[0];
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};