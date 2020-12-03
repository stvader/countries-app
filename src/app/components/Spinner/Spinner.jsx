import React from 'react';

import './spinner.scss';

const Spinner = () => (
  <div className="spinner__wrapper">
    <div className="lds-spinner">
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
      </div>
  </div>
);
export default Spinner;