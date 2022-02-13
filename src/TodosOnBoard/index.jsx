import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodosOnBoard.css";

function TodosOnBoard() {
  const { onBoarding } = React.useContext(TodoContext);

  if (onBoarding) {
    return (
      <div className="onBoardTodos">
        <p>New here?</p>
        <img src={require("./TodoOnBoard.png")} alt="Empty Todos"></img>
        <p>¡Create your first TODO!</p>
      </div>
    );
  } else {
    return;
  }
}

export { TodosOnBoard };
