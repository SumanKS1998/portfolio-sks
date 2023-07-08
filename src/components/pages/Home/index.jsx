import React from "react";
import HeroSection from "../../common/HeroSection";
import { Stack, useMediaQuery } from "@mui/material";
import MyWork from "../../common/MyWork";
import Footer from "../../common/Footer";
import HeroSectionPhone from "../../common/phone/HeroSection";
import MyWorkPhone from "../../common/phone/MyWork";
import { ScrollerMotion } from "scroller-motion";
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
        <ScrollerMotion>
          <HeroSectionPhone />
          <MyWorkPhone /> <Footer />
        </ScrollerMotion>
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
    </Stack>
  );
};

export default Home;
