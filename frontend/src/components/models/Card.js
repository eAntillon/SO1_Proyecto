import React from 'react';
import "../Screens/RamScreen.css";

export const Card = ( { title, value } ) => {
  return (
    <div className="card animate__animated animate__fadeIn">
    <h3 className="title">{title}</h3>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="circle">
      <h3 className="h3_class">{value}</h3>
    </div>
  </div>
  )
}
