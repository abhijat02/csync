import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import AnimatedHeading from "./AnimatedHeading";
import "../App.css";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    // Container for the entire Navbar
    <Stack
      direction="row"
      alignItems="center" // Center the items vertically
      justifyContent="space-between" // Space between the logo and links
      sx={{
        gap: "20px", // Reduce the gap between links
        mt: { sm: "16px", xs: "10px" }, // Decreased margin-top values
        px: "10px",
        width: "100%", // Ensure full-width
      }}
    >
      {/* Link to the home page */}
      <Link to="/">
        {/* Logo image */}
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "80px",
            height: "70px",
            margin: "10px 0px", // Add margin to the top and bottom
          }}
        />
      </Link>
      {/* Stack for navigation links */}
      <Stack
        direction="row"
        gap="20px"
        fontSize="20px"
        alignItems="flex-end"
        sx={{
          marginRight: "30px", // Add right margin to the links
        }}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          style={{
            textDecoration: "none", // Correct the typo
            color: "#3A1212",
            borderBottom: "3px solid #4483aa",
          }}
        >
          {/* Animated heading component for "HOME" */}
          <AnimatedHeading text="HOME" />
        </Link>
        {/* Regular anchor links */}
        <a href="#Clubs" className="link-class">
          CLUBS
        </a>
        <a href="#Contact" className="link-class">
          CONTACT
        </a>
        <a href="#About" className="link-class">
          ABOUT
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
