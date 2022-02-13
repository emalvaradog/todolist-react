import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  React.useEffect(() => {
    totalTodos - completedTodos > 0
      ? (document.title = `${totalTodos - completedTodos} ${
          totalTodos - completedTodos === 1 ? "pending task" : "pending tasks"
        }`)
      : (document.title = `No pending tasks`);
  }, [totalTodos, completedTodos]);

  return (
    <h2 className="TodoCounter">
      {(completedTodos === 0) & (totalTodos === 0)
        ? "You have no taks to do"
        : totalTodos === completedTodos
        ? "¡Congrats! You've finished all your tasks"
        : `You've finished ${completedTodos} out of ${totalTodos} tasks`}
    </h2>
  );
}
export { TodoCounter };
