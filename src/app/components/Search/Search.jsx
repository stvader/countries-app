import React from 'react';
import SearchForm from './SearchForm';
import CountryInfoBlock from '../CountryInfoBlock';
import SearchAllCodes from '../SearchAllCodes';

const Search = () => {
  return (
    <main>
      <SearchForm />
      <CountryInfoBlock />
      <SearchAllCodes />
    </main>
  )
}

export default Search;