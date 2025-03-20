import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function VoltageChart() {

    const labels = ["20:00", "Mar 9", "04:00", "06:00", "08:00", "12:00"];

    const voltageB = [170, 180, 190, 185, 188, 183.39];
    const voltageY = [200, 205, 208, 207, 210, 230.8];
    const voltageR = [220, 225, 230, 235, 228, 240.03];

    const data = {
        labels,
        datasets: [
          {
            label: "Voltage (B Phase)",
            data: voltageB, 
            borderColor: "blue",
            backgroundColor: "blue",
            borderWidth: 1,
            tension: 0, 
            pointRadius: 0, 
            pointHoverRadius: 0,
          },
          {
            label: "Voltage (Y Phase)",
            data: voltageY, 
            borderColor: "yellow",
            backgroundColor: "yellow",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0, 
            pointHoverRadius: 0,
          },
          {
            label: "Voltage (R Phase)",
            data: voltageR, 
            borderColor: "red",
            backgroundColor: "red",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0, 
            pointHoverRadius: 0,
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
          },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            ticks: {
              stepSize: 20,
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)", 
            },
            border: {
                display: false, 
            },
          },
        },
      };

      const calculateStats = (data) => ({
        min: Math.min(...data),
        max: Math.max(...data),
        avg: (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2),
      });
    
      const statsB = calculateStats(voltageB);
      const statsY = calculateStats(voltageY);
      const statsR = calculateStats(voltageR);

  return (
    <div>
        <Line data={data} options={options} />
        <table class="table w-50 table-borderless">
        <thead>
          <tr>
            <th>Min</th>
            <th>Max</th>
            <th>Avg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{statsB.min} V</td>
            <td>{statsB.max} V</td>
            <td>{statsB.avg} V</td>
          </tr>
          <tr>
            <td>{statsY.min} V</td>
            <td>{statsY.max} V</td>
            <td>{statsY.avg} V</td>
          </tr>
          <tr>
            <td>{statsR.min} V</td>
            <td>{statsR.max} V</td>
            <td>{statsR.avg} V</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VoltageChart