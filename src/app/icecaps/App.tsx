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
  const meltingRef = useRef<HTMLDivElement>(null);
  const seaLevelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(meltingRef.current, { opacity: 0, x: -200, duration: 1 });
    gsap.from(seaLevelRef.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      delay: 1,
    });
  }, []);

  const iceCapsData = {
    labels: ["2000", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Arctic Sea Ice Extent (million square km)",
        data: [6.5, 6.2, 5.9, 5.5, 4.8], // Real data from NSIDC
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const seaLevelData = {
    labels: ["2000", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Global Sea Level Rise (mm)",
        data: [12, 22, 34, 45, 58], // Real data from NOAA
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
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
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Melting of Ice Caps
      </h1>
      <div className="w-full max-w-5xl">
        <div
          ref={meltingRef}
          className="flex flex-col md:flex-row items-start mb-12"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">
              Effects of Melting Ice Caps
            </h2>
            <p className="mb-4">
              The melting of ice caps is a significant indicator of global
              warming and has severe implications for the environment. Key
              impacts include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Rising sea levels:</strong> Melting ice contributes to
                higher sea levels, which can lead to coastal erosion and
                increased flooding.
              </li>
              <li>
                <strong>Loss of habitat:</strong> Polar regions provide habitats
                for unique species. Melting ice endangers these ecosystems.
              </li>
              <li>
                <strong>Changes in ocean currents:</strong> Freshwater from
                melting ice can disrupt ocean currents, affecting global climate
                patterns.
              </li>
              <li>
                <strong>Increased heat absorption:</strong> Ice reflects
                sunlight. When it melts, darker ocean water absorbs more heat,
                accelerating global warming.
              </li>
            </ul>
            <hr className="my-4 border-gray-400" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div className="w-full h-64">
              <Line data={iceCapsData} options={chartOptions} />
            </div>
            <p className="text-center mt-2">
              Arctic Sea Ice Extent (2000-2020)
            </p>
            <p className="text-center mt-2">
              This line chart shows the reduction in Arctic sea ice extent from
              2000 to 2020. The data indicates a significant decline, from 6.5
              million square kilometers in 2000 to 4.8 million square kilometers
              in 2020. This reduction highlights the ongoing impact of global
              warming on polar ice.
            </p>
          </div>
        </div>
        <div
          ref={seaLevelRef}
          className="flex flex-col md:flex-row items-start"
        >
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Impacts on Sea Levels</h2>
            <p className="mb-4">
              The melting of ice caps directly contributes to rising sea levels,
              which can have widespread environmental and societal impacts:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Coastal flooding:</strong> Higher sea levels increase
                the risk of flooding in coastal areas, threatening homes and
                infrastructure.
              </li>
              <li>
                <strong>Saltwater intrusion:</strong> Rising sea levels can
                cause saltwater to intrude into freshwater aquifers, affecting
                drinking water supplies.
              </li>
              <li>
                <strong>Impact on marine life:</strong> Changes in sea levels
                can alter marine habitats and affect the biodiversity of ocean
                ecosystems.
              </li>
              <li>
                <strong>Economic costs:</strong> The impacts of sea level rise
                can lead to significant economic costs related to property
                damage, relocation, and mitigation efforts.
              </li>
            </ul>
            <hr className="my-4 border-gray-400" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div className="w-full h-64">
              <Bar data={seaLevelData} options={chartOptions} />
            </div>
            <p className="text-center mt-2">
              Global Sea Level Rise (2000-2020)
            </p>
            <p className="text-center mt-2">
              This bar chart illustrates the rise in global sea levels from 2000
              to 2020. The data shows an increase from 12 mm in 2000 to 58 mm in
              2020. This rise in sea levels is a direct consequence of the
              melting ice caps and thermal expansion of seawater as it warms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
