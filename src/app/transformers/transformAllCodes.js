const transformAllCodes = (allCountriesCollection) => 
  allCountriesCollection.map(({alpha2Code}) => alpha2Code);

export default transformAllCodes;