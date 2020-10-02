import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiSteak } from "react-icons/gi";

export default () => {
  const menu = [
    {
      title: "Home",
      link: "",
      icon: "",
    },
    {
      title: "About",
      link: "about",
      icon: "",
    },
    {
      title: "Products",
      link: "product",
      icon: "",
    },
    {
      title: "Services",
      link: "service",
      icon: "",
    },
    {
      title: "Contacts",
      link: "contact",
      icon: "",
    },
  ];

  return (
    <Header>
      <Container>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            <Logo>
              <GiSteak />
              <span>Steakeria</span>
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {menu.map((item, i) => (
                <Link to={item.link} key={i}>
                  <Nav.Link as="div">{item.title}</Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Header>
  );
};

const Header = styled.div`
  background-color: #111;
  font-family: "Ubuntu Condensed", sans-serif;
  .nav-link:hover {
    color: brown !important;
  }
  .navbar-nav a:hover {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  color: brown;
  font-family: "Cinzel", serif;
  svg {
    font-size: 30px;
  }
  span {
    color: #eee;
  }
`;
