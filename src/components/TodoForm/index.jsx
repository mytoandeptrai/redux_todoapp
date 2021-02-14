import React, { useState } from "react";

const TodoForm = ({ handleFormSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [tasksValue, setTasksValue] = useState({
    title: "",
    creator: "",
    createdAt: "",
    description: "",
    status: "new",
  });
  const onChange = (e) => {
    setTasksValue({ ...tasksValue, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      tasksValue.title.trim() === "" ||
      tasksValue.description.trim() === "" ||
      tasksValue.createdAt.trim() === "" ||
      tasksValue.creator.trim() === "" ||
      tasksValue.status === ''
    )
      return;
    handleFormSubmit(tasksValue);
    setTasksValue({
      title: "",
      creator: "",
      createdAt: "",
      description: "",
      status: "new",
    });
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                name="title"
                placeholder="Enter your new tasks"
                value={tasksValue.title}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Creator
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                name="creator"
                placeholder="Name of Creator"
                value={tasksValue.creator}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Created at
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                name="createdAt"
                placeholder="08-02-2021 07:45:20"
                value={tasksValue.createdAt}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                name="description"
                placeholder="Description Details"
                value={tasksValue.description}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <input
              type="radio"
              checked={tasksValue.status === "done"}
              name="status"
              value="done"
              onChange={onChange}
            />
            Done
            <input
              type="radio"
              checked={tasksValue.status === "new"}
              name="status"
              value="new"
              onChange={onChange}
            />
            New
            <input
              type="radio"
              checked={tasksValue.status === "doing"}
              name="status"
              value="doing"
              onChange={onChange}
            />
            Doing
          </div>
          <button className="btn btn-primary btn-submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
