import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = () => {
  const data = {
    labels: [
      "Mental Health",
      "Motivation & Inspiration",
      "IQ LEVEL",
      "Self-Awareness",
      "Skillset Enhancement",
    ],
    datasets: [
      {
        data: [25, 15, 20, 20, 20], // Replace with actual data if needed
        backgroundColor: [
          "#2E0D6E", // Mental Health
          "#73D2DE", // Motivation & Inspiration
          "#B6E0FE", // Physical Health
          "#C9A9F0", // Self-Awareness
          "#9A42DB", // Skillset Enhancement
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div
      style={{
        background: 'balck', // Set the background to a radial gradient
      }}
      className="flex justify-center items-center h-screen"
    >
      <div className="w-1/3"> {/* Adjust the width to make the chart smaller */}
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Analysis; 
