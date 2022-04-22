import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Row, Col } from 'react-bootstrap';
import { getLogs } from '../api/logs';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import { calculatePercentage, filterTop3 } from '../utils/utils';
import '../styles/Graficas.css';

const GraficasPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const time = setInterval(() => {
            getLogs()
                .then((res) => {
                    setData(res);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 1000);
        return () => clearInterval(time);
    }, []);

    return (
        <Container fluid className="p-0 overflow-auto">
            {isLoading ? (
                <Container
                    fluid
                    className="p-5 d-flex justify-content-center align-items-center"
                >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                <Row className="w-100 d-flex justify-content-around p-5">
                    <Col xs={11} md={6} lg={6} xl={4} xxl={3} className="mb-sm-3">
                        <h2 className="mb-3">Top 3 juegos</h2>
                        <Container className="p-0 card">
                            <BarChart data={filterTop3(data)} />
                        </Container>
                    </Col>
                    <Col xs={11} md={6} lg={6} xl={4} xxl={3} className="mb-sm-3">
                    <h2 className="mb-3 text-light">_</h2>
                        <Container className="p-4 card mt-3">
                            <h2 className="mb-3 ">Total de juegos: </h2>
                            <h1 className='text-success'>{data.length}</h1>
                        </Container>
                    </Col>
                    <Col xs={11} md={6} lg={6} xl={4} xxl={3} className="mt-sm-3">
                        <h2 className="mb-3">Subscribers</h2>
                        <Container className="p-0 card">
                            <PieChart data={calculatePercentage(data)} />
                        </Container>
                    </Col>

                    <div className="mt-4 pt-0 p-xs-0 table-data">
                        <h2 className="mb-3">Logs</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th>#</th>
                                    <th>Game id</th>
                                    <th>Game name</th>
                                    <th>Players</th>
                                    <th>Winner</th>
                                    <th>Queue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.game_id}</td>
                                        <td>{item.game_name}</td>
                                        <td>{item.players}</td>
                                        <td>{item.winner}</td>
                                        <td>{item.queue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Row>
            )}
        </Container>
    );
};

export default GraficasPage;
