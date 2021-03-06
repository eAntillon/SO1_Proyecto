import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { AccordionProcess1 } from '../models/AccordionProcess1';
import { AccordionProcess2 } from '../models/AccordionProcess2';

export const ProcessScreen = () => {
  //Variables que almacenan todos los procesos registrados por maquina
  const [Maquina1, setMaquina1] = useState([]);
  const [Maquina2, setMaquina2] = useState([]);

  //Metodo que se ejecuta para obtener la información de las maquinas
  const getData = async () => {
    let ruta = `${process.env.REACT_APP_API}/getprocesos`;
    let result = await fetch(ruta)
      .then((response) => {
        return response.json();
      }).catch(() => {
        console.log("Error en solicitud a las vm procesos");
        return "";
      });
    await restructureData(result);
  };

  //Metodo para reordenar la informacion a conveniencia
  const restructureData = async ( res ) => {
    const { data } = res;
    let finalData = {};
    for(const process of data){
      const newData = {
        id: process.process_id,
        name: process.process_name,
        status: process.state,
        children: []
      }
      if(process.hasOwnProperty("parent_id")){
        let arrProc = finalData[process.parent_id].children;
        arrProc.push(newData);
      }else{
        finalData[newData["id"]] = newData;
      }
    }
    //Utilizamos sweet alert para mostrar que se ha obtenido la informacion de una maquina
    if (res.nombreVM === "Maquina1") {
      setMaquina1(Object.values(finalData));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Procesos cargados: VM1',
        showConfirmButton: false,
        timer: 2000
      });
    } else if (res.nombreVM === "Maquina2") {
      setMaquina2(Object.values(finalData));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Procesos cargados: VM2',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  return (
    <div>
      <button onClick={getData} className="btn btn-success button-74 animate__animated animate__fadeInTopLeft">
        Cargar procesos
      </button>
      <div className="box1_process animate__animated animate__bounceInLeft">
        <h6 className="h6_3 animate__animated animate__bounceInDown">Maquina 1</h6>
        <AccordionProcess1 m1={Maquina1} />
      </div>
      <div className="box2_process animate__animated animate__bounceInRight">
        <h6 className='h6_4 animate__animated animate__bounceInDown'>Maquina 2</h6>
        <AccordionProcess2 m2={Maquina2} />
      </div>
    </div>
  )
}
