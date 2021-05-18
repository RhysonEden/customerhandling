import React from "react";
import SearchBar from "./Search";
import { useHistory } from "react-router-dom";
import { getAdminInfo } from "../api";

const Header = ({ searchInput, setSearchInput }) => {
  const capital = sessionStorage.getItem("user");
  const admin = sessionStorage.getItem("admin");
  const user = capital.charAt(0).toUpperCase() + capital.slice(1);
  const history = useHistory();

  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    getAdminInfo(capital).then((resp) => {
      const info = resp.data.name;
      if (info === true) {
        history.push("/admin");
      }
    });
  };

  const handleMain = (e) => {
    e.preventDefault();
    history.push("/");
  };

  function logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  if (admin === "true") {
    return (
      <div className="header">
        <div className="right">
          <button className="buttonfirst" onClick={handleClear}>
            Clear
          </button>
          <button className="buttonfirst" onClick={logout}>
            Logout
          </button>
          <button className="buttonfirst" onClick={handleAdmin}>
            Admin
          </button>
          <button className="buttonfirst" onClick={handleMain}>
            Main
          </button>
        </div>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="left">Hello, {user}!</div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="right">
          <button className="buttonfirst" onClick={handleClear}>
            Clear
          </button>
          <button className="buttonfirst" onClick={logout}>
            Logout
          </button>
        </div>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="left">Hello, {user}!</div>
      </div>
    );
  }
};

export default Header;
