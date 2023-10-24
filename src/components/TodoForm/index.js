import React from 'react';
import { TodoContext } from '../../TodoContex';
import './TodoForm.css';

function TodoForm() {
  const { openModal, setOpenModal, addTodo } = React.useContext(TodoContext);

  return (
    <form>
      <label>Escribe tu nueva tarea</label>
      <textarea id='TodoForm-textarea' placeholder="Cortar cebolla..." />
      <div className='TodoForm-buttonContainer'>
        <button
          className="TodoForm-button--cancel"
          type='button'
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >Cancelar</button>
        <button
          className="TodoForm-button--add"
          type='button'
          onClick={() => {
            const text = document.getElementById('TodoForm-textarea').value;
            addTodo(text);
            setOpenModal(!openModal);
          }}
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
