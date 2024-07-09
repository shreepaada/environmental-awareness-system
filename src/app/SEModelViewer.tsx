"use client";
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/DEFOSEC.glb') as any;
  
  // Adjust the scale of the model. Increase the numbers for a bigger model.
  scene.scale.set(10, 10, 10); // Adjust this scale to suit the size you need
  
  return <primitive object={scene} />;
};

const SEModelViewer = () => {
  // Ref for orbit controls to adjust the initial camera position
  const orbitRef = useRef();

  return (
    <Canvas style={{ width: '100%', height: '100vh' }}> // Ensure the canvas takes up more viewport space
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls ref={orbitRef} autoRotate initialPosition={[0, 5, 10]} /> // Adjust initialPosition as needed for a better view
    </Canvas>
  );
};

export default SEModelViewer;

