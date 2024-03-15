// import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// Using a non-JSX syntax, we can write this in JS:
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));

