import React, { useState } from "react";
import {
  FooterHeadingText,
  FooterMarqueeText,
  FooterText,
  HeadingText,
} from "../../styles/fonts";
import { ParallaxText } from "../ParallaxText";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button, Stack } from "@mui/material";
import { socialLinks } from "../../../constants";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  const [copied, setCopied] = useState(false);
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
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(`sinhasumank41@gmail.com`);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <footer>
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
                  border: `3px solid gray`,
                  p: 2,
                  width: "150px",
                  borderRadius: "100vmax",
                  color: "#808080",
                }}
                mt={2}
                alignItems="center"
                justifyContent={"center"}
                component={motion.div}
                whileHover={{ borderColor: "#9fe870", color: "#9fe870" }}
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
        <Stack alignItems="center" mt={{ xs: 5, xl: `128px` }}>
          <FooterHeadingText
            variant="h5"
            textAlign={"center"}
            sx={{ width: { md: "50%", xl: "30%", xs: "350px" }, color: "gray" }}
          >
            Got a question, project or want to work together on something? Feel
            free to reach out.
          </FooterHeadingText>
          <Stack
            direction="row"
            borderRadius={6}
            bgcolor="#000000"
            mt={{ xs: 4, xl: 5 }}
            p={"16px"}
            gap="16px"
            position="relative"
            zIndex={2}
          >
            <Stack p={1} px={3} borderRadius={5} sx={{ bgcolor: "#3232345e" }}>
              <FooterText
                variant="h3"
                textAlign={"center"}
                sx={{ color: "#9fe870" }}
              >
                sinhasumank41@gmail.com
              </FooterText>
            </Stack>
            <Stack
              p={1}
              borderRadius={5}
              sx={{ bgcolor: "#3232345e", cursor: "pointer" }}
              onClick={copyEmail}
            >
              <AnimatePresence>
                {copied ? (
                  <FooterText variant="h3"> ✅</FooterText>
                ) : (
                  <FooterText variant="h3">📋</FooterText>
                )}
              </AnimatePresence>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            position: "absolute",
            whiteSpace: `nowrap`,
            bottom: 0,
          }}
          component={motion.div}
        >
          <FooterMarqueeText
            component={motion.div}
            sx={{ fontSize: "26vw", color: "#3233344f", lineHeight: "70%" }}
            variants={marqueeVariants}
            animate="animate"
          >
            {new Array(100).fill(0).map((item) => `Let's talk.`)}
          </FooterMarqueeText>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
