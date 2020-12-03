import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CountryInfoBlock from './CountryInfoBlock';
import Spinner from '../Spinner';
import Error from '../Error';
import { deleteItemFromCountries } from '../../actions/app.actions';
import localizationConsts from '../../constants/app.localization.constants';

const CountryInfoBlockContainer = ({
  countriesInfo: {
    collection: countriesInfo,
    loading,
    error,
  },  
  dispatchDeleteItemFromCountries,
  language,
}) => {
  const titlesNames = useMemo(
    () => localizationConsts[language].countryInfoTitles,
    [language]
  );

  const handleDeleteBlock = useCallback(
    countryName => {
      dispatchDeleteItemFromCountries(countryName)
    },
    [dispatchDeleteItemFromCountries]
  );

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (      
      <Error />      
    )
  }
  
  return (
    <>
      {!!countriesInfo.length &&
        countriesInfo.map((country) => (
          <CountryInfoBlock
            key={country.name}
            countryInfo={country}
            titlesNames={titlesNames}
            onDelete={() => handleDeleteBlock(country.name)}
          />
        ))
      }
    </>        
  )
}

const mapStateToProps = ({countriesInfo, localization}) => ({
  countriesInfo,
  language: localization,
});

const mapDispatchToProps = {
  dispatchDeleteItemFromCountries: deleteItemFromCountries,
}

CountryInfoBlockContainer.propTypes = {
  countriesInfo: PropTypes.shape({
    collection: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
  }),
  dispatchDeleteItemFromCountries: PropTypes.func.isRequired,
  language: PropTypes.oneOf(['en', 'ru']).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfoBlockContainer);