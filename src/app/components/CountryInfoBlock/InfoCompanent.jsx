import React from 'react';
import PropTypes from 'prop-types';

const InfoCompanent = ({
  name,
  value
}) => (
  <div className="country-info__info-item">    
    <span className="country-info__param-title">
      {name}:
    </span>
    <span>
      {value}
    </span>
  </div>
);

InfoCompanent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default InfoCompanent;