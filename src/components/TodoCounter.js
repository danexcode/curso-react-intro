import '../css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    total === completed ?

    <h1 className='TodoCounter'>
      Felicidades, completaste todas las tareas!!
    </h1>

    :

    <h1 className='TodoCounter'>
      Haz completado <span>{completed}</span> de <span>{total}</span> TODO's
    </h1>
  );
}

export { TodoCounter };
