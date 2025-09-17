import React, { useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

// Place your GLB file inside public/models/sih-monastry2-sketchfab.glb
// Required npm packages: three @react-three/fiber @react-three/drei

function CameraAnimator({ targetPosition, targetLookAt, active }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!active) return;

    if (targetPosition) {
      camera.position.lerp(targetPosition, 0.08);
    }
    if (targetLookAt) {
      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);
      const lookAtPoint = camera.position.clone().add(direction.multiplyScalar(10));
      lookAtPoint.lerp(targetLookAt, 0.12);
      camera.lookAt(lookAtPoint);
    }
    camera.updateProjectionMatrix();
  });

  return null;
}

function Hotspot({ id, position, title, description, onClick, active }) {
  return (
    <Html position={position} center>
      <div
        onClick={!active ? onClick : undefined}
        style={{
          background: active ? "#fff176" : "#f0f0f0",
          border: "2px solid #333",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: active ? "default" : "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          fontSize: "16px",
          minWidth: "150px",
          position: "relative",
          color: "black",
          fontWeight: "500"
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: active ? "6px" : "0" }}>
          {id}. {title}
        </div>
        {active && (
          <p style={{ margin: "6px 0", lineHeight: "1.4em" }}>{description}</p>
        )}
      </div>
    </Html>
  );
}

function MonastryModel({ onHotspotClick, activeHotspot }) {
  const { scene } = useGLTF("/model/sih monastry2 sketchfab.glb");

  return (
    <group>
      <primitive object={scene} scale={[1, 1, 1]} />
      <Hotspot
        id={1}
        position={[2, 250, 2]}
        title="Roof"
        description="Golden roof structure details"
        onClick={() =>
          onHotspotClick({
            id: "roof",
            position: new THREE.Vector3(5, 280, 2),
            lookAt: new THREE.Vector3(0, 20, 0)
          })
        }
        active={activeHotspot?.id === "roof"}
      />
      <Hotspot
        id={2}
        position={[1, 20, 110]}
        title="Entrance"
        description="Main entrance of the monastery"
        onClick={() =>
          onHotspotClick({
            id: "entrance",
            position: new THREE.Vector3(-5, 100, 260),
            lookAt: new THREE.Vector3(0, 20, 0)
          })
        }
        active={activeHotspot?.id === "entrance"}
      />
    </group>
  );
}

export default function InteractiveViewer() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Global Exit Button */}
      {activeHotspot && (
        <button
          onClick={() => setActiveHotspot(null)}
          style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            zIndex: 10,
            padding: "8px 14px",
            background: "#d32f2f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 3px 6px rgba(0,0,0,0.3)"
          }}
        >
          Exit
        </button>
      )}

      <Canvas camera={{ position: [10, 5, 15], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableDamping={true} enabled={true} />

        <MonastryModel
          onHotspotClick={setActiveHotspot}
          activeHotspot={activeHotspot}
        />

        {activeHotspot && (
          <CameraAnimator
            targetPosition={activeHotspot.position}
            targetLookAt={activeHotspot.lookAt}
            active={true}
          />
        )}
      </Canvas>
    </div>
  );
}
