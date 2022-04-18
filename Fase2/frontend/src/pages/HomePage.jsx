import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import '../index.css'

const HomePage = () => {
  return (
    <Container className='p-5 bg-svg' fluid>
      <Row className='justify-content-center'>
        <Col xs={12} md={5}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Carné</th>
              </tr>
            </thead>
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
        </Col>
      </Row>

    </Container >
  )
}

export default HomePage