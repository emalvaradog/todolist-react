import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [todoValue, setTodoValue] = React.useState("");
  const [priorityValue, setPriorityValue] = React.useState(0);
  const { addTodo, setToggleModal, setOnBoarding } =
    React.useContext(TodoContext);

  const onCancel = () => {
    setToggleModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(todoValue, priorityValue);
    setToggleModal(false);
    setOnBoarding(false);
  };

  const onChangeSelectHandler = (event) => {
    setPriorityValue(parseInt(event.target.value));
  };

  const onChangeHandler = (event) => {
    setTodoValue(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter" && event.shiftKey === false) {
      onSubmit(event);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a new task</label>
      <textarea
        required
        value={todoValue}
        onChange={onChangeHandler}
        placeholder="Send mail"
        onKeyDown={onKeyDownHandler}
      ></textarea>
      <label>Select priority</label>
      <select onChange={onChangeSelectHandler} defaultValue="0">
        <option value="0" disabled hidden>
          Set Priority
        </option>
        <option value="3">Priority 1</option>
        <option value="2">Priority 2</option>
        <option value="1">Priority 3</option>
      </select>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
