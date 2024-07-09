"use client";
// pages/Deforestation.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Deforestation = () => {
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-green-100">
      <div className="md:w-1/2 p-5" ref={textRef}>
        <h1 className="text-4xl font-bold mb-4">Deforestation</h1>
        <p className="text-lg">
          Deforestation is the permanent removal of trees to make room for
          something besides forest. This can include clearing the land for
          agriculture or grazing, or using the timber for fuel, construction or
          manufacturing. Forests cover more than 30% of the Earths land surface,
          according to the World Wildlife Fund. Not only do trees provide
          oxygen, but they also absorb carbon dioxide (CO2) and other harmful
          greenhouse gases that contribute to global warming. By destroying the
          forests, we are affecting the entire ecosystem and contributing to
          climate change.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
        {[
          "/image/1.webp",
          "/image/2.webp",
          "/image/3.webp",
          "/image/istockphoto-1937685303-170667a.webp",
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

export default Deforestation;
