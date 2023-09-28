// Import the necessary modules from the 'react' and 'react-router-dom' libraries.
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import components and styles needed for your application.
import { Box } from "@mui/material"; // Material-UI component
import "./App.css"; // Custom CSS
import Home from "./pages/Home.js"; // Home component
import Navbar from "./components/Navbar.js"; // Navbar component
import Footer from "./components/Footer.js"; // Footer component

// Define the main application component, named 'App'.
const App = () => {
  return (
    // Use 'Box' from Material-UI for layout and styling.
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      {/* Include the 'Navbar' component for navigation. */}
      <Navbar />

      {/* Use 'Routes' from 'react-router-dom' to manage routing within the app. */}
      <Routes>
        {/* Define a route for the root URL ('/') that renders the 'Home' component. */}
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Include the 'Footer' component at the bottom of the page. */}
      <Footer />
    </Box>
  );
};

// Export the 'App' component to make it available for use in other parts of your application.
export default App;
