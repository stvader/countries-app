import React from 'react';
import PropTypes from 'prop-types';

import './result-codes-list.scss';

const ResultCodesList = ({
  allCodesList
}) => (
  <>
    {!!allCodesList.length && 
      <div className="codes-block__wrapper">
        {allCodesList.map((code) => 
          <span
            key={code}
            className="codes-block__item"
          >
            {code}
          </span>
        )}
      </div>
    }
  </>
);

ResultCodesList.propTypes = {
  allCodesList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ResultCodesList;