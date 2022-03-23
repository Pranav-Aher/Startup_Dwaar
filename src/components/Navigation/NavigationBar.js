/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const nav_options = [
    "Founder",
    "Investor",
    "Incubator",
    "Mentor",
    "Job-seeker",
  ];

  return (
    <nav className="nav-bar-container bg-white">
      <Link to={"/"} style={{ textDecorationLine: "none" }}>
        <div>
          <span className="text-xl nav-bar-title fg-primary">Startup</span>
          <span className="text-xl nav-bar-title fg-font-dark">Dwaar</span>
        </div>
      </Link>

      <div className="nav-bar-option-container">
        {nav_options.map((option) => (
          <Link to={`/${option.toLowerCase()}/dashboard`}>
            <a className="nav-bar-option text-lg fg-primary ">{option}</a>
          </Link>
        ))}
      </div>

      <div className="authentication-container">
        <Link to="/login">
          <a className="nav-bar-option text-lg fg-primary">Login</a>
        </Link>
        <Link to={"/signup"}>
          <a className="nav-bar-option text-lg fg-primary">Signup</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
