import React from "react";

const Popup = ({ isDelete, setIsDelete, currentItem, handleDeleteTodo }) => {
  const deleteTodo = () => {
    setIsDelete(false);
    handleDeleteTodo(currentItem);
  };
  return isDelete ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Do you want to delete what have you chosen ?</h3>
        <button className="close-btn" onClick={() => setIsDelete(false)}>
          Close
        </button>
        <button className="close-btn" onClick={deleteTodo}>
          OK
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
