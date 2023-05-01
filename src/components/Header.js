import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "../styles/header.scss";

const Header = () => {
  return (
    <Navbar className="navBarCont" fixed="top" expand="lg">
      <Navbar.Brand
        href="https://www.roundforest.com/"
        target="_blank"
        rel="noreferrer"
      >
        Roundforest Take Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="menuLinks">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/funnyGif">
            <Nav.Link>Funny gif</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
