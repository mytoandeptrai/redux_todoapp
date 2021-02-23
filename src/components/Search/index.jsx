import React, { useState } from "react";

const Search = ({ handleSearchSubmit }) => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(search);
  };
  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={onSearchChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 btn-fixed"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
