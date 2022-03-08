import React from 'react';
import { Card } from './Card';
import "../Screens/RamScreen.css";

export const VirtualMachine2 = ( { total_ram, ram_usada, porcentaje_uso, ram_libre } ) => {
  return (
    <div>
      <h6 className='h6_2 animate__animated animate__bounceInDown'>VM2</h6>
      <div className="container2">
        <Card title={"Total de memoria"} value={total_ram.toFixed(2)} />
        <Card title={"Memoria RAM"} value={ram_usada.toFixed(2)} />
        <Card title={"Porcentaje de memoria"} value={porcentaje_uso.toFixed(2)} />
        <Card title={"Memoria RAM libre"} value={ram_libre.toFixed(2)} />
      </div>
    </div>
  )
}
