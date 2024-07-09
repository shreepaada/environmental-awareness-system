"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const SplineModel2 = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/qyPkZ8sUaXH76M0D/scene.splinecode");

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <div className="flex-1 flex flex-col justify-center p-10">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 metallic-font">
            Understanding Reforestation
          </h1>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            Reforestation involves the replanting of trees in areas that have
            been deforested or degraded. This critical process plays a vital
            role in restoring ecological balance and enhancing biodiversity.
            Reforestation efforts help in regenerating the flora and fauna of an
            area, creating habitats for wildlife, and maintaining natural
            ecosystems.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            Beyond ecological restoration, reforestation has significant
            environmental benefits. Trees absorb carbon dioxide (CO2) from the
            atmosphere, helping to mitigate climate change. Forests also improve
            air and water quality, reduce soil erosion, and provide numerous
            ecosystem services.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            Effective reforestation requires careful planning and sustainable
            management to ensure that new forests are ecologically compatible
            and resilient. This includes selecting appropriate tree species,
            ensuring genetic diversity, and managing forests to withstand pests,
            diseases, and climate variability. Engaging local communities and
            stakeholders in reforestation efforts is also crucial for long-term
            success and sustainability.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full max-w-3xl bg-white shadow-lg rounded-lg"
          id="canvas3d"
        ></canvas>
      </div>
      <style jsx>{`
        .metallic-font {
          font-family: "Metal Mania", cursive;
          background: linear-gradient(to right, #434343, #000000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default SplineModel2;
