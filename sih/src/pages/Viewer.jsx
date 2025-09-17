import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

export default function Viewer() {
  return (
    <div style={{ height: 'calc(100vh - 80px)', marginTop: '80px' }}>
      <Canvas camera={{ position: [2, 2, 4], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <React.Suspense fallback={null}>
        <Model url="/modelsnew/sih monastry1.glb" />
      </React.Suspense>
      <OrbitControls />
      </Canvas>
    </div>
  );
}
