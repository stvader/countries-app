import React from 'react';
import PropTypes from 'prop-types';

import './switcher.scss';

const Switcher = ({
  checked, 
  onChangeSwitcher,
}) => (  
  <div className="switcher__wrapper">
    <span className="switcher__language switcher__language--en">
      EN
    </span>
    <label className="switcher__label">
      <input 
        type="checkbox" 
        checked={checked}   
        className="switcher__input"
        onChange={onChangeSwitcher}
      />
      <span className="switcher__slider"></span>
    </label>
    <span className="switcher__language switcher__language--ru">
      RU
    </span>
  </div>
)

Switcher.propTypes = {
  onChangeSwitcher: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default Switcher;