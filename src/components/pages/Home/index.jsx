import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack } from "@mui/material";
import MyWork from "../../common/MyWork";
import Footer from "../../common/Footer";
import HeroSectionPhone from "../../common/phone/HeroSection";
const Home = () => {
  return (
    <Stack
      width="100vw"
      sx={{
        bgcolor: "#111111",
      }}
    >
      <Stack sx={{ display: { xs: "none", md: "flex" } }}>
        <HeroSection />
      </Stack>
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <HeroSectionPhone />
      </Stack>
      <MyWork />
      <Footer />
    </Stack>
  );
};

export default Home;
