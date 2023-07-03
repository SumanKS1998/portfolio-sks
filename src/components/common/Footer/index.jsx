import React from "react";
import { FooterMarqueeText, FooterText, HeadingText } from "../../styles/fonts";
import { ParallaxText } from "../ParallaxText";
import { motion } from "framer-motion";
import { Button, Stack } from "@mui/material";
import { socialLinks } from "../../../constants";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  const marqueeVariants = {
    animate: {
      x: [`0%`, "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 3000,
          ease: "linear",
        },
      },
    },
  };

  return (
    <Stack height="100vh" overflow="hidden" position="relative" zIndex={999}>
      <Stack direction="row" justifyContent={`center`} gap="48px">
        {socialLinks.map((link, i) => (
          <Link
            target="_blank"
            to={link.socialLink}
            key={i}
            style={{ textDecoration: "none" }}
          >
            <Stack
              sx={{
                border: `3px solid #323334`,
                p: 2,
                width: "150px",
                borderRadius: "100vmax",
                color: "#323334",
              }}
              mt={2}
              alignItems="center"
              justifyContent={"center"}
              component={motion.div}
              whileHover={{ borderColor: "#ccfc00", color: "#ccfc00" }}
            >
              <HeadingText
                variant="h5"
                component={motion.div}
                sx={{ color: "inherit", lineHeight: "90%" }}
                variants={marqueeVariants}
                animate="animate"
                textAlign="center"
              >
                {link.socialPlatform}
              </HeadingText>
            </Stack>
          </Link>
        ))}
      </Stack>
      <Stack alignItems="center" mt={`128px`}>
        <FooterText
          variant="h3"
          textAlign={"center"}
          sx={{ width: { md: "50%", xs: "350px" } }}
        >
          Got a question, project or want to work together on something? Feel
          free to reach out.
        </FooterText>
      </Stack>

      <Stack
        sx={{
          position: "absolute",
          whiteSpace: `nowrap`,
          bottom: 0,
        }}
      >
        <FooterMarqueeText
          component={motion.div}
          sx={{ fontSize: "27vw", color: "#323334", lineHeight: "90%" }}
          variants={marqueeVariants}
          animate="animate"
        >
          {new Array(100).fill(0).map((item) => `Let's talk.`)}
        </FooterMarqueeText>
      </Stack>
    </Stack>
  );
};

export default Footer;
