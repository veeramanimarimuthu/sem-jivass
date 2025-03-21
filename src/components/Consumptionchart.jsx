import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Consumptionchart() {

    const data = {
        labels: ["20:00", "Mar 6", "04:00", "06:00", "08:00", "12:00", "16:00"],
        datasets: [
            {
              label: "Kwh",
              data: [8, 7, 4, 6, 7, 5, 6.5, 5, 6, 3, 4, 6, 4, 5, 6, 5, 4, 5, 6, 3, 4,],
              backgroundColor: "rgba(106, 13, 173, 0.8)", 
            },
            {
              label: "",
              data: [5, 6, 3, 4, 6, 4, 5],
              backgroundColor: "rgba(106, 13, 173, 0.8)", 
            },
            {
              label: "",
              data: [6, 5, 4, 5, 6, 3, 4],
              backgroundColor: "rgba(106, 13, 173, 0.8)",
            },
            {
              label: "",
              data: [7, 6, 5, 7, 8, 6, 7],
              backgroundColor: "rgba(106, 13, 173, 0.8)", 
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
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: false, 
            },
          },
          y: {
            grid: {
              color: "#ddd", 
            },
            ticks: {
                stepSize: 2, 
              },
            beginAtZero: true,
          },
        },
        // barPercentage: 1.0, 
        categoryPercentage: 1.0,
      };

  return (
      <Bar data={data} options={options} />
  )
}

export default Consumptionchart