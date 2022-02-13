import React from "react";
import "./TodosError.css";

function TodosError() {
  return (
    <div className="errorTodos">
      <img src={require("./TodoError.png")} alt="Empty Todos"></img>
      <p>Oops! Something went wrong</p>
      <p>Try refreshing the page</p>
    </div>
  );
}

export { TodosError };
