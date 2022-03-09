import React from 'react';

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

  return (
    <div>
      
    </div>
  )
}
