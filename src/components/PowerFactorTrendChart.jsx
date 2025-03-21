import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function PowerFactorTrendChart() {

  const labels = ["20:00", "Mar 9", "04:00", "06:00", "08:00", "12:00"];

  const currentB = [1.2, 0, 1, 1.21, 1.22, 1.23, 0.59, 0.88, 0.70, 1];
  const currentY = [1.4, 0, 1, 1.41, 1.32, 1.46, 0.70, 0.80, 0.60, 1];
  const currentR = [1.3, 0, 1, 1.31, 1.42, 1.53, 0.74, 0.85, 0.64, 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Current (B Phase)",
        data: currentB,
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        borderWidth: 1,
        tension: 0, 
        pointRadius: 0, 
        pointHoverRadius: 0,
      },
      {
        label: "Current (Y Phase)",
        data: currentY,
        borderColor: "yellow",
        backgroundColor: "yellow",
        fill: false,
        borderWidth: 1,
        tension: 0, 
        pointRadius: 0, 
        pointHoverRadius: 0,
      },
      {
        label: "Current (R Phase)",
        data: currentR,
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
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
        ticks: {
            stepSize: 1,
        },
        grid: {
          color: "#ddd",
        },
        beginAtZero: true,
        border: {
            display: true, 
        },
      },
    },
  };

  const calculateStats = (data) => ({
    min: Math.min(...data),
    max: Math.max(...data),
    avg: (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2),
  });

  const statsB = calculateStats(currentB);
  const statsY = calculateStats(currentY);
  const statsR = calculateStats(currentR);

  return (
    <>
        <Line data={data} options={options} />
       
        <table className="table w-50 table-borderless text-end mb-0">
        <thead>
            <tr>
                <th>Min</th>
                <th>Max</th>
                <th>Avg</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{statsB.min}</td>
                <td>{statsB.max}</td>
                <td>{statsB.avg}</td>
            </tr>
            <tr>
                <td>{statsY.min}</td>
                <td>{statsY.max}</td>
                <td>{statsY.avg}</td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default PowerFactorTrendChart