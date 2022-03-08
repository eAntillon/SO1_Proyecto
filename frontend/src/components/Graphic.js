import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const Graphic = ( data ) => {
  const { vm1, vm2 } = data;

  return (
    <div className='container3'>
      <Line
        datasetIdKey='id'
        data={{
          labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
          datasets: [
            {
              id: 1,
              label: 'VM1',
              data: vm1.map((dato)=>{
                return dato.porcentaje_uso;
              }),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              id: 2,
              label: 'VM2',
              data: vm2.map((dato)=>{
                return dato.porcentaje_uso;
              }),
              borderColor: 'rgba(0, 255, 0, 0.72)',
              backgroundColor: 'rgba(0, 255, 0, 0.72)',
            },
          ],
          options: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  stepSize: 10,
                  min: 0,
                  max: 100
                }
              }]
            }
          }
        }}
      />
    </div>
  )
}