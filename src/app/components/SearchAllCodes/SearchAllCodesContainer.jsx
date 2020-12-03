import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchAllCodes from './SearchAllCodes';
import localizationConsts from '../../constants/app.localization.constants';
import { fetchAllCodes } from '../../actions/app.thunks';

const SearchAllCodesContainer = ({
  language,
  dispatchFetchAllCodes,
}) => {
  const searchBtnTitle = useMemo(
    () => localizationConsts[language].SEARCH_All_CODES,
    [language]
  );

  const handleGetAllCodes = useCallback(
    e => {
      e.preventDefault();

      dispatchFetchAllCodes();
    },
    [dispatchFetchAllCodes]
  );

  return (
    <SearchAllCodes 
      searchBtnTitle={searchBtnTitle}
      onSubmitSearch={handleGetAllCodes}
    />
  );
}

const mapStateToProps = ({localization}) => ({
  language: localization
});

const mapDispatchToProps = {
  dispatchFetchAllCodes: fetchAllCodes,
}

SearchAllCodesContainer.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']).isRequired,
  dispatchFetchAllCodes: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAllCodesContainer);