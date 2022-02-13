import React from "react";
import "./TodoItem.css";

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
  togglePriority,
  priority,
}) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        <i onClick={onComplete} className="fas fa-check"></i>
      </span>

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className={"Icon"}>
        <i
          onClick={togglePriority}
          className={`fas fa-flag ${completed && "Prior--completed"} ${
            priority > 0 && !completed && `Prior-${priority}`
          } `}
        ></i>
      </span>

      <span className="Icon Icon-delete">
        <i onClick={onDelete} className="fas fa-times"></i>
      </span>
    </li>
  );
}

export { TodoItem };
