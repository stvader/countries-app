import React from 'react';
import { Provider } from 'react-redux';
import store from './store/app.store';
import Header from './components/Header';
import Search from './components/Search';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Search />
      </div>
    </Provider>        
  );
}

export default App;
