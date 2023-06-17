import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack } from "@mui/material";
import About from "../../common/About";
import { useScroll } from "framer-motion";
const Home = () => {
  return (
    <Stack width="100vw" sx={{ overflowX: "hidden !important" }}>
      <HeroSection />
    </Stack>
  );
};

export default Home;
