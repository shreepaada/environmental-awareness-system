"use client";
// pages/MeltingIceCaps.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MeltingIceCaps = () => {
  const textRef = useRef(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
      );
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-blue-100">
      <div className="md:w-1/2 p-5" ref={textRef}>
        <h1 className="text-4xl font-bold mb-4">Melting of Ice Caps</h1>
        <p className="text-lg">
          The melting of ice caps is a clear indicator of global climate change.
          As global temperatures rise, polar ice caps and glaciers melt at an
          accelerated rate, contributing to rising sea levels and extreme
          weather conditions. This phenomenon not only threatens polar habitats
          but also has far-reaching impacts on global ecosystems and human
          communities. Understanding and mitigating the causes of ice cap
          melting is crucial for preserving the environment and maintaining
          ecological balance.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
        {[
          "/image/11.webp",
          "/image/12.webp",
          "/image/13.webp",
          "/image/14.webp",
        ].map((src, index) => (
          <div
            key={index}
            className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${src})` }}
            ref={(el) => (boxRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default MeltingIceCaps;
