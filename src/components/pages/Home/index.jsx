import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import HeroSection from "../../common/HeroSection";
import MyWork from "../../common/MyWork";
import Footer from "../../common/Footer";
import HeroSectionPhone from "../../common/phone/HeroSection";
import MyWorkPhone from "../../common/phone/MyWork";
import TechStack from "../../common/phone/TechStack";
import FooterPhone from "../../common/phone/Footer";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)", { noSsr: true });

  return (
    <Stack
      width="100vw"
      sx={{
        bgcolor: "#111111",
      }}
    >
      {isDesktop ? (
        <>
          <HeroSection />
          <MyWork />
          <Footer />
        </>
      ) : (
        <>
          <HeroSectionPhone />
          <MyWorkPhone />
          <TechStack />
          <FooterPhone />
        </>
      )}
    </Stack>
  );
};

export default Home;
