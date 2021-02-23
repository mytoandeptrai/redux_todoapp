import React, { useState } from "react";
import Popup from "../../Popup";

const TodoEdit = ({ valuesEdit, handleEditSubmit, handleDeleteTodo }) => {
  const status = valuesEdit.status;
  const [currentItem, setCurrentItem] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [editValues, setEditValues] = useState({
    id: valuesEdit.id,
    title: "",
    creator: "",
    createdAt: "",
    description: "",
    status: "new",
  });
  const onChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      editValues.title.trim() === "" ||
      editValues.description.trim() === "" ||
      editValues.createdAt.trim() === "" ||
      editValues.creator.trim() === "" ||
      editValues.status === ""
    ) {
      setCurrentItem(editValues);
    } else {
      handleEditSubmit(editValues);

      setEditValues({
        title: "",
        creator: "",
        createdAt: "",
        description: "",
        status: "new",
      });
    }
  };
  const handleReset = () => {
    setEditValues({
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
                placeholder={valuesEdit.title}
                value={editValues.title}
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
                placeholder={valuesEdit.creator}
                value={editValues.creator}
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
                placeholder={valuesEdit.createdAt}
                value={editValues.createdAt}
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
                placeholder={valuesEdit.description}
                value={editValues.description}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <input
              type="radio"
              name="status"
              value="done"
              onChange={onChange}
              checked={editValues.status === "done"}
            />
            Done
            <input
              type="radio"
              name="status"
              value="new"
              onChange={onChange}
              checked={editValues.status === "new"}
            />
            New
            <input
              type="radio"
              name="status"
              value="doing"
              onChange={onChange}
              checked={editValues.status === "doing"}
            />
            Doing
          </div>
          <div className="button">
            <button className="btn btn-primary btn-submit" type="submit">
              Save
            </button>
            <button className="btn btn-primary btn-submit" type="submit" onClick={() => setIsDelete(!isDelete)}>
              Delete
            </button>
            <button
              className="btn btn-primary btn-submit"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        <Popup isDelete={isDelete} currentItem={currentItem} handleDeleteTodo={handleDeleteTodo} setIsDelete={setIsDelete} />
      </div>
    </div>
  );
};

export default TodoEdit;
