import React, { useState } from "react";
import { userUpdate } from "../api";

const Password = () => {
  const username = sessionStorage.getItem("user");
  const [password2, setPassword2] = useState("");
  const change = "0";
  const cancelCourse = (e) => {
    setPassword2("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    userUpdate(username, password2, change);
    cancelCourse();
  };

  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  return (
    <div className="page">
      <form className="create">
        <input
          className="form-input"
          id="name"
          placeholder="Enter User's Name"
          value={username}
        ></input>
        <input
          className="form-input"
          id="name"
          placeholder="Enter New Password"
          value={password2}
          onChange={changePassword2}
        ></input>
        <button className="submit" onClick={handleUpdate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Password;
