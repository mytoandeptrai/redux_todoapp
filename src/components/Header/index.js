import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
const Header = ({handleSearchSubmit}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between navbar-fixed">
        <div className="navbar-brand">
          <button type="button" className="btn btn-primary">
            <Link to="/todoForms">Create new Tasks</Link>
          </button>
        </div>
        <div className="navbar-search">
          <Search handleSearchSubmit={handleSearchSubmit}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
