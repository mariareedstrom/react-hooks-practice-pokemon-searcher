import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          type="text"
          value={search}
          placeholder="Search.."
          className="prompt"
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
