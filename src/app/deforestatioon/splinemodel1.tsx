"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const SplineModel1 = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/oPIO-NFAZXkGXonk/scene.splinecode");

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
            Understanding Deforestation
          </h1>
          <p className="text-xl mb-4 metallic-font">
            Deforestation is the large-scale removal of forest cover, primarily
            driven by agricultural expansion, urban development, and logging
            activities. This process transforms forested areas into non-forest
            land uses such as farms, ranches, or urban spaces, leading to
            profound environmental impacts.
          </p>
          <p className="text-xl mb-4 metallic-font">
            The consequences of deforestation are far-reaching and severe,
            impacting biodiversity, climate stability, and the water cycle. It
            results in the loss of habitat for millions of species, many of
            which are driven to extinction. Additionally, deforestation is a
            significant contributor to global warming due to the release of
            stored carbon dioxide.
          </p>
          <p className="text-xl mb-4 metallic-font">
            Combating deforestation requires a multi-faceted approach including
            the enforcement of legal regulations, the promotion of sustainable
            land use practices, and vigorous reforestation efforts. Raising
            public awareness and fostering community action are also essential
            to preserve our forests and the invaluable benefits they provide.
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

export default SplineModel1;
