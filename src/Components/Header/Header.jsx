import { Navbar, Nav, NavItem, NavLink, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-1">
          Resurant
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavItem>
              <NavLink as={Link} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink as={Link} to="/Items">
                Items
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink as={Link} to="/Famous_item">
                famous Dish
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/Service">
                Services
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="align-items-center">
            <NavItem>
              <NavLink as={Link} to="/login">
                <span className="fs-5">SignIn</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/signup">
                <span className="fs-5">SignUp</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/cart" className="fs-3 ">
                <FaShoppingCart />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
