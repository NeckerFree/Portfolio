import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.png';

function OffcanvasNav() {
  return (
    <Navbar className="pt-2 text-red border rounded-3 fs-5" key="sm" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand href="#"><img className="logoElio" src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'sm'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Elio Cortés
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasNav;
