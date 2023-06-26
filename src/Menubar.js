import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser, login, logout } from "./store/user";

const Menubar = () => {
  const user = useSelector(loggedUser);
  const dispatch = useDispatch();
  const loginUser = () => {
    // dispatch login action
    dispatch(login())
    console.log("User logged in", user)
  }
  const logoutUser = () => {
    // dispatch logout action
    dispatch(logout())
    console.log('User logged out');
  }

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Redux Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={loginUser}>Login</Nav.Link>
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Menubar;
