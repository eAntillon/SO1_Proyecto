import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const options = {
  type: 'line',
  scales: {
    y: {
      title: {
        color: 'blue',
        display: true,
        text: 'Uso'
      }
    },
    x: {
      title: {
        color: 'blue',
        display: true,
        text: 'Segundos'
      }
    }
  }
}
export const Graphic = ( data ) => {
  const { vm1, vm2 } = data;

  return (
    <div className='container3 animate__animated animate__bounceInRight'>
      <Line
        datasetIdKey='id'
        data={
          {
          labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
          datasets: [
            {
              id: 1,
              label: 'VM1',
              data: vm1.map((dato)=>{
                return dato.Ramusage;
              }),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              id: 2,
              label: 'VM2',
              data: vm2.map((dato)=>{
                return dato.Ramusage;
              }),
              borderColor: 'rgba(0, 255, 0, 0.72)',
              backgroundColor: 'rgba(0, 255, 0, 0.72)',
            },
          ],
          options: options
        }}
      />
    </div>
  )
}