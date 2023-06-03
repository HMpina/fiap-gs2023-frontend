import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

const Header: React.FC = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >
                <img src={logo} alt="Logo com um formato do contorno de um ramo com folhas e o texto FIAPlantação" /> {/* Substitua o texto "Dicas" pela imagem da logo */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} className="nav-Item" to="/" >Início</Nav.Link>
                <Nav.Link as={Link} className="nav-Item" to="/dicas" >Dicas</Nav.Link>
                <Nav.Link as={Link} className="nav-Item" to="/sobre" >Sobre</Nav.Link>
                <Nav.Link as={Link} className="nav-Item" to="/links" >Links</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;
