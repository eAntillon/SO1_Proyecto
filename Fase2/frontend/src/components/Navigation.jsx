import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md" className="w-100">
                <Container fluid>
                    <Navbar.Brand>Proyecto Fase 2</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="/">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/graficas">
                                <Nav.Link href="/graficas">Gŕaficas y logs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/estadisticas">
                                <Nav.Link href="/estadisticas">Estadísticas Redis y Tidis</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
