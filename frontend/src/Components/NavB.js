import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.jpg";
import { useSelector } from "react-redux";

const NavB = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="nav-bar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <img
              src={logo}
              alt="logo"
              className=" img-fluid float-left logo"></img>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/find-jobs">
                <Nav.Link>Find Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/post-jobs">
                <Nav.Link>Post Jobs</Nav.Link>
              </LinkContainer>
            </Nav>

            <NavDropdown
              title={`${user.firstName} ${user.lastName}`.toUpperCase()}
              id="collasible-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin-panel">
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavB;
