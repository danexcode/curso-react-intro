import '../css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      Haz completado <span>{completed}</span> de <span>{total}</span> TODO's
    </h1>
  );
}

export { TodoCounter };
