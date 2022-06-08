import React from "react";
import styled from "styled-components";
import Scroller from "../components/Scoreller";
import { Container, Navbar, Nav } from "react-bootstrap";
import details from "../data/details.json";

const Logo = styled.span({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "Rubik, sans-serif",
  fontWeight: 700,
  lineHeight: "36px",
});

const Dot = styled.span({
  color: "#ff4c60",
  display: "inline",
});

const Header = () => {
  return (
    <header className="kd-header fixed-top">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <Logo>
              {details.firstName}
              <Dot>{details.middleName}</Dot>
              {details.lastName}
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="ml-auto" style={{ marginLeft: "auto" }} as="ul">
              <Nav.Item as="li">
                <Scroller href="#home" className="nav-link">
                  Home
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#about" className="nav-link">
                  About
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#education" className="nav-link">
                  Education &amp; Experience
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#recommendations" className="nav-link">
                  Recommendations
                </Scroller>
              </Nav.Item>
              <Nav.Item as="li">
                <Scroller href="#contact" className="nav-link">
                  Contact
                </Scroller>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
