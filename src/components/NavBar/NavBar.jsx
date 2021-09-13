import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={`/`}>
                    <Navbar.Brand href="#home">Marrazo Cake</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <Link to={`/productos/pasteleria`}>
                                <NavDropdown.Item href="#action/3.1">Tortas</NavDropdown.Item>
                            </Link>
                            <Link to={`/productos/panaderia`}>
                                <NavDropdown.Item href="#action/3.2">Panaderia</NavDropdown.Item>
                            </Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Promos</NavDropdown.Item>
                        
                        </NavDropdown>
                    </Nav>
                    <Link to={`/cart`}>
                        <CartWidget />
                    </Link>
                    
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        
    )
}

export default NavBar
