import React from 'react';
import { Card } from './Card';
import "../Screens/RamScreen.css";

export const VirtualMachine2 = ( { Totalram, Ramusage, Rampercent, Freeram } ) => {
  return (
    <div>
      <h6 className='h6_2 animate__animated animate__bounceInDown'>VM2</h6>
      <div className="container2">
        <Card title={"Total de memoria"} value={Totalram.toFixed(2)} />
        <Card title={"Memoria en uso"} value={Ramusage.toFixed(2)} />
        <Card title={"Porcentaje de memoria"} value={Rampercent.toFixed(2)} />
        <Card title={"Memoria RAM libre"} value={Freeram.toFixed(2)} />
      </div>
    </div>
  )
}
