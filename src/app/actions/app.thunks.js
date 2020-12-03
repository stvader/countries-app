import * as actions from '../actions/app.actions';
import { 
  getCountryDataFromApi,
  getAllCodes,
} from '../api/apiCountry';
import transformCountryDataForResultsView from '../transformers/transformCountryDataForResultsView';
import transformAllCodes from '../transformers/transformAllCodes';
import { getCached, setChached } from '../proxy/app.proxy';

export const fetchCountryInfo = (request) => async dispatch => {
  dispatch(actions.searchCountry.request());

  const cachedData = getCached(request);
  
  if (cachedData) {    
    dispatch(actions.searchCountry.success(cachedData));
    return;
  }

  try {
    const response = await getCountryDataFromApi(request);    
    const dataTransformedForUI = transformCountryDataForResultsView(response);   
    dispatch(actions.searchCountry.success(dataTransformedForUI));
    setChached(Object.assign({}, request, {response: dataTransformedForUI}));
  } catch (error) {    
    dispatch(actions.searchCountry.error(error));
  }
};

export const fetchAllCodes = () => async dispatch => {
  dispatch(actions.searchAllCodes.request());

  const cachedData = getCached('allCodes');
  
  if (cachedData) {    
    dispatch(actions.searchCountry.success(cachedData));
    return;
  }

  try {
    const response = await getAllCodes();
    const allCodesList = transformAllCodes(response)
    dispatch(actions.searchAllCodes.success(allCodesList));
  } catch (error) {    
    dispatch(actions.searchAllCodes.error(error));
  }
}