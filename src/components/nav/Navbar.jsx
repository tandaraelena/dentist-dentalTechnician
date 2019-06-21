import React, { Component } from "react";
import "./navbar.scss";
// import logo from "/images/Untitled.png";

export default class Navbar extends Component {
  state = {
    navLink: ["New Patient", "Patients List", "Welcome, MAria!"]
  };
  render() {
    return (
      <nav className="navbar">
        <div className="left-column">
          <img src="/images/Untitled.png" alt="logo" className="logo" />
          <button href="/" className="chat-link">
            Chat
          </button>
        </div>
        <ul className="right-column">
          <li>
            {this.state.navLink.map(link => (
              <button href="/" className="nav-link" key={link}>
                {link}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    );
  }
}
