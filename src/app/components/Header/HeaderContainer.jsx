import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import locatizationConsts from '../../constants/app.localization.constants';

const HeaderContainer = ({
  language
}) => (
  <Header 
    headername={locatizationConsts[language].APP_HEADER}
  />
)

const mapStateToProps = ({localization}) => ({
  language: localization
});

HeaderContainer.propTypes = {
  language: PropTypes.oneOf(['en', 'ru']).isRequired,
}

export default connect(mapStateToProps)(HeaderContainer);