import React from "react";
import HeroSection from "../../common/HeroSection";
import MyWork from "../../common/MyWork";
import { Stack } from "@mui/material";
const Home = () => {
  return (
    <Stack px={2} bgcolor="#000">
      <HeroSection />
      <MyWork />
    </Stack>
  );
};

export default Home;
