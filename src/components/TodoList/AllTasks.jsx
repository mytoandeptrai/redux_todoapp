import React, { Fragment } from "react";

const AllTasks = ({ todos }) => {
  const style = (status) => {
    if (status === "new") {
      return {
        color: "#04BE00",
      };
    } else if (status === "doing") {
      return {
        color: "#F88F14",
      };
    } else {
      return {
        color: "#675BF1",
      };
    }
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="todo-container">
          {todos.map((todo) => (
            <div className="todo-items" key={todo.id}>
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
    </Fragment>
  );
};

AllTasks.propTypes = {};

export default AllTasks;
