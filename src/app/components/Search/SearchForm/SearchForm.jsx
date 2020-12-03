import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../../Button';
import SelectTypeOfSearch from '../SelectTypeOfSearch';

import './search-form.scss';

const SearchForm = ({
  searchTitle,
  onSubmit,
  inputValue,
  onInputChange,
  inputPlaceholder,
  buttonTitle,
}) => (
  <div className="search-form__wrapper">
    <div>
      <h3 className="search-form__type">
        {searchTitle}
      </h3>
      <SelectTypeOfSearch />
    </div>
    
    <form onSubmit={onSubmit}>
      <div className="search-form__field">
        <Input 
          value={inputValue}
          onChange={onInputChange}
          placeholder={inputPlaceholder}
        />
        <Button
          title={buttonTitle}
        />
      </div>    
    </form>
  </div>
);

SearchForm.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
}

export default SearchForm;