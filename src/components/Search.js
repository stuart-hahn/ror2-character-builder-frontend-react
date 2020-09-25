import React from 'react';

const Search = ({ onSearch, searchTerm }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={searchTerm} />
  </div>
);

export default Search;
