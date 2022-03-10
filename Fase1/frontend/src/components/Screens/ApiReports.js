import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

import { io } from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_SOCKETS);

export const ApiReports = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.emit("getlogs");
  }, []);

  socket.on("sendlogs", (object) => {
    setData(object);
  });

  return (
    <div>
      <Accordion defaultActiveKey="0" className="Accordion_1">
        {
          data.map((item, index) => {
            return (
              <Accordion.Item eventKey={index + 1}>
                <Accordion.Header>
                  <table className="table">
                    <tbody>
                      <td>
                        Maquina: {item.nombreVM}
                      </td>
                      <td>
                        Endpoint: {item.endpoint}
                      </td>
                      <td>
                        Fecha: {item.date}
                      </td>
                    </tbody>
                  </table>
                </Accordion.Header>
                {
                  <Accordion.Body>
                    {
                      item.endpoint === "/getram" ?
                        <table className="table">
                          <tbody>
                            <td>
                              Ram: {item.data.totalram}
                            </td>
                            <td>
                              Porcentaje: {item.data.rampercent}
                            </td>
                            <td>
                              En uso: {item.data.ramusage}
                            </td>
                            <td>
                              Libre: {item.data.freeram}
                            </td>
                          </tbody>
                        </table>
                        :
                        <table className="table">
                          {
                            item.data.slice(0, 10).map(child => {
                              return (
                                <tbody>
                                  <td>
                                    Id proceso: {child.process_id}
                                  </td>
                                  <td>
                                    Nombre proceso: {child.process_name}
                                  </td>
                                  <td>
                                    PID_padre: {child.parent_id}
                                  </td>
                                </tbody>
                              )
                            })
                          }
                        </table>
                    }
                  </Accordion.Body>
                }
              </Accordion.Item>
            )
          })
        }
      </Accordion>
    </div>
  )
}

/*

*/
