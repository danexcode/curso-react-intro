import React from 'react';

import { TodoContext } from '../../TodoContex';
import './CreateTodoButton.css'

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button className="CreateTodoButton" onClick={
      (event) => {
        setOpenModal(!openModal);
      }
    }>+</button>
  );
}

export { CreateTodoButton };
