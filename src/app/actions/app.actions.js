import { createAction } from 'redux-actions';

const SWITCH_LOCALIZATION = 'SWITCH_LOCALIZATION';

export const switchLocatization = createAction(SWITCH_LOCALIZATION);

const SEARCH_ALL_CODES_REQUEST = 'SEARCH_ALL_CODES_REQUEST';
const SEARCH_ALL_CODES_SUCCESS = 'SEARCH_ALL_CODES_SUCCESS';
const SEARCH_ALL_CODES_ERROR = 'SEARCH_ALL_CODES_REQUEST';

export const searchAllCodes = {
  request: createAction(SEARCH_ALL_CODES_REQUEST),
  success: createAction(SEARCH_ALL_CODES_SUCCESS),
  error: createAction(SEARCH_ALL_CODES_ERROR),
}

const SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';

export const selectTypeOfSearch = createAction(SELECT_SEARCH_TYPE);

const SEARCH_COUNTRY_REQUEST = 'SEARCH_COUNTRY_REQUEST';
const SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS';
const SEARCH_COUNTRY_ERROR = 'SEARCH_COUNTRY_ERROR';

export const searchCountry = {
  request: createAction(SEARCH_COUNTRY_REQUEST),
  success: createAction(SEARCH_COUNTRY_SUCCESS),
  error: createAction(SEARCH_COUNTRY_ERROR),
}

const DELETE_ITEM_FROM_COUNTRIES = 'DELETE_ITEM_FROM_COUNTRIES';

export const deleteItemFromCountries = createAction(DELETE_ITEM_FROM_COUNTRIES);