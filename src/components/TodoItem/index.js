import { BiCheck, BiTrash } from 'react-icons/bi'

import './TodoItem.css'

function TodoItem({ index, text, completed, onComplete, onDelete}) {
  return (
    <li className="TodoItem">

      <span
        className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}
        onClick={(event) => {
          onComplete(index);
        }}

      > <BiCheck /> </span>

      <p className={`Todo-text ${completed ? "Todo-text--completed" : ""}`}>{text}</p>

      <span
        className='Icon Icon-delete'
        onClick={() => {
          onDelete(index)
        }}
      > <BiTrash /> </span>
    </li>
  );
}

export { TodoItem };
