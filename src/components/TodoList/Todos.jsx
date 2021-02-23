import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const TodoList = ({ todos, status }) => {
  return (
    <Fragment>
      <Link to="/todoEdit">
        <div className="container-fluid">
          <div className="todo-container">
            {todos
              .filter((newTodo) => newTodo.status === status)
              .map((todo) => (
                <div className="todo-items" key={todo.id}>
                  <h1>Title: {todo.title}</h1>
                  <p>Creator: {todo.creator}</p>
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
                  <hr />
                  <p>
                    <strong>Description: </strong>
                    <br />
                    {todo.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default TodoList;
