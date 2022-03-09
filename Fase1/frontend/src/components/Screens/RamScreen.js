import React, { useEffect, useState } from 'react';

import "./RamScreen.css";
import { VirtualMachine1 } from '../models/VirtualMachine1.js';
import { VirtualMachine2 } from '../models/VirtualMachine2.js';
import { Graphic } from '../models/Graphic.js';

export const RamScreen = () => {
  //Arreglos usados para almacenar un total de 60 valores a mostrar en las graficas
  const [vm1, setVm1] = useState([]);
  const [vm2, setVm2] = useState([]);
  
  //Variables a mostrar para saber el estado actual de las memorias ram
  const [actualVm1, setActualVm1] = useState({
    total_ram:0.00,
    ram_usada:0.00,
    porcentaje_uso:0.00,
    ram_libre:0.00
  });
  const [actualVm2, setActualVm2] = useState({
    total_ram:0.00,
    ram_usada:0.00,
    porcentaje_uso:0.00,
    ram_libre:0.00
  });

  //Metodo que se encarga de realizar la petición a la base de datos cada 2 segundos
  useEffect(() => {
    const getData = async () =>{
      let result = await fetch(process.env.REACT_APP_API_RAM, {
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then((response) => {
          return response.json();
      }).catch(() => {
        console.log("Error en solicitud a las vm");
        return "";
      });
      if (result.vm === "vm1") {
        vm1.push(result);
        setVm1(vm1);
        setActualVm1(result);
        if(vm1.length > 30) deleteFirst("vm1");
      } else if(result.vm === "vm2") {
        vm2.push(result);
        setVm2(vm2);
        setActualVm2(result);
        if(vm2.length > 30) deleteFirst("vm2");
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
    if(name === "vm1"){
      vm1.shift();
      setVm1(vm1);
    }else{
      vm2.shift();
      setVm2(vm2);
    }
  };

  return (
    <div>
      <VirtualMachine1 {...actualVm1}/>
      <VirtualMachine2 {...actualVm2}/>
      <Graphic vm1={vm1} vm2={vm2}/>
    </div>
  )
}
