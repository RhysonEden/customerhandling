import React, { useState } from "react";
import { loginUser } from "../api/index";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

function Login({ main, setMain }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = React.useState(sessionStorage.getItem("user"));
  const alert = useAlert();
  const history = useHistory();
  const users = username.toLowerCase();
  const pword = password.toLowerCase();

  const changeUser = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const cancelCourse = () => {
    setUsername("");
    setPassword("");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(users, pword).then((resp) => {
        if (!resp) {
          alert.show("Invalid Username or Password");
        } else {
          alert.show("Login Successfull");
          cancelCourse();
        }
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="page">
      <form className="inputWithButton">
        <input
          className="login"
          type="text"
          id="link"
          value={user}
          placeholder="Enter Username"
          onChange={changeUser}
        ></input>
        <input
          className="login"
          type="password"
          id="comment"
          value={password}
          placeholder="Enter Password"
          onChange={changePassword}
        ></input>
        <button className="buttonfirst" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;
