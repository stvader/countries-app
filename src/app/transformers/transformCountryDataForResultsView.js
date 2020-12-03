const transformCurrencies = (currencies) =>
  currencies.map(({code}) => code);

const transformLanguages = (languages) => 
  languages.map(({name}) => name);

const transformCountryDataSingle = ({
  alpha2Code,
  alpha3Code,
  area,
  capital,
  currencies,
  flag,
  languages,
  latlng,
  name,
  population,
  region,
  subregion,
  timezones
}) => ({
  alpha2Code,
  alpha3Code,
  area,
  capital,
  currencies: transformCurrencies(currencies),
  flag,
  languages: transformLanguages(languages),
  latlng,
  name,
  population,
  region,
  subregion,
  timezones
});

const transformCountryDataForResultsView = (serverData) => 
  Array.isArray(serverData) 
    ? serverData.map(transformCountryDataSingle) 
    : [transformCountryDataSingle(serverData)]
    
export default transformCountryDataForResultsView;