import React from 'react';
import { TodoContext } from '../../TodoContex';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  const allCompleted = totalTodos === completedTodos && completedTodos > 0;
  const emptyTasks = totalTodos === 0;
  if(allCompleted){
    return (
      <h1 className='TodoCounter'>
        Felicidades, completaste todas las tareas!!
      </h1>
    );
  } else if (emptyTasks){
    return (
      <h1 className='TodoCounter'>
        Agrega tu primera tarea!!
      </h1>
    );
  } else {
    return (
      <h1 className='TodoCounter'>
        Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
      </h1>
    )
  }
}

export { TodoCounter };
