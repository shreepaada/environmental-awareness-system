"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";
import { gsap } from "gsap";

function Heero() {
  const localImageUrl = "/image/icecaaaps.webp"; // Simpler filename for the background image
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, y: -50, duration: 1 });
    gsap.from(textRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.5 });
  }, []);

  return (
    <figure className="relative h-full w-full">
      <div className="bg-green-200 h-full w-full">
        {" "}
        {/* Set the page background color */}
        <div className="flex h-screen justify-center items-center flex-col">
          <div
            ref={containerRef}
            className="w-4/5 h-4/5 bg-cover bg-center border-4 border-gray-300 shadow-lg rounded-lg overflow-hidden" // Container box styles
            style={{ backgroundImage: `url(${localImageUrl})` }}
          >
            {" "}
            {/* Set the background image */}
            <div className="w-full h-full px-5 flex justify-center items-center backdrop-brightness-50">
              <div ref={textRef} className="col-span-1 mx-auto max-w-lg px-15">
                <Link href="/icecaps">
                  <Typography
                    variant="h1"
                    className="mb-4 font-graduate text-envy-green pt-5 lg:pt-0 text-center lg:text-left !text-white hover:underline focus:underline cursor-pointer"
                  >
                    Learn about melting of ice caps
                  </Typography>
                </Link>
                <Link href="/icecaps">
                  <Typography
                    variant="paragraph"
                    className="mb-5 text-justify font-caveat text-3xl !text-white hover:underline focus:underline cursor-pointer"
                  >
                    Issues in nature
                  </Typography>
                </Link>
                <div className="w-full border-t-2 border-black mt-5"></div>{" "}
                {/* Added black line */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
export default Heero;
