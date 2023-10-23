import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const allCompleted = total === completed && completed > 0;
  const emptyTasks = total === 0;
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
        Haz completado <span>{completed}</span> de <span>{total}</span> TODO's
      </h1>
    )
  }
}

export { TodoCounter };
