import React from "react";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { App } from "./components";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";

const options = {
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const Root = () => (
  <Brouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Brouter>
);

render(<Root />, document.getElementById("root"));
