import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  FooterHeadingText,
  FooterMarqueeText,
  FooterText,
  HeadingText,
  SemiboldText,
} from "../../../styles/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { socialLinks } from "../../../../constants";
import { Link } from "react-router-dom";
import { constants } from "../../../../constants/index";
const animationVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    filter: blur,
    transition: {
      duration: 0.5,
      ...constants[`transitions`],
    },
  },
};
const FooterPhone = () => {
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
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const renderHeading = () => {
    return (
      <FooterHeadingText
        component={motion.div}
        initial={animationVariant.initial}
        whileInView={animationVariant.animate}
        variant="h4"
        textAlign={"left"}
        sx={{ color: "gray" }}
      >
        Got a question, project or want to work together on something? Feel free
        to reach out.
      </FooterHeadingText>
    );
  };
  const renderEmail = () => {
    return (
      <Stack gap="8px">
        <Stack
          borderRadius={4}
          bgcolor="#000000"
          p={"8px"}
          position="relative"
          zIndex={2}
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
          width="100%"
        >
          <Stack p={1} px={3} borderRadius={4} sx={{ bgcolor: "#3232345e" }}>
            <FooterText
              textAlign={"center"}
              sx={{ color: "#9fe870", fontSize: "22px" }}
            >
              sinhasumank41@gmail.com
            </FooterText>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          width="100%"
          gap="8px"
          alignItems="center"
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
        >
          {copied ? (
            <Stack
              component={motion.div}
              sx={{
                bgcolor: "#9fe870",
                p: 0.2,
                borderRadius: "16px",
                width: "max-content",
              }}
              layoutId="emoji"
            >
              <SemiboldText
                sx={{ bgcolor: "#111111", p: 1, px: 2, borderRadius: "16px" }}
                variant="body1"
              >
                ✅ Copied
              </SemiboldText>
            </Stack>
          ) : (
            <Stack
              p={1}
              borderRadius={4}
              sx={{ bgcolor: "#3232345e", cursor: "pointer" }}
              onClick={copyEmail}
            >
              <FooterText variant="h4" layoutId="emoji" component={motion.div}>
                📋
              </FooterText>
            </Stack>
          )}
          <motion.div layout key={"emoji"}>
            <Stack
              p={1}
              borderRadius={4}
              sx={{ bgcolor: "#3232345e", cursor: "pointer" }}
              component={"a"}
              href={`mailto:sinhasumank41@gmail.com`}
            >
              <FooterText variant="h4" component={motion.div}>
                📧
              </FooterText>
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
    );
  };
  const renderDivider = () => {
    return (
      <Stack
        width="100%"
        justifyContent="center"
        direction="row"
        component={motion.div}
        initial={animationVariant.initial}
        whileInView={animationVariant.animate}
        my={"32px"}
      >
        <svg
          width="248"
          height="43"
          viewBox="0 0 248 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M212.352 2.14395C206.413 4.55752 205.681 5.26183 187.681 27.3326C184.256 31.6758 180.702 34.9517 179.843 34.5887C178.983 34.2258 175.385 29.3783 171.8 23.813C158.559 3.75147 152.666 -1.48611 147.048 2.22127C145.392 3.40336 139.649 9.80763 134.294 16.665C125.132 28.4278 120.937 32.8803 119.709 32.3618C119.34 32.2062 113.654 26.4773 107.069 19.7903C100.537 12.9805 93.4472 6.80406 91.4818 5.97445C86.6911 3.95226 82.6405 6.00534 70.2326 16.5429C64.621 21.2657 58.5371 26.0786 56.6347 27.157L53.1082 28.9971L42.2268 17.7467C36.2046 11.4418 30.3818 6.37892 28.9979 6.22892C25.635 5.9672 21.2597 9.4752 11.1148 20.8233C2.30995 30.7108 -0.449264 35.1904 1.63899 36.0719C3.11305 36.6941 7.13892 33.3281 17.2184 22.8207C21.711 18.3492 26.2226 14.1751 27.3417 13.9239C28.6874 13.4788 32.0997 16.3665 38.3157 22.8979C43.1941 28.141 48.7712 33.1002 50.7366 33.9298C55.4754 36.0748 60.5223 33.7187 72.7036 23.3749C87.4806 10.6534 87.4287 10.7763 92.4244 15.0558C94.641 17.0046 100.45 22.7854 105.329 28.0285C116.371 39.9259 120.354 41.4623 126.839 36.3845C129.454 34.3043 134.186 28.921 137.592 24.2803C145.273 13.6286 149.869 8.91131 151.834 9.74093C152.694 10.1039 157.455 16.3106 162.396 23.4617C173.655 39.6473 175.91 42.1911 180.133 42.8158C184.181 43.5115 190.155 37.9288 200.652 23.69C209.29 12.1401 215.025 7.4692 218.587 8.97288C219.938 9.54324 225.251 14.1012 230.407 19.0277C242.517 30.7967 245.962 33.2639 247.103 30.5615C248.71 26.7535 233.114 8.15803 223.999 3.00811C218.608 0.0087716 217.942 -0.127647 212.352 2.14395Z"
            fill="#9FE870"
          />
        </svg>
      </Stack>
    );
  };
  const renderButtons = () => {
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        gap={"8px"}
      >
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
                borderRadius: "16px",
                color: "#808080",
                width: "60px",
              }}
              alignItems="center"
              justifyContent={"center"}
              component={motion.div}
              whileHover={{ borderColor: "#9fe870", color: "#9fe870" }}
              initial={animationVariant.initial}
              whileInView={animationVariant.animate}
            >
              <SemiboldText
                variant="body1"
                sx={{
                  color: "inherit",
                  lineHeight: "90%",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                {link.socialPlatform}
              </SemiboldText>
            </Stack>
          </Link>
        ))}
      </Stack>
    );
  };
  const renderMarquee = () => {
    return (
      <Stack
        sx={{
          whiteSpace: `nowrap`,
          bottom: 0,
        }}
        component={motion.div}
      >
        <FooterMarqueeText
          component={motion.div}
          sx={{ fontSize: "120px", color: "#3233344f", lineHeight: "70%" }}
          variants={marqueeVariants}
          animate="animate"
        >
          {new Array(50).fill(0).map((item) => `Let's talk.`)}
        </FooterMarqueeText>
      </Stack>
    );
  };
  return (
    <footer>
      <Stack
        bgcolor="#222222"
        height="auto"
        position="relative"
        py={4}
        borderRadius={"32px 32px 0 0"}
        px={2}
        overflow="hidden"
        gap='16px'
      >
      
          {renderHeading()}
          {renderEmail()}
          {renderDivider()}
          {renderButtons()}
          {renderMarquee()}
       </Stack>
    </footer>
  );
};

export default FooterPhone;
