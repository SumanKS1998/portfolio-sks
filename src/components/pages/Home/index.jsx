import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack } from "@mui/material";
import About from "../../common/About";
import { useScroll } from "framer-motion";
import MyWork from "../../common/MyWork";
const Home = () => {
  return (
    <Stack
      width="100vw"
      sx={{
        overflowX: "hidden !important",
        bgcolor: "#111111",
      }}
    >
      <HeroSection />
      <MyWork />
    </Stack>
  );
};

export default Home;
