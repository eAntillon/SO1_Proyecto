import React from 'react';
import { Card } from './Card';
import "../Screens/RamScreen.css";

export const VirtualMachine1 = ( { Totalram, Ramusage, Rampercent, Freeram } ) => {
  return (
    <div>
      <h6 className="h6_1 animate__animated animate__bounceInDown">VM1</h6>
      <div className="container1">
        <Card title={"Total de memoria"} value={Totalram.toFixed(2) } />
        <Card title={"Memoria RAM"} value={Ramusage.toFixed(2) } />
        <Card title={"Porcentaje de memoria"} value={Rampercent.toFixed(2) } />
        <Card title={"Memoria RAM libre"} value={Freeram.toFixed(2) } />
      </div>
    </div>
  )
}
