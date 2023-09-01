import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary bg-white pt-3"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pr-5 ">
            <Nav.Link className=" nav-li">Home</Nav.Link>
            <Nav.Link className=" nav-li">About</Nav.Link>
            <Nav.Link className=" nav-li">Schedules</Nav.Link>
            <Nav.Link className=" nav-li">Membership</Nav.Link>
            <Nav.Link className=" nav-li">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-li">Offers</Nav.Link>
            <button className="button">Courses</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
