import '../css/CreateTodoButton.css'

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={
      (event) => {
        console.log('Le diste click!!');
        console.log(event);
        console.log(event.target);
      }
    }>+</button>
  );
}

export { CreateTodoButton };
