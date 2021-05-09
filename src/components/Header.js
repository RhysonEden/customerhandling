import React from "react";
import SearchBar from "./Search";

const Header = ({ searchInput, setSearchInput }) => {
  const user = sessionStorage.getItem("user")
  return (
    <div className="header">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="right">Hello, {user}</div>
    </div>
  );
};

export default Header;
