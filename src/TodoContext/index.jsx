import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// Nos permite crear contextos para compartir los estados en toda la aplicación
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    items: todos,
    saveItems: saveTodos,
    dataStatus: status,
    onBoarding,
    setOnBoarding,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [toggleModal, setToggleModal] = React.useState(false);

  // - TodoCounter props
  const completedTodos = todos.filter((todos) => todos.isCompleted).length;
  const totalTodos = todos.length;

  // - TodoList Filter
  const filteredTodos = todos
    .sort((a, b) => b.priority - a.priority)
    .sort((a, b) => a.isCompleted - b.isCompleted)
    .filter((todos) => {
      return todos.text.toLowerCase().includes(searchValue.toLowerCase());
    });

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos].filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const togglePriority = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].isCompleted) {
      if (newTodos[todoIndex].priority === 3) {
        newTodos[todoIndex].priority = 0;
      } else {
        newTodos[todoIndex].priority += 1;
      }
    }

    saveTodos(newTodos);
  };

  const addTodo = (text, priority) => {
    const newTodos = [...todos];
    newTodos.push({ text, priority, isCompleted: false });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        status,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        setToggleModal,
        toggleModal,
        onBoarding,
        setOnBoarding,
        togglePriority,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };
