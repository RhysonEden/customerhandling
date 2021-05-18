import React, { useState, useEffect } from "react";
import { registerUser, userUpdate, adminUpdate } from "../api";
import Checkbox from "../helpers/checkbox";
import { getAdminInfo } from "../api";

const Admin = () => {
  const capital = sessionStorage.getItem("user");
  const [main, setMain] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  const [username, setUser2] = useState("");
  const [password2, setPassword2] = useState("");
  const [adminname, setUser3] = useState("");

  useEffect(() => {
    getAdminInfo(capital).then((resp) => {
      const info = resp.data.name;
      if (info === true) {
        setMain(true);
      }
    });
  }, []);

  const handleRegis = (e) => {
    e.preventDefault();
    registerUser(user, password, email);
    cancelCourse();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    userUpdate(username, password2);
    cancelCourse();
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    adminUpdate(adminname, checkedOne);
    cancelCourse();
  };
  const cancelCourse = () => {
    setUser("");
    setUser2("");
    setUser3("");
    setPassword("");
    setEmail("");
    setCheckedOne(false);
    setPassword2("");
  };

  const changeUser2 = (e) => {
    setUser2(e.target.value);
  };

  const changeUser3 = (e) => {
    setUser3(e.target.value);
  };

  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  if (main === false) {
    return <div className="pleaselogin">Welcome! </div>;
  } else {
    return (
      <div className="page">
        <h2>Admin Page</h2>
        <form className="create">
          <div>Create User</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={user}
            onChange={changeUser}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Password"
            value={password}
            onChange={changePassword}
          ></input>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Email"
            value={email}
            onChange={changeEmail}
          ></input>
          <button className="submit" onClick={handleRegis}>
            Submit
          </button>
        </form>
        <form className="create">
          <div>Change Password</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={username}
            onChange={changeUser2}
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
        <form className="create">
          <div>Admin Settings</div>
          <input
            className="form-input"
            id="name"
            placeholder="Enter User's Name"
            value={adminname}
            onChange={changeUser3}
          ></input>
          <Checkbox
            name="a"
            label="Set Admin"
            checked={checkedOne}
            onChange={updateOne}
          />
          <button className="submit" onClick={handleAdmin}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};

// return <div>Admin</div>;
// };

export default Admin;
