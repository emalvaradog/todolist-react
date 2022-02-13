import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import "./Modal.css";

function Modal({ children }) {
  const { setToggleModal } = React.useContext(TodoContext);

  const onClickHandler = () => {
    setToggleModal(false);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Escape") {
      setToggleModal(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal-container"
      onKeyDown={onKeyDownHandler}
      onClick={onClickHandler}
      tabIndex="-1"
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
