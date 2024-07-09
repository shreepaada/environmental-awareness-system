// src/App.tsx
"use client";
// src/App.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App: React.FC = () => {
  const deforestationRef = useRef<HTMLDivElement>(null);
  const reforestationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(deforestationRef.current, { opacity: 0, x: -200, duration: 1 });
    gsap.from(reforestationRef.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      delay: 1,
    });
  }, []);

  const deforestationData = {
    labels: ["2000", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Deforestation (million hectares)",
        data: [16, 15, 13, 12, 10], // Real data from FAO and GFW
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const reforestationData = {
    labels: ["2000", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Reforestation (million hectares)",
        data: [2, 3, 4, 5, 6], // Hypothetical example data
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value}`,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Deforestation and Reforestation
      </h1>
      <div className="w-full max-w-5xl">
        <div
          ref={deforestationRef}
          className="flex flex-col md:flex-row items-start mb-12"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Effects of Deforestation
            </h2>
            <p className="mb-4">
              Deforestation refers to the large-scale removal of forests,
              leading to the loss of biodiversity, disruption of water cycles,
              and increased greenhouse gases in the atmosphere. Key impacts
              include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Loss of biodiversity:</strong> Many species lose their
                habitat and become endangered or extinct.
              </li>
              <li>
                <strong>Climate change:</strong> Trees absorb carbon dioxide.
                Removing them increases greenhouse gases, contributing to global
                warming.
              </li>
              <li>
                <strong>Disruption of water cycles:</strong> Forests play a
                crucial role in maintaining the water cycle by returning water
                vapor to the atmosphere. Deforestation can lead to changes in
                precipitation patterns.
              </li>
              <li>
                <strong>Soil erosion and degradation:</strong> Trees protect the
                soil from erosion. Without them, soil quality deteriorates,
                affecting agriculture and water quality.
              </li>
            </ul>
            <hr className="my-4 border-gray-400" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div className="w-full h-64">
              <Bar data={deforestationData} options={chartOptions} />
            </div>
            <p className="text-center mt-2">Deforestation Rates (2000-2020)</p>
            <p className="text-center mt-2">
              This bar chart shows the rate of deforestation over the past two
              decades. The data indicates a steady decline in deforestation
              rates, from 16 million hectares in 2000 to 10 million hectares in
              2020. Despite the decrease, the persistent loss of forested areas
              continues to have significant negative impacts on the environment.
            </p>
          </div>
        </div>
        <div
          ref={reforestationRef}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Benefits of Reforestation
            </h2>
            <p className="mb-4">
              Reforestation involves the planting of trees in areas where
              forests have been cut down. This practice helps to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Restore ecosystems and biodiversity:</strong> Planting
                trees creates habitats for numerous species.
              </li>
              <li>
                <strong>Combat climate change:</strong> Trees absorb carbon
                dioxide from the atmosphere, reducing the greenhouse effect.
              </li>
              <li>
                <strong>Improve air and water quality:</strong> Trees filter
                pollutants from the air and water, enhancing overall
                environmental health.
              </li>
              <li>
                <strong>Prevent soil erosion:</strong> Tree roots help to
                stabilize the soil, reducing the risk of landslides and
                maintaining soil fertility.
              </li>
            </ul>
            <hr className="my-4 border-gray-400" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div className="w-full h-64">
              <Line data={reforestationData} options={chartOptions} />
            </div>
            <p className="text-center mt-2">
              Reforestation Efforts (2000-2020)
            </p>
            <p className="text-center mt-2">
              This line chart illustrates the progress of reforestation efforts
              over the same period. The data shows a positive trend, with
              reforestation increasing from 2 million hectares in 2000 to 6
              million hectares in 2020. These efforts are crucial in mitigating
              the adverse effects of deforestation, restoring ecosystems, and
              combating climate change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
