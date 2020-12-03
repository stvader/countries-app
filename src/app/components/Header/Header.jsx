import React from 'react';
import PropTypes from 'prop-types';
import Switcher from '../Switcher';

import './header.scss';

const Header = ({
  headername
}) => {
  return (
    <header className="header__block">
      <h1 className="header__header">
        {headername}
      </h1>
      <Switcher />
    </header>
  );
}

Header.propTypes = {
  headername: PropTypes.string.isRequired,
}

export default Header;