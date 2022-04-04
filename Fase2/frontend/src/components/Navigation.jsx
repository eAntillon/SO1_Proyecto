import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="md" className="w-100 p-2">
                <Container fluid>
                    <Navbar.Brand>Proyecto Fase 2</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link href="/" className='p-2 me-1'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/graficas">
                                <Nav.Link href="/graficas" className='p-2 me-1'>Gŕaficas y logs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/estadisticas">
                                <Nav.Link href="/estadisticas" className='p-2 me-1'>Estadísticas</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
