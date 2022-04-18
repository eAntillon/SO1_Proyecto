import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import * as V from 'victory';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GraficasPage from './pages/GraficasPage';
import Navigation from './components/Navigation';
import Estadisticas from './pages/Estadisticas';
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Container fluid className="p-0 min-vh-100 bg-light">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/graficas" element={<GraficasPage />} />
                    <Route path="/estadisticas" element={<Estadisticas />} />
                </Routes>
            </Container>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
