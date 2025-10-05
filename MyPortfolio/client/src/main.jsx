// Importing necessary libraries
import React from "react";  // React library to build components
import ReactDOM from "react-dom/client";  // ReactDOM to render components to the DOM
import App from "./App";  // Importing the main App component that contains the app's structure
import "./index.css";  // Importing global CSS styles for the app

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
