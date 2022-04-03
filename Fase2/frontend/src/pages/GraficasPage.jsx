import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Stack, Row, Col } from 'react-bootstrap';
import { getLogs } from '../api/logs';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import { calculatePercentage, filterTop3 } from '../utils/utils';

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
        }, 2000);
        return () => clearInterval(time);
    }, []);

    return (
        <Container fluid className="p-0 overflow-auto" >
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
                <Row className='w-100 d-flex justify-content-center'>
                    <Col xs={11} md={6} lg={5} xl={3} className='p-4'>
                        <h2 className="mb-3">Top 3 juegos</h2>
                        <Container className=' card'>
                            <BarChart data={filterTop3(data)} />
                        </Container>
                    </Col>
                    <Col xs={11} md={6} lg={5} xl={3} className='p-4'>
                        <h2 className="mb-3">Subscribers</h2>
                        <Container className=' card'>
                            <PieChart data={calculatePercentage(data)} />
                        </Container>
                    </Col>

                    <div className="p-5 pt-0 p-xs-0">
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
