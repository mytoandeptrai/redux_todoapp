import React, { Fragment, useState } from "react";
import Menu from "../Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllTasks from "../TodoList/AllTasks";
import TodoList from "../TodoList/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, searchTodo, todosSelector,deleteTodo, editTodo } from "../../store/reducer";
import TodoForm from "../TodoForm";
import Header from "../Header";
import TodoEdit from "../TodoEdit";
const Todo = () => {
  const [valuesEdit, setValuesEdit] = useState([]);
  const todos = useSelector(todosSelector);
  const todoSearch = useSelector(state => state.todosReducer.searchTodo)

  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();
  const handleFormSubmit = (tasksValue) => {
    console.log(tasksValue);
    dispatch(addTodo(tasksValue));
  };
  const handleSearchSubmit = (searchValues) => {
    searchValues ? setIsSearch(true) : setIsSearch(false);
    dispatch(searchTodo(searchValues));
  };
  const TodoEditMoving = (values) => {
    console.log(values);
    setValuesEdit(values);
  };
  const handleEditSubmit = editValues => {
    console.log(editValues);
    dispatch(editTodo(editValues));
  }
  const handleDeleteTodo = todoValues => {
    console.log(todoValues);
    dispatch(deleteTodo(todoValues))
  }
  
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
                      <AllTasks todos={isSearch ? todoSearch : todos} TodoEditMoving={TodoEditMoving} />
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
                    <Route path="/todoEdit">
                      <TodoEdit handleEditSubmit={handleEditSubmit} handleDeleteTodo={handleDeleteTodo} valuesEdit={valuesEdit} />
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
