// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LandscapeIcon from "@mui/icons-material/Landscape";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Map", path: "/map" },
    { label: "3D Viewer", path: "/viewer" },
  ];

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // decide navbar state
  const isWhite = hover || scrolled;

  return (
    <AppBar
      position="fixed"
      elevation={isWhite ? 6 : 0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        background: isWhite
          ? "rgba(255, 255, 255, 0.75)" // semi-transparent
          : "transparent",
        backdropFilter: isWhite ? "blur(12px)" : "none", // blur effect
        WebkitBackdropFilter: isWhite ? "blur(12px)" : "none", // Safari support
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        color: isWhite ? "black" : "white",
      }}
    >
      <Toolbar>
        {/* Logo + Title */}
        <LandscapeIcon
          sx={{ mr: 1, color: isWhite ? "black" : "#00eaff" }}
        />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: isWhite ? "black" : "#00eaff",
            transition: "color 0.3s ease",
          }}
        >
          Sikkim Explorer
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  position: "relative",
                  color: isActive
                    ? "#00eaff"
                    : isWhite
                    ? "black"
                    : "white",
                  fontWeight: isActive ? "bold" : "500",
                  textTransform: "none",
                  mx: 1.5,
                  px: 2,
                  borderRadius: "20px",
                  "&:hover": {
                    background: "rgba(0,0,0,0.05)",
                    color: "#00eaff",
                    boxShadow: isWhite ? "0 0 10px #00eaff55" : "none",
                  },
                  // underline animation
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: isActive ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: "#00eaff",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {link.label}
              </Button>
            );
          })}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            color: isWhite ? "black" : "white",
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              color: "black",
            },
          }}
        >
          <List sx={{ width: 260 }}>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.path}
                component={Link}
                to={link.path}
                onClick={toggleDrawer}
                sx={{
                  "&:hover": {
                    color: "#00eaff",
                    background: "rgba(0,234,255,0.1)",
                  },
                  color: location.pathname === link.path ? "#00eaff" : "black",
                }}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
