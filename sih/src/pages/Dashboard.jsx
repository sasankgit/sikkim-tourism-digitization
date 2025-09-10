// src/pages/Dashboard.jsx
import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Snowfall animation
const snowFall = keyframes`
  0% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

// Cloud animation
const cloudMove = keyframes`
  0% { transform: translateX(-200px); }
  100% { transform: translateX(120vw); }
`;

// Styled background layers
const Background = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: -1,
  background: "linear-gradient(to bottom, #87ceeb, #0a0f2c)", // sky to dark blue
});

const Mountain = styled(Box)({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40vh",
  background: "linear-gradient(to top, #2e2e2e, #3a3a3a)",
  clipPath: "polygon(0 100%, 20% 40%, 40% 80%, 60% 30%, 80% 70%, 100% 40%, 100% 100%)",
});

const Cloud = styled(Box)(({ delay }) => ({
  position: "absolute",
  top: `${20 + delay * 10}px`,
  left: "-200px",
  width: "200px",
  height: "80px",
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "50%",
  animation: `${cloudMove} ${30 + delay * 5}s linear infinite`,
  filter: "blur(2px)",
}));

const Snowflake = styled(Box)(({ delay }) => ({
  position: "absolute",
  top: "-10px",
  left: `${Math.random() * 100}vw`,
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "white",
  opacity: 0.8,
  animation: `${snowFall} ${5 + Math.random() * 5}s linear ${delay}s infinite`,
}));

export default function Dashboard() {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      age: "16th Century (rebuilt in 1960s)",
      details:
        "One of the most important monasteries in Sikkim, Rumtek serves as the seat of the Karmapa. It preserves rare scriptures, artworks, and cultural traditions.",
      importance:
        "Preserving Rumtek ensures the continuation of Tibetan Buddhist practices and cultural heritage.",
    },
    {
      name: "Pemayangtse Monastery",
      age: "1705",
      details:
        "Built by Lama Lhatsun Chempo, it is one of the oldest monasteries in Sikkim and belongs to the Nyingma order of Tibetan Buddhism.",
      importance:
        "It safeguards centuries-old murals, sculptures, and artifacts crucial to Buddhist heritage.",
    },
    {
      name: "Enchey Monastery",
      age: "1909",
      details:
        "Built on a holy site blessed by Lama Drupthob Karpo, this monastery is associated with protective deities and Tantric practices.",
      importance:
        "Preservation maintains its role as a spiritual protector of Gangtok and its surroundings.",
    },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", color: "white" }}>
      {/* Background */}
      <Background>
        <Mountain />
        {[...Array(3)].map((_, i) => (
          <Cloud key={i} delay={i} />
        ))}
        {[...Array(30)].map((_, i) => (
          <Snowflake key={i} delay={i * 0.2} />
        ))}
      </Background>

      {/* Content */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: "bold", textShadow: "0px 0px 10px #000" }}
        >
          Monasteries of Sikkim 🏔️
        </Typography>

        {monasteries.map((monastery, i) => (
          <Card
            key={i}
            sx={{
              mb: 6,
              background: "rgba(15, 26, 61, 0.85)",
              border: "1px solid #00bfff",
              borderRadius: "16px",
              boxShadow: "0px 0px 20px #00bfff55",
              color: "white",
              transition: "all 0.8s ease",
              opacity: 0,
              transform: "translateY(30px)",
              animation: `fadeIn 1s ease forwards`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ color: "#00bfff", mb: 2 }}>
                {monastery.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                📜 Age: {monastery.age}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {monastery.details}
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic", color: "#a0dfff" }}>
                🌏 {monastery.importance}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>

      {/* Fade-in animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}
