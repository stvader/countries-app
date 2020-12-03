import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switcher from './Switcher';
import { switchLocatization } from '../../actions/app.actions';
import { 
  getLocalizationFromChechbox,
  getCheckboxFromLocalization,
} from '../../utils/getLocalization';

const SwitcherContainer = ({
  localization,
  dispatchSwitchLocatization,
}) => {
  const [checked, setChecked] = useState(getCheckboxFromLocalization(localization));

  const handleChangeSwitcher = useCallback(
    () => {     
      setChecked(!checked);    
    },
    [setChecked, checked]
  );
  
  useEffect(
    () => {
      const localization = getLocalizationFromChechbox(checked);
      dispatchSwitchLocatization(localization);
      localStorage.setItem('localization', localization);
    },
    [checked, dispatchSwitchLocatization]
  );

  return (
    <Switcher 
      checked={checked}
      onChangeSwitcher={handleChangeSwitcher}
    />
  );
}

const mapStateToProps = ({localization}) => ({
  localization
});

const mapDispatchToProps = {
  dispatchSwitchLocatization: switchLocatization
};

SwitcherContainer.propTypes = {
  localization: PropTypes.string.isRequired,
  dispatchSwitchLocatization: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitcherContainer);