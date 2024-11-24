import React from "react";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["0", "1", "2", "3", "4"],
          datasets: [
            {
              label: "Balance",
              data: ["90", "95", "100", "115"],
              borderColor: "red",
            },
            {
              label: "Equity",
              data: ["90", "80", "140", "1"],
              borderColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
