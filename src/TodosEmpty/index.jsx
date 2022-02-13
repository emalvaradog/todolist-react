import React from "react";
import "./TodosEmpty.css";

function TodosEmpty() {
  return (
    <div className="emptyTodos">
      <img src={require("./TodoEmpty.png")} alt="Empty Todos"></img>
      <p>Looks like there's nothing here...</p>
      <p>Why not add a new TODO?</p>
    </div>
  );
}

export { TodosEmpty };
