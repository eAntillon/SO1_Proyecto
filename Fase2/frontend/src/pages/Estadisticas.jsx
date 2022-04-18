import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import socketIOClient from 'socket.io-client';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const Estadisticas = () => {
    const [response, setResponse] = useState();

    useEffect(() => {
        const socket = socketIOClient(
            'https://proyecto1-343723.uc.r.appspot.com'
        );
        socket.on('sendlogs', (data) => {
            console.log(data);
            setResponse(data);
        });
    }, []);

    return (
        <div className="p-5">
            <h1>Estadisticas</h1>
            <Card className="mb-5">
                <Card.Header className="fw-bold text-white bg-success">
                    <h5 className="m-0 text-white">Últimos 10 juegos</h5>
                </Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col sm={12} md={6}>
                                <h5>Redis</h5>
                                <hr className="mt-0" />
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm={12} md={6}>
                                <h5>Tidb</h5>
                                <hr className="mt-0" />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header className="fw-bold text-white bg-success">
                    10 mejores jugadores
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header className="fw-bold text-white bg-success">
                    Estadísticas del jugador en tiempo real
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Estadisticas;
