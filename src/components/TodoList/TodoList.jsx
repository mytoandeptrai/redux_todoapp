import React from "react";
import { Link } from "react-router-dom";
const TodoList = ({ todo, TodoEditMoving, id }) => {
  const handleMove = () => {
    const values = {
      id: todo.id,
      title: todo.title,
      creator: todo.creator,
      status: todo.status,
      description: todo.description,
    };

    TodoEditMoving(values);
  };
  return (
    <div>
      <Link to="/todoEdit">
        <div className="todo-items" key={todo.id} onClick={handleMove}>
          <h1>Title: {todo.title}</h1>
          <p style={{ fontWeight: "bold" }}>Creator: {todo.creator}</p>
          <div className="todo-status">
            {todo.status === "done" && (
              <h3 style={{ color: "#675BF1", fontWeight: "bold" }}>
                Status: {todo.status}
              </h3>
            )}
            {todo.status === "new" && (
              <h3 style={{ color: "#04BE00", fontWeight: "bold" }}>
                Status: {todo.status}
              </h3>
            )}
            {todo.status === "doing" && (
              <h3 style={{ color: "#F88F14", fontWeight: "bold" }}>
                Status: {todo.status}
              </h3>
            )}
          </div>
          <hr style={{ border: "1px solid #675BF1" }} />
          <p>
            <strong>Description: </strong>
            <br />
            {todo.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TodoList;
