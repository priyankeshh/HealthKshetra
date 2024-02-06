import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart() {
  useEffect(() => {
    const chartData = {
      labels: ["BSES", "Solar Energy"],
      datasets: [{
        data: [51, 49],
        backgroundColor: [
          "#ff0000", // Red color for electricity by government
          "#86DC3D", // White color for electricity by solar plant
          "#dee2e6"
        ],
        borderColor: "transparent"
      }]
    };

    const chartOptions = {
      maintainAspectRatio: false,
      cutoutPercentage: 65,
    };

    const doughnutChart = new Chart(document.getElementById("chartjs-doughnut"), {
      type: "doughnut",
      data: chartData,
      options: chartOptions
    });

    return () => {
      // Cleanup function to destroy the chart when the component unmounts
      doughnutChart.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div>
      <canvas id="chartjs-doughnut"></canvas>
    </div>
  );
}

export default DoughnutChart;
