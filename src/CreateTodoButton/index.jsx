import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setToggleModal, toggleModal } = React.useContext(TodoContext);
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    document.querySelector(
      ".CreateTodoButton"
    ).style.transform = `rotate(${rotation}deg)`;
    setRotation((rotation) => (rotation += 45));
  }, [toggleModal]);

  const onClickHandler = () => {
    setToggleModal(!toggleModal);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Escape") {
      setToggleModal(false);
    }
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
