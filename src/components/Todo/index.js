import React, { Fragment } from "react";
import Menu from "../Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllTasks from "../TodoList/AllTasks";
import TodoList from "../TodoList/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, searchTodo, todosSelector } from "../../store/reducer";
import TodoForm from "../TodoForm";
import Header from "../Header";

const Todo = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const handleFormSubmit = (tasksValue) => {
    console.log(tasksValue);
    dispatch(addTodo(tasksValue));
  };
  const handleSearchSubmit = (searchValues) => {
    const newTodos = todos.filter((x) =>
      x.title.toLowerCase().match(searchValues.toLowerCase())
    );
    const newTodo = newTodos.map((el) => el.title).join();
    console.log(newTodo);
    dispatch(searchTodo(newTodo));
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <Router>
          <Switch>
            <React.Fragment>
              <Header handleSearchSubmit={handleSearchSubmit} />
              <div className="row">
                <div className="col-2">
                  <Menu />
                </div>
                <Fragment>
                  <div className="col-9">
                    <Route exact path="/">
                      <AllTasks todos={todos} />
                    </Route>
                    <Route path="/newTasks">
                      <TodoList todos={todos} status="new" />
                    </Route>
                    <Route path="/doingTasks">
                      <TodoList todos={todos} status="doing" />
                    </Route>
                    <Route path="/doneTasks">
                      <TodoList todos={todos} status="done" />
                    </Route>
                    <Route path="/todoForms">
                      <TodoForm handleFormSubmit={handleFormSubmit} />
                    </Route>
                  </div>
                </Fragment>
              </div>
            </React.Fragment>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default Todo;
