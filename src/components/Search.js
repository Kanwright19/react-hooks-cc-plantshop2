import React from "react";

function Search({search , onSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        value = {search}
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
