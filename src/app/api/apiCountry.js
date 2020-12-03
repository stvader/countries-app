import {
  getUrlCountry,
  getUrlAllCountries,
} from '../utils/requestsUrls';

const getData = async url => {
  const res = await fetch(url);
  const json = await res.json();

  return json;
}

export const getCountryDataFromApi = (request) => {
  const url = getUrlCountry(request);

  return getData(url);
};

export const getAllCodes = () => {
  const url = getUrlAllCountries();

  return getData(url);
}