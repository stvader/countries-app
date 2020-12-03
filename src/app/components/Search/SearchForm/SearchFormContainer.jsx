import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import locatizationConsts from '../../../constants/app.localization.constants';
import { fetchCountryInfo } from '../../../actions/app.thunks';

const SearchFormContainer = ({
  language,
  dispatchCountryInfo,
  searchType,
}) => {
  const [input, setInput] = useState('');  

  const localizationLanguage = useMemo(
    () => locatizationConsts[language],
    [language]
  );

  const inputPlaceholder = useMemo(
    () => localizationLanguage.placeholders[searchType],
    [searchType, localizationLanguage.placeholders]
  );

  const handleInputChange = useCallback(
    e => {
      setInput(e.target.value.trim());
    },
    [setInput]
  );

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!input) {
        return;
      }

      dispatchCountryInfo({
        type: searchType, 
        data: input
      });
      setInput('')   
    },
    [input, setInput, dispatchCountryInfo, searchType]
  );

  return (
    <SearchForm 
      searchTitle={localizationLanguage.SEARCH_TYPE_TITLE}
      onSubmit={onSubmitForm}
      inputValue={input}
      onInputChange={handleInputChange}
      inputPlaceholder={inputPlaceholder}
      buttonTitle={localizationLanguage.SEARCH_BTN}
    />
  )
}

const mapStateToProps = ({localization, searchType}) => ({
  language: localization,
  searchType
});

const mapDispatchToProps = {
  dispatchCountryInfo: fetchCountryInfo,
}

SearchFormContainer.propTypes = {  
  language: PropTypes.oneOf(['en', 'ru']).isRequired,
  dispatchCountryInfo: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);