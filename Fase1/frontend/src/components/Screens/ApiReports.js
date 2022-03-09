import React from 'react';
//import { io } from "socket.io-client";
//const socket = io.connect(process.env.REACT_APP_SOCKETS);
export const ApiReports = () => {
  const seeProcess = async () => {
    let ruta = `http://${process.env.REACT_APP_API}/getprocesos`;
    let result = await fetch(ruta)
    .then((response) => {
        return response.json();
    }).catch(() => {
      console.log("Error en solicitud a las vm procesos");
      return "";
    });
    console.log(result);
  };
    /*useEffect(() => {
    socket.on("message", ( object ) => {
      console.log( object );
    });
  });*/

      /*console.log(result);
    const data = {
      nombre: "Ana Jeanete Flores Rivera"
    }*/
    //socket.emit("message", data);

  return (
    <div>
      
    </div>
  )
}
