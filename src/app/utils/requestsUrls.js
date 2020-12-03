import { API_URL } from '../constants/app.constants';
import typeSearch from '../enums/app.enum.typeSearch';

export const getUrlCountry = ({type, data}) => {
  switch (type) {
    case typeSearch.name:
      return `${API_URL}/name/${data}`;
    case typeSearch.fullName:
      return `${API_URL}/name/${data}?fullText=true`;
    case typeSearch.code:
      return `${API_URL}/alpha/${data}`;
    case typeSearch.currency:
      return `${API_URL}/currency/${data}`;
    default: 
      return null;
  }
}

export const getUrlAllCountries = () => `${API_URL}/all`;