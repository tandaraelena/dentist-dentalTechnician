import React, { Component } from "react";
import "./navbar.scss";
// import logo from "/images/Untitled.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left-side-navbar">
          <img src="/images/Untitled.png" alt="logo" className="logo" />
          <a href="/" className="nav-link">
            Chat
          </a>
        </div>
        <ul className="right-side-navbar">
          <li>
            <a href="/" className="nav-link">
              New Patient
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Patients List
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Welcome, (userName)!
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
