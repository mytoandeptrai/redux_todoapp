import React from "react";
import {Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu-dropdown">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/">All Tasks</Link>
        </li>
        <li className="list-group-item">
            <Link to="/newTasks">New Tasks</Link>
        </li>
        <li className="list-group-item">
            <Link to="/doingTasks">Doing Tasks</Link>
        </li>
        <li className="list-group-item">
            <Link to="/doneTasks">Done Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
