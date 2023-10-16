import '../css/TodoItem.css'

function TodoItem({ text, completed }) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}>V</span>
      <p className={`Todo-text ${completed ? "Todo-text--completed" : ""}`}>{text}</p>
      <span className='Icon Icon-delete'>X</span>
    </li>
  );
}

export { TodoItem };
