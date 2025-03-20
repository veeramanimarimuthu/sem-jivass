import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function FrequencyChart() {

    const data = {
        labels: ["20:00", "Mar 6", "04:00", "08:00", "12:00", "16:00"],
        datasets: [
          {
            label: "Frequency",
            data: [50, 49.9, 51, 48, 50, 50, 50, 47, 51, 48, 50, 50,],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(78, 79, 80)",
            pointRadius: 0,
            borderWidth: 0.4,
            tension: 0,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start",
                labels: {
                  usePointStyle: true,
                  boxWidth: 10,
                },
            },
        },
        scales: {
          x: {
            grid: { display: false }, 
          },
          y: {
            min: 49,
            max: 51,
            ticks: {
              stepSize: 1, 
              callback: (value) => `${value}`, 
            },
            grid: {
              drawTicks: true, 
              drawBorder: false, 
              color: "rgba(0, 0, 0, 0.1)", 
            },
          },
        },
      };
    

  return <Line data={data} options={options} />
}

export default FrequencyChart