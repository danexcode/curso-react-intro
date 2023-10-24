import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

const defaultTodos = [
  { text: 'Entrenar calestenia', completed: true },
  { text: 'Terminar curso de react', completed: false },
  { text: 'Terminar curriculum', completed: false },
];

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => Boolean(todo.completed)).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = newTodos[index].completed ? false : true;
    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    if(!text){
      return;
    }
    const newTodo = {
      text,
      completed: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }} >
      {children}
    </TodoContext.Provider>

  );
}


export { TodoContext, TodoProvider };
