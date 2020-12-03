import { handleActions } from 'redux-actions';

import * as actions from '../actions/app.actions';
import { initState } from '../store/app.initState';

const reducer = handleActions(
  new Map([
    [
      actions.switchLocatization,
      (state, action) => ({
        ...state,
        localization: action.payload
      }),
    ],
    [
      actions.selectTypeOfSearch,
      (state, action) => ({
        ...state,
        searchType: action.payload
      })
    ],
    [
      actions.searchCountry.request,
      state => ({
        ...state,
        countriesInfo: {
          ...state.countriesInfo,
          collection: [],
          loading: true,          
        }
      }),
    ],
    [
      actions.searchCountry.success,
      (state, action) => ({
        ...state,
        countriesInfo: {
          ...state.countriesInfo,
          loading: false,
          collection: [...action.payload]
        }        
      }),
    ],
    [
      actions.searchCountry.error,
      (state, action) => ({
        ...state,
        countriesInfo: {
          ...state.countriesInfo,
          loading: false,
          error: action.payload,
        }        
      }),
    ],
    [
      actions.deleteItemFromCountries,
      (state, action) => ({
        ...state,
        countriesInfo: {          
          collection: [...state.countriesInfo.collection.filter(({name}) => name !== action.payload)]
        }       
      })
    ],
    [
      actions.searchAllCodes.request,
      state => ({
        ...state,
        allCodes: {
          ...state.allCodes,
          collection: [],
          loading: true,
        }
      }),
    ],
    [
      actions.searchAllCodes.success,
      (state, action) => ({
        ...state,
        allCodes: {
          ...state.allCodes,
          loading: false,
          collection: [...action.payload]
        }        
      }),
    ],
    [
      actions.searchAllCodes.error,
      (state, action) => ({
        ...state,
        allCodes: {
          ...state.allCodes,
          loading: false,
          error: action.payload,
        }        
      }),
    ],
  ]),
  initState,
);

export default reducer;