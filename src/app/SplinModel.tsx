"use client";
import Head from 'next/head';
import { useEffect } from 'react';

const SplineModel = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.1.9/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Spline Model Viewer</title>
      </Head>
      <div>
        <spline-viewer url="https://prod.spline.design/MVEu9GJjV3H3nTR6/scene.splinecode"></spline-viewer>
        <spline-viewer url="https://prod.spline.design/mbgj0nnqk4v8ViXn/scene.splinecode"></spline-viewer>
      </div>
      <style jsx>{`
        spline-viewer {
          width: 100vw;
          height: 50vh; // Adjusted to fit two models on the screen
        }
      `}</style>
    </>
  );
};

export default SplineModel;
