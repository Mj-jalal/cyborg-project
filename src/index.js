// import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
// old 
// ReactDOM.render("hello" , document.getElementById("root"))
// new
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)