import React, { useState } from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput("")
  }

  return (
    <div className='inputWithButton'>
      {/* <form > */}
        <input
        className="search"
          type="text"
          placeholder="Enter GVR ID"
          value={searchInput}
          onChange={handleTextChange}
        />
        <button className="newButton" onClick={handleClear}>Clear</button>
      {/* </form> */}
      
    </div>
  );
};

export default SearchBar;
