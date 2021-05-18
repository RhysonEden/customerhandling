import React, { useState, useEffect } from "react";
import Login from "./Login";
import { getSomething } from "../api";
import Card from "./Card";
import Header from "./Header";
import IdleTimerContainer from "./IdleTimerContainer";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import Admin from "./Admin";
import Password from "./PasswordChange";

const App = () => {
  const [clients, setClient] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let user = sessionStorage.getItem("user");
  let change = sessionStorage.getItem("change");
  useEffect(() => {
    getSomething()
      .then((response) => {
        setClient(response.clients);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // if (change === "1") {
  //   console.log("change needed");
  //   return (
  //     <>
  //       <Password />
  //     </>
  //   );
  // } else
  if (!user) {
    return (
      <Brouter>
        <div>
          <Switch>
            <Login />
            <IdleTimerContainer />
          </Switch>
        </div>
      </Brouter>
    );
  } else {
    return (
      <Brouter>
        <div>
          <Header searchInput={searchInput} setSearchInput={setSearchInput} />
          <Switch>
            <Card
              path="/"
              exact
              component={Card}
              clients={clients}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
            <Admin path="/admin" exact component={Admin} />
          </Switch>
          <IdleTimerContainer />
        </div>
      </Brouter>
    );
  }
};

export default App;
