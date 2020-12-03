import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text'
}) => (
  <div className="input__wrapper">
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input__input"
      type={type}      
    />
  </div>  
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input;