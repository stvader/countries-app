import React from 'react';
import PropTypes from 'prop-types';
import InfoCompanent from './InfoCompanent';
import { JOIN_DIVIDER } from '../../constants/app.constants';

import './country-info.scss';

const CountryInfoBlock = ({
  countryInfo: {
    flag,
    name,
    capital,
    region,
    subregion,
    timezones,
    alpha2Code,
    alpha3Code,
    latlng,
    area,
    population,
    languages,
    currencies,
  },
  titlesNames: {
    countryName: countryNameTitle,
    capital: capitalTitle,
    region: regionTitle,
    timezones: timezonesTitle,
    codes: codesTitle,
    coords: coordsTitle,
    area: areaTitles,
    population: populationTitle,
    languages: languagesTitle,
    currency: currencyTitle,
  },
  onDelete,
}) => (
  <div className="country-info__wrapper">
    <button 
      className="country-info__close"
      onClick={onDelete}
    >
      Close
    </button>
    <div className="country-info__flag-block">
      <img src={flag} alt={`${name}-flag`} className="country-info__flag" />
    </div>
    <div className="country-info__column-info country-info__column-info--main">
      <InfoCompanent name={countryNameTitle} value={name} />
      <InfoCompanent name={capitalTitle} value={capital} />
      <InfoCompanent name={regionTitle} value={`${region}, ${subregion}`} />      
      <InfoCompanent name={timezonesTitle} value={timezones.join(JOIN_DIVIDER)} />
      <InfoCompanent name={codesTitle} value={`${alpha2Code}, ${alpha3Code}`} />    
    </div>
    <div className="country-info__column-info country-info__column-info--additional">
      <InfoCompanent name={coordsTitle} value={latlng.join(JOIN_DIVIDER)} />
      <InfoCompanent name={areaTitles} value={area} />
      <InfoCompanent name={populationTitle} value={population} />
      <InfoCompanent name={languagesTitle} value={languages.join(JOIN_DIVIDER)} />
      <InfoCompanent name={currencyTitle} value={currencies.join(JOIN_DIVIDER)} />      
    </div>
  </div>
);

CountryInfoBlock.propTypes = {
  countryInfo: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    timezones: PropTypes.arrayOf(PropTypes.string),
    alpha2Code: PropTypes.string,
    alpha3Code: PropTypes.string,
    latlng: PropTypes.arrayOf(PropTypes.number),
    area: PropTypes.number,
    population: PropTypes.number,
    languages: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  titlesNames: PropTypes.shape({
    countryName: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    timezones: PropTypes.string,
    codes: PropTypes.string,
    coords: PropTypes.string,
    area: PropTypes.string,
    population: PropTypes.string,
    languages: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default CountryInfoBlock;