import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'

import { TodoContext } from '../../TodoContex';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}

        {!loading &&
          searchedTodos.map((todo, i) => (
            <TodoItem
              key={i}
              index={i}
              text={todo.text}
              completed={todo.completed}
              onComplete={completeTodo}
              onDelete={deleteTodo}
            />
          ))}
      </TodoList>

      <CreateTodoButton />

      {openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }
    </React.Fragment>
  );
}

export { AppUI };
