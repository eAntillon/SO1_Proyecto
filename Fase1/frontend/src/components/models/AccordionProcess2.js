import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

export const AccordionProcess2 = (datos) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(datos.m2);
  }, [datos]);

  return (
    <div>
      <Accordion defaultActiveKey="0" className="Accordion_2">
        {
          data.map(item => {
            return (
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <table className="table">
                    <tbody key={item.id}>
                      <td>
                        Proceso: {item.name}
                      </td>
                      <td>
                        PID: {item.id}
                      </td>
                      {
                        item.status === 1 ?
                          <td>
                            Estado: Inactivo
                          </td>
                          :
                          <td>
                            Estado: Activo
                          </td>
                      }
                    </tbody>
                  </table>
                </Accordion.Header>
                {
                  item.children.length > 0 &&
                  <Accordion.Body>
                    <table className="table">
                      {
                        item.children.map(child => {
                          return (
                            <tbody key={child.id}>
                              <td>
                                Proceso: {child.name}
                              </td>
                              <td>
                                PID: {child.id}
                              </td>
                              <td>
                                PID_padre: {item.id}
                              </td>
                              {
                                child.status === 1 ?
                                  <td>
                                    Estado: Inactivo
                                  </td>
                                  :
                                  <td>
                                    Estado: Activo
                                  </td>
                              }
                            </tbody>
                          )
                        })
                      }
                    </table>
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