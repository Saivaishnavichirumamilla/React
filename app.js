import React from "react";
import ReactDOM from "react-dom/client";

console.log("Hello React");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "I am Sai!!!")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
