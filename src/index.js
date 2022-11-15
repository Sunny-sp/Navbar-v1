import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Valorant from './Valorant';
// import Login from './Login';
// import Employee from "./Employee";
// import App from "./App";
// import App from "./nb/Navbar/App";
import { Navbar } from "./Navbar/Navbar";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <Navbar/>
     // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
