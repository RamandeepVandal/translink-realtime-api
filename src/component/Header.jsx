import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/stop-estimate");
  const handleClickHome = () => navigate("/");

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" onClick={handleClickHome}>BusFind</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleClickHome}>Home</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#stop" onClick={handleClick}>Stop Estimates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
