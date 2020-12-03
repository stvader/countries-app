import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  title,
  onClick = () => {},
  type = 'submit'
}) => (
  <button 
    onClick={onClick} 
    type={type}
    className="button"
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button;