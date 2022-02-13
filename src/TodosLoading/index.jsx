import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="TodoLoading">
      <div className="background">
        <div className="TodoLoading-icon check"></div>
        <div className="TodoLoading-text"></div>
        <div className="TodoLoading-icon flag"></div>
        <div className="TodoLoading-icon close"></div>
      </div>
    </div>
  );
}

export { TodosLoading };
