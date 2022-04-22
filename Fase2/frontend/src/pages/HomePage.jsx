import React from 'react';
import { Col, Container, Row, Table, Card } from 'react-bootstrap';
import '../index.css';

const HomePage = () => {
    return (
        <Container fluid className="bg-primary " style={{ height: '100%' }}>
            <Row className="d-flex justify-content-center align-items-center p-5">
                <Col xs={12} md={5}>
                    <h1 className="text-white mb-3">Proyecto - Fase 2</h1>
                    <Card className="border-0">
                        <Card.Header as="h5" className='bg-warning'>Integrantes</Card.Header>
                        <Table
                            striped
                            bordered
                            hover
                            className="bg-white rounded m-0 "
                        >
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>JOSUÉ DAVID ZEA HERRERA</td>
                                    <td>201807159</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>EVELYN ALEJANDRA NAVARRO OZORIO</td>
                                    <td>201902046</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>ERICK DANIEL ANTILLÓN CHINCHILLA</td>
                                    <td>201906552</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                
            </Row>
            
        </Container>
    );
};

export default HomePage;
