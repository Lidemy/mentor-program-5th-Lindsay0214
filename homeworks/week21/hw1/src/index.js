import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  { id: "todo-0", name: "完成 todo list", completed: true },
  { id: "todo-1", name: "完成 final project", completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

reportWebVitals();
