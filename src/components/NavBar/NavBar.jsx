import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        
        <Navbar bg="light" expand="lg" className="mb-3" sticky="top">
            <Container >

                <Link to={`/`}>
                    <Navbar.Brand href="#home">Marrazo Cake</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div className="text-end">
                    <Link to="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                    </div>
                    <div className="text-end">
                        <Nav.Link href="#link">Nosotros</Nav.Link>                        
                    </div>
                    <div className="text-end">
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <Link to={`/productos/pasteleria`}>
                                    <NavDropdown.Item href="#action/3.1" className="text-end">Tortas</NavDropdown.Item>
                                </Link>
                                <Link to={`/productos/panaderia`}>
                                    <NavDropdown.Item href="#action/3.2" className="text-end">Panaderia</NavDropdown.Item>
                                </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className="text-end">Promos</NavDropdown.Item>
                            
                            </NavDropdown>                        
                    </div>
                    <div className="align-self-end col-2">
                        <Link to={`/cart`}>
                            <CartWidget />
                        </Link>                        
                    </div>


                </Nav>
                    
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        
    )
}

export default NavBar
