import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NB() {
  return (
    <Navbar expand="lg" className="NavBarHeader">
      <Container className='NavContainer'>
        <Navbar.Brand href="#home" className='NavBarBrand'>Tienda del Enano Codicioso</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='NavContainerCollapse'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Descuentos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoria 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Algo
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NB;