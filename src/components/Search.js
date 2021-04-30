import React, { useState } from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Enter GVR ID"
          value={searchInput}
          onChange={handleTextChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
