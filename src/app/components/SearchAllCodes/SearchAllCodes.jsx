import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ResultCodesList from './ResultCodesList';

import './search-all-codes.scss';

const SearchAllCodes = ({
  searchBtnTitle,
  onSubmitSearch,
}) => (
  <>
    <div className="search-all-codes__wrapper">
      <form onSubmit={onSubmitSearch}>
        <Button 
          title={searchBtnTitle}
        />
      </form>
    </div>
    
    <ResultCodesList />
  </>
);

SearchAllCodes.propTypes = {
  searchBtnTitle: PropTypes.string.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
}

export default SearchAllCodes;