import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const Menu = () => {
  return (
    <header>
    <a href="/Portfolio-Website" className="logo">
    <i class="far fa-smile"></i> You Look Amazing
    </a>
    <div id="menu" className="fas fa-bars" />
    <nav className="navbar">
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  </header>
  
  );
};

export default Menu;
