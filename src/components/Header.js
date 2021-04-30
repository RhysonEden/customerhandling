import React from "react";
import SearchBar from "./Search";

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <div className="header">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
};

export default Header;
