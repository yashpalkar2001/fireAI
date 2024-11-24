import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(
  ArcElement,

  Tooltip,
  Legend
);

const DoughnutChart = () => {
  return (
    <Doughnut
      data={{
        //   labels: ["Red", "Yellow", "Blue"],
        display: true,
        datasets: [10, 20, 30],
        circumference: 180,
        rotation: 270,
      }}
    />
  );
};

export default DoughnutChart;
