import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
function PowerChart() {

    const labels = ["20:00", "Mar 9", "04:00", "06:00", "08:00", "12:00"];

    const currentB = [2, 6, 8, 7.5, 6.8, 8, 4, 6];
    const currentY = [2, 8, 6, 4, 7.8, 8, -2, 4];
    const currentR = [4, 6, 8, 4.5, 4.8, 8, 4, 6];
  
    const data = {
      labels,
      datasets: [
        {
          label: "Power Factor (B Phase)",
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
          label: "Power Factor (Y Phase)",
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
          label: "Power Factor (R Phase)",
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
            drawBorder: false, // Removes X-axis line
            display: false, // Hides X-axis grid lines
          },
          ticks: {
            display: true, // Keeps X-axis labels visible
          },
        },
        y: {
          ticks: {
              stepSize: 2,
          },
          grid: {
            color: "#ddd",
            drawBorder: false, 
          },
          // beginAtZero: true,
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
    <div>
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
  )
}

export default PowerChart