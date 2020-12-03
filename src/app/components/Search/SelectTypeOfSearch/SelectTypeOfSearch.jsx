import React from 'react';
import PropTypes from 'prop-types';
import typeSearch from '../../../enums/app.enum.typeSearch';

import './select-type-of-search.scss';

const SelectTypeOfSearch = ({
  onSelect,
  value,
  optionsNames: {
    name,
    fullName,
    code,
    currency,
  }
}) => (
  <select 
    className="search-select__select"
    onChange={onSelect}
    value={value}
  >    
    <option 
      className="search-select__option" 
      value={typeSearch.name}
    >
      {name}
    </option>
    <option 
      className="search-select__option"
      value={typeSearch.fullName}
    >
      {fullName}
    </option>
    <option 
      className="search-select__option"
      value={typeSearch.code}
    >
      {code}
    </option>
    <option 
      className="search-select__option"
      value={typeSearch.currency}
    >
      {currency}
    </option>
  </select>
);

SelectTypeOfSearch.propTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  optionsNames: PropTypes.shape({
    name: PropTypes.string,
    fullName: PropTypes.string,
    code: PropTypes.string,
    currency: PropTypes.string,
  })
}

export default SelectTypeOfSearch;