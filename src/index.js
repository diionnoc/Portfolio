// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "static/styles/reset.css";
import "static/styles/index.scss";

// -------------------------------- RENDER -------------------------------- //

const root = document.getElementById("root");
const app = ReactDOM.createRoot(root);
app.render(<App />);
