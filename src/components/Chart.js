import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart(props) {
    const data = {
        labels: props.labels,
        datasets: [{
            label: props.from + '/' + props.to,
            data: props.vals,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            //color: 'rgba(255, 0, 0, 0.6)',
            borderColor: 'rgba(255, 99, 132, 0.6)',
            tension: 0.1,
            pointRadius: 1
          }],
    }

    const options = {
        plugins: {
            legend: {
                align: 'start',
                labels: {
                    color: 'white',
                    usePointStyle: true,
                    boxWidth: 6
                }
            }
        },
        scales: {
            y: {
              grid: {
                color: '#6c757d'
              },
              ticks: {
                  color: 'white'
              }
            },
            x: {
              grid: {
                color: '#6c757d'
              },
              ticks: {
                  color: 'white'
              }
            }
          }
    }

    return (
        <Line data={data} options={options} />
    )
}