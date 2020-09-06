import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
            <NavDropdown title="Experience" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work">Work</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/research">Research</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/personal">Personal Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industry">Industry Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:toekneechin777@gmail.com">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
