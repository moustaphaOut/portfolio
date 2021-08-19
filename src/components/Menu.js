import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Provider } from "./Layout";

const Menu = () => {
  return (
    <header>
    <a href="/Portfolio-Website" className="logo">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/assests/images/logo.png"
          width="250"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/educations">Education</Link>
        </li>
        <li>
          <Link to="/works">Work</Link>
        </li>
        <li>
          <Link to="/experiences">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
  
  );
};

export default Menu;
