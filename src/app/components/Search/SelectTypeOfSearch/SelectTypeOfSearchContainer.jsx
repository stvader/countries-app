import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectTypeOfSearch from './SelectTypeOfSearch';
import { selectTypeOfSearch } from '../../../actions/app.actions';
import localizationConsts from '../../../constants/app.localization.constants';

const SelectTypeOfSearchContainer = ({
  dispatchSelectTypeOfSearch,
  language,
}) => {
  const [selected, setSelected] = useState('name');

  const optionsNames = useMemo(
    () => localizationConsts[language].selectOptions,
    [language]
  );

  const handleSelect = useCallback(
    e => {
      const value = e.target.value;
      setSelected(value);
      dispatchSelectTypeOfSearch(value);
    },
    [setSelected, dispatchSelectTypeOfSearch]
  );

  return (
    <SelectTypeOfSearch 
      onSelect={handleSelect}
      value={selected}
      optionsNames={optionsNames}
    />
  )
}

const mapStateToProps = ({localization}) => ({
  language: localization,
});

const mapDispatchToProps = {
  dispatchSelectTypeOfSearch: selectTypeOfSearch
}

SelectTypeOfSearchContainer.propTypes = {
  dispatchSelectTypeOfSearch: PropTypes.func.isRequired,
  language: PropTypes.oneOf(['en', 'ru']).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTypeOfSearchContainer);