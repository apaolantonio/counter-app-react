import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const divRoot = document.querySelector("#app");

// ReactDOM.render(<PrimeraApp saludo="Hola My freind" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
