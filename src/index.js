// Import the necessary modules from the 'react' and 'react-dom' libraries.
import React from "react";
import ReactDOM from "react-dom";

// Import the 'BrowserRouter' component from 'react-router-dom'.
// This component is used for client-side routing in your React application.
import { BrowserRouter } from "react-router-dom";

// Import your main application component, which is named 'App'.
// This component represents the root of your application.
import App from "./App";

// Use 'createRoot' from 'react-dom' to create a root for your React application.
// Pass the DOM element with the ID 'root' to 'createRoot'.
// This is where your React application will be rendered.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your React application within the created root.
root.render(
  // Wrap your 'App' component with 'BrowserRouter' to enable client-side routing.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
