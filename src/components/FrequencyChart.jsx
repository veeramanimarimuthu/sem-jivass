import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function FrequencyChart() {

  const labels = ["20:00", "Mar 6", "04:00", "08:00", "12:00", "16:00"];

  const frequency = [50, 49.9, 51, 48, 50, 50, 50, 47, 51, 48, 50, 50,];

    const data = {
        labels,
        datasets: [
          {
            label: "Frequency",
            data: frequency,
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
            grid: { 
              display: false,
              drawBorder: false 
            }, 
            ticks: {
              drawTicks: true, 
            },
          },
          y: {
            min: 49,
            max: 51,
            ticks: {
              stepSize: 1, 
              drawTicks: true, 
            },
            grid: {
              drawBorder: false, 
              color: "rgba(0, 0, 0, 0.1)", 
            },
          },
        },
      };

      const calculateStats = (data) => ({
        min: Math.min(...data),
        max: Math.max(...data),
        avg: (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2),
      });
    
      const statsB = calculateStats(frequency);   

  return (
    <>
      <Line data={data} options={options} />
      <table className="table w-50 table-borderless mb-0">
          <thead>
              <tr>
                  <th>Min</th>
                  <th>Max</th>
                  <th>Avg</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{statsB.min} A</td>
                  <td>{statsB.max} A</td>
                  <td>{statsB.avg} A</td>
              </tr>
          </tbody>
        </table>
    </>
  )
}

export default FrequencyChart