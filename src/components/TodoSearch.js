import React from 'react';
import { BiSearch } from 'react-icons/bi';
import '../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className='Search-container'>
      <input
        className="TodoSearch"
        placeholder="Entrenar calestenia"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
      <span
        className='Search-button-span'
      > <BiSearch  /> </span>
    </div>
  );
}

export { TodoSearch };
