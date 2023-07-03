import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack } from "@mui/material";
import MyWork from "../../common/MyWork";
import Footer from "../../common/Footer";
const Home = () => {
  return (
    <Stack
      width="100vw"
      sx={{
        bgcolor: "#111111",
      }}
    >
      <HeroSection />
      <MyWork />
      <Footer />
    </Stack>
  );
};

export default Home;
