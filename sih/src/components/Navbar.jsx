// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(15, 26, 61, 0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #00bfff",
        boxShadow: "0px 0px 12px #00bfff55",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#00bfff" }}
        >
          Sikkim Explorer
        </Typography>

        <Box>
          <Button
            component={Link}
            to="/dashboard"
            sx={{ color: "#fff", textTransform: "none", "&:hover": { color: "#00bfff" } }}
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            to="/map"
            sx={{ color: "#fff", textTransform: "none", "&:hover": { color: "#00bfff" } }}
          >
            Map
          </Button>
          <Button
            component={Link}
            to="/viewer"
            sx={{ color: "#fff", textTransform: "none", "&:hover": { color: "#00bfff" } }}
          >
            3D Viewer
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
