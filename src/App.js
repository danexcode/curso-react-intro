import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  { text: 'Entrenar calestenia', completed: true },
  { text: 'Terminar curso de react', completed: false },
  { text: 'Terminar curriculum', completed: false },
  { text: 'Meditar antes de dormir', completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={1} total={3} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
