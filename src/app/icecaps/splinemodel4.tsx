"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const SplineModel4 = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize the Spline application and load the specific model showing the melted state of glaciers.
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/TRUyBtkN7VebCmcf/scene.splinecode");

    // Add GSAP animations to text elements.
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
            Aftermath of Glacier Melting
          </h1>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            This model visualizes the landscape after glaciers have melted. The
            melting of glaciers leaves behind dramatically altered terrains,
            often devoid of the large ice formations that once dominated the
            area.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            As glaciers melt, they can form new bodies of water known as
            proglacial lakes. These lakes, created by the accumulation of
            meltwater, pose risks such as flooding and other natural disasters,
            which can have devastating effects on nearby human settlements and
            ecosystems.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            The newly exposed land and water bodies significantly alter local
            ecosystems, leading to the loss of habitat for species adapted to
            cold environments. Additionally, the thawing permafrost releases
            stored carbon, further contributing to climate change.
          </p>
          <p className="text-xl mb-4 text-gray-700 metallic-font">
            Understanding these impacts is essential for developing strategies
            to mitigate the adverse effects of glacier retreat. Effective
            measures include climate change mitigation, conservation efforts,
            and sustainable land management practices to protect both the
            environment and human communities.
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

export default SplineModel4;
