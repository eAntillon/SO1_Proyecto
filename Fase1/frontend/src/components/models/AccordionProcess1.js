import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

export const AccordionProcess1 = (datos) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(datos.m1);
  }, [datos]);

  return (
    <div>
      <Accordion defaultActiveKey="0" className="Accordion_1">
        {
          data.map(item => {
            return (
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <table className="table">
                    <tbody>
                      <td>
                        Proceso: {item.name}
                      </td>
                      <td>
                        PID: {item.id}
                      </td>
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
                            <tbody>
                              <td>
                                Proceso: {child.name}
                              </td>
                              <td>
                                PID: {child.id}
                              </td>
                              <td>
                                PID_padre: {item.id}
                              </td>
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