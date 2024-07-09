"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const SplineModel3 = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/LYY9QwQjdcl0HPMn/scene.splinecode");

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
    <div className="flex h-screen bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="flex-1 flex flex-col justify-center p-10">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 metallic-font">
            The Melting Ice Caps
          </h1>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            The melting of ice caps is a significant indicator of global
            warming, primarily driven by the increased concentrations of
            greenhouse gases in the atmosphere. These gases trap more heat from
            the sun, causing global temperatures to rise, leading to the
            accelerated melting of polar ice.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            As temperatures rise, ice caps begin to melt at a rate faster than
            they can naturally refreeze. This process contributes to rising
            global sea levels, drastically altering natural habitats, and
            impacting biodiversity. Additionally, it influences global weather
            patterns, creating more extreme weather conditions.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            The visual model illustrates the progressive stages of ice cap
            melting, demonstrating the reduction in ice volume over time. By
            observing each stage, viewers can understand the direct impact of
            temperature increases and the urgency of addressing climate change.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            To mitigate these effects, it is crucial to reduce greenhouse gas
            emissions, promote renewable energy sources, and strengthen global
            climate policies. Public awareness, scientific research, and
            community actions are essential in addressing these environmental
            challenges and protecting our planet's future.
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

export default SplineModel3;
