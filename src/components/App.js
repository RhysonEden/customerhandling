import React, { useState, useEffect } from "react";
import Login from "./Login"
import { getSomething } from "../api";
import Card from "./Card";
import Header from "./Header";
import IdleTimerContainer from "./IdleTimerContainer";

const App = () => {
  const [clients, setClient] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let admin = sessionStorage.getItem("user");

  useEffect(() => {
    getSomething()
      .then((response) => {
        console.log(response.clients);
        setClient(response.clients);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);


// if (!admin) {
//   return (
//     <>
//     <Login />
//     <IdleTimerContainer />
//     </>
//   )
// } else {
  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Card
        clients={clients}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <IdleTimerContainer />
    </>
  );
// }
};

export default App;
