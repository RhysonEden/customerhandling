import React, { useState, useEffect } from "react";

import { getSomething } from "../api";
import Card from "./Card";
import Header from "./Header";

const App = () => {
  const [clients, setClient] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Card
        clients={clients}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </>
  );
};

export default App;
