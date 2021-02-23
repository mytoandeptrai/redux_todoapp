import React, { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import TodoList from "./TodoList";

const AllTasks = ({ todos, TodoEditMoving, setIsChecked }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const todoPerPage = 12;
  const pageVisited = pageNumber * todoPerPage;
  const displayTodo = todos
    .slice(pageVisited, pageVisited + todoPerPage)
    .map((todo) => (
      <TodoList
        key={todo.id}
        todo={todo}
        TodoEditMoving={TodoEditMoving}
        id={todo.id}
        setIsChecked={setIsChecked}
      />
    ));

  const pageCount = Math.ceil(todos.length / todoPerPage);
  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="todo-container">
          {displayTodo}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </Fragment>
  );
};

AllTasks.propTypes = {};

export default AllTasks;
