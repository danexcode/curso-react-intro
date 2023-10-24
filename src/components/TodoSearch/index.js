import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContex';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
