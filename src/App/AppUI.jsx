import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodosOnBoard } from "../TodosOnBoard";

function AppUI() {
  const {
    status,
    filteredTodos,
    completeTodo,
    deleteTodo,
    toggleModal,
    togglePriority,
    onBoarding,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {status.error && <TodosError />}
        {status.loading &&
          new Array(3)
            .fill()
            .map((item, index) => <TodosLoading key={index} />)}
        {!status.loading &&
          !filteredTodos.length &&
          !status.error &&
          !onBoarding && <TodosEmpty />}
        {!status.loading && onBoarding && <TodosOnBoard />}
        {filteredTodos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.isCompleted}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            togglePriority={() => togglePriority(todo.text)}
            priority={todo.priority}
          />
        ))}
      </TodoList>

      {toggleModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
