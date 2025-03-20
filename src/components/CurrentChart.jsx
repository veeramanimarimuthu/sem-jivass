import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function CurrentChart() {
  const labels = ["20:00", "Mar 9", "04:00", "06:00", "08:00", "12:00"];

  const currentB = [7, 6, 8, 7.5, 6.8, 10, -2, 22];
  const currentY = [9, 9.5, 9.8, 10, 9.2, 10.5, 0.62, 23.6];
  const currentR = [13, 11.5, 13, 13, 12, 14.5, 2.8, 25.6];

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
            stepSize: 5,
        },
        grid: {
          color: "#ddd",
        },
        beginAtZero: true,
        border: {
            display: false, 
        },
      },
    },
  };

  // Function to calculate Min, Max, and Avg
  const calculateStats = (data) => ({
    min: Math.min(...data),
    max: Math.max(...data),
    avg: (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2),
  });

  const statsB = calculateStats(currentB);
  const statsY = calculateStats(currentY);
  const statsR = calculateStats(currentR);

  return (
    <div className="">
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
            <td>{statsB.min} A</td>
            <td>{statsB.max} A</td>
            <td>{statsB.avg} A</td>
          </tr>
          <tr>
            <td>{statsY.min} A</td>
            <td>{statsY.max} A</td>
            <td>{statsY.avg} A</td>
          </tr>
          <tr>
            <td>{statsR.min} A</td>
            <td>{statsR.max} A</td>
            <td>{statsR.avg} A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrentChart;
