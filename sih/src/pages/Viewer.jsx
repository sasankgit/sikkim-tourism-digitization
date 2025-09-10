// src/pages/Viewer.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Viewer() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0f29, #1c2841)",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* 3D Scene */}
      <Box sx={{ height: "60vh" }}>
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
          {/* Background Stars */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />

          {/* Orbit Controls */}
          <OrbitControls enableZoom={true} />

          {/* Example 3D Object (Glowing Sphere) */}
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial emissive={"#00bfff"} emissiveIntensity={0.6} />
          </mesh>

          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
        </Canvas>
      </Box>

      {/* Text Section (same animation style as Dashboard) */}
      <Container sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#00bfff" }}>
            3D Viewer of Himalayan Artifacts
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            This 3D viewer allows us to explore virtual models of cultural and natural heritage.
            Using interactive navigation, you can rotate, zoom, and observe intricate details of 
            artifacts and structures that are deeply connected with the Himalayan region.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ marginTop: "2rem" }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "#ffddcc" }}>
            Why Preserve in Digital Form?
          </Typography>
          <Typography variant="body1">
            3D visualization helps in preserving cultural memory while allowing immersive
            experiences for education and tourism. It ensures that even if time erodes the
            physical monuments, their essence can live forever in digital space.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
