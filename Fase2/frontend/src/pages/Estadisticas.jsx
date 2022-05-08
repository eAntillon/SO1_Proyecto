import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { Form, Container, Row, Col, Table } from 'react-bootstrap';
import { filterTop10, getPlayers, filterPlayer } from '../utils/utils';
import '../styles/Estadisticas.css';

const Estadisticas = () => {
    const [response, setResponse] = useState();
    const [selectedPlayer, setSelectedPlayer] = useState(0);

    useEffect(() => {
        const socket = io('https://node-s-uilxvk2k3a-uw.a.run.app');
        socket.on('connect', () => console.log(socket.id));
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 5000);
        });
        socket.on('sendlogs', (data) => {
            setResponse(data);
        });
        console.log(response)
        // creanup
        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className="p-5">
            <h1 className="mb-4">Estadisticas</h1>
            <Container fluid className="p-0 mb-5">
                <h3 className="m-0 mb-3 text-white bg-success p-3 rounded">
                    Últimos 10 juegos
                </h3>
                <Row>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Redis</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>game_id</th>
                                    <th>game_name</th>
                                    <th>players</th>
                                    <th>queue</th>
                                    <th>winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataRedis &&
                                    response.dataRedis
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.game_id}</td>
                                                <td>{item.game_name}</td>
                                                <td>{item.players}</td>
                                                <td>{item.queue}</td>
                                                <td>{item.winner}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Tidb</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>game_id</th>
                                    <th>game_name</th>
                                    <th>players</th>
                                    <th>queue</th>
                                    <th>winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataTidb &&
                                    response.dataTidb
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.game_id}</td>
                                                <td>{item.game_name}</td>
                                                <td>{item.players}</td>
                                                <td>{item.queue}</td>
                                                <td>{item.winner}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0 mb-5">
                <h3 className="m-0 mb-3 text-white bg-success p-3 rounded">
                    10 mejores jugadores
                </h3>
                <Row>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Redis</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>player_id</th>
                                    <th>wins</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataRedis &&
                                    filterTop10(response.dataRedis)
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.player}</td>
                                                <td>{item.count}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Tidb</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>player_id</th>
                                    <th>wins</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataTidb &&
                                    filterTop10(response.dataTidb)
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.player}</td>
                                                <td>{item.count}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <h3 className="m-0 mb-2 text-white bg-success p-3 rounded">
                    Estadísticas del jugador en tiempo real
                </h3>
                <Form.Group className="mb-3 w-25">
                    <Form.Label>Player ID</Form.Label>
                    <Form.Select
                        id="disabledSelect"
                        onChange={(e) => setSelectedPlayer(e.target.value)}
                    >
                        <option value={0}>Seleccionar</option>
                        {response &&
                            response.dataRedis &&
                            getPlayers(response.dataRedis).map(
                                (item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                )
                            )}
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Redis</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>game_id</th>
                                    <th>game_name</th>
                                    <th>players</th>
                                    <th>queue</th>
                                    <th>winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataRedis &&
                                    filterPlayer(
                                        response.dataRedis,
                                        selectedPlayer
                                    )
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.game_id}</td>
                                                <td>{item.game_name}</td>
                                                <td>{item.players}</td>
                                                <td>{item.queue}</td>
                                                <td>{item.winner}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={12} md={6} className="table-data">
                        <h5>Tidb</h5>
                        <hr className="mt-0" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>game_id</th>
                                    <th>game_name</th>
                                    <th>players</th>
                                    <th>queue</th>
                                    <th>winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {response &&
                                    response.dataTidb &&
                                    filterPlayer(
                                        response.dataTidb,
                                        selectedPlayer
                                    )
                                        .slice(-10)
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.game_id}</td>
                                                <td>{item.game_name}</td>
                                                <td>{item.players}</td>
                                                <td>{item.queue}</td>
                                                <td>{item.winner}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Estadisticas;
