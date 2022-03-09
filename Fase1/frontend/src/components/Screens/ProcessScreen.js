import React, { useEffect } from 'react';
//import { io } from "socket.io-client";
import { TableData } from '../models/TableData';

//const socket = io.connect(process.env.REACT_APP_SOCKETS);

export const ProcessScreen = () => {
  /*useEffect(() => {
    socket.on("message", ( object ) => {
      console.log( object );
    });
  });*/

  const proveSocket = () => {
    const data = {
      nombre: "Ana Jeanete Flores Rivera"
    }
    //socket.emit("message", data);
  };

  return (
    <div>
      <div className="box1_process animate__animated animate__bounceInLeft">

      </div>
      <div className="box2_process animate__animated animate__bounceInRight">
        
      </div>
    </div>
  )
}
