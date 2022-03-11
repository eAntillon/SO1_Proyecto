import React, { useEffect, useState } from 'react';

import "./RamScreen.css";
import { VirtualMachine1 } from '../models/VirtualMachine1.js';
import { VirtualMachine2 } from '../models/VirtualMachine2.js';
import { Graphic } from '../models/Graphic.js';

export const RamScreen = () => {
  //Arreglos usados para almacenar un total de 60 valores a mostrar en las graficas
  const [Maquina1, setMaquina1] = useState([]);
  const [Maquina2, setMaquina2] = useState([]);
  
  //Variables a mostrar para saber el estado actual de las memorias ram
  const [actualM1, setActualM1] = useState({
    Totalram:0.00,
    Ramusage:0.00,
    Rampercent:0.00,
    Freeram:0.00
  });
  const [actualM2, setActualM2] = useState({
    Totalram:0.00,
    Ramusage:0.00,
    Rampercent:0.00,
    Freeram:0.00
  });

  //Metodo que se encarga de realizar la petición a la base de datos cada 2 segundos
  useEffect(() => {
    const getData = async () =>{
      let ruta = `${process.env.REACT_APP_API}/getram`;
      let result = await fetch(ruta)
      .then((response) => {
          return response.json();
      }).catch(() => {
        console.log("Error en solicitud a las vm ram");
        return "";
      });
      if (result.Vm === "Maquina1") {
        Maquina1.push(result);
        setMaquina1(Maquina1);
        setActualM1(result);
        if(Maquina1.length > 30) deleteFirst("Maquina1");
      } else if(result.Vm === "Maquina2") {
        Maquina2.push(result);
        setMaquina2(Maquina2);
        setActualM2(result);
        if(Maquina2.length > 30) deleteFirst("Maquina2");
      }
    }
    getData();
    const interval = setInterval(() => getData(), 2000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  //Metodo para eliminar el valor más antiguo de los arreglos, esto para evitar que se sobrecargue la memoria
  const deleteFirst = ( name ) => {
    if(name === "Maquina1"){
      Maquina1.shift();
      setMaquina1(Maquina1);
    }else{
      Maquina2.shift();
      setMaquina2(Maquina2);
    }
  };

  return (
    <div>
      <VirtualMachine1 {...actualM1}/>
      <VirtualMachine2 {...actualM2}/>
      <h2 className="h2_class">Gráfica: Uso de memoria RAM</h2>
      <Graphic vm1={Maquina1} vm2={Maquina2}/>
    </div>
  )
}
