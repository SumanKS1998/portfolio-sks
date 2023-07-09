import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack, useMediaQuery } from "@mui/material";
import MyWork from "../../common/MyWork";
import Footer from "../../common/Footer";
import HeroSectionPhone from "../../common/phone/HeroSection";
import MyWorkPhone from "../../common/phone/MyWork";
import TechStack from "../../common/phone/TechStack";
import FooterPhone from "../../common/phone/Footer";
const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const renderDesktopContent = () => {
    return (
      <>
        <HeroSection />
        <MyWork /> <Footer />
      </>
    );
  };

  const renderPhoneContent = () => {
    return (
      <>
        <HeroSectionPhone />

        <MyWorkPhone />
      </>
    );
  };

  return (
    <Stack
      width="100vw"
      sx={{
        bgcolor: "#111111",
      }}
    >
      {isDesktop ? renderDesktopContent() : renderPhoneContent()}
      {!isDesktop && (
        <Stack sx={{ position: "relative", height: "200vh" }}>
          <Stack sx={{ position: "sticky", top: 0 }}>
            <TechStack />
          </Stack>
          <FooterPhone />
        </Stack>
      )}
    </Stack>
  );
};

export default Home;
