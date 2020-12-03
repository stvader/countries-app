import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultCodesList from './ResultCodesList';
import Spinner from '../../Spinner';
import Error from '../../Error';

const ResultCodesListContainer = ({
  allCodes: {
    collection: allCodesList,
    loading,
    error,
  }
}) => {
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
    <ResultCodesList 
      allCodesList={allCodesList}
    />
  );
}

const mapStateToProps = ({allCodes}) => ({
  allCodes,
});

ResultCodesListContainer.propTypes = {
  allCodes: PropTypes.shape({
    collection: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object,
  })
}

export default connect(mapStateToProps)(ResultCodesListContainer);