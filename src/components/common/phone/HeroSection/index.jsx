import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { HeadingText, RegularText, SemiboldText } from "../../../styles/fonts";
import { motion, useAnimationControls } from "framer-motion";
import { constants } from "../../../../constants/index";
import AppContext from "../../../../context/AppContext";
import Images from "../../../../assets";
import { ArrowDownward } from "@mui/icons-material";
const entryContainerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const entryVariant = {
  initial: { opacity: 0, y: 400 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ...constants[`transitions`],
    },
  },
};
const HeroSectionPhone = () => {
  const { loadingAnimationComplete } = useContext(AppContext);
  const headingTextOne = `FRONT-END`.split("");

  const headingTextTwo = `DEVELOPER`.split("");
  const entryAnimationControl = useAnimationControls();
  const HeroControl = useAnimationControls();
  useEffect(() => {
    if (!loadingAnimationComplete) {
      entryAnimationControl.start("animate");
      HeroControl.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: i * 0.1,
          ...constants[`transitions`],
        },
      }));
    }
  }, [loadingAnimationComplete]);
  const renderNavbar = () => {
    return (
      <nav role="navigation">
        <Stack
          mx="auto"
          height="100px"
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
          component={motion.div}
          variants={entryContainerVariant}
          initial="initial"
          animate={entryAnimationControl}
          overflow="hidden"
        >
          <Stack component={motion.div} variants={entryVariant}>
            <SemiboldText variant="body2">
              SUMAN KUMAR <br />
              SINHA
            </SemiboldText>
          </Stack>

          <motion.div variants={entryVariant}>
            <Button
              sx={{ textTransform: "inherit" }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
            >
              <Stack
                justifyContent="center"
                direction="row"
                alignItems="center"
                width="100px"
                position="relative"
                bgcolor="#9fe870"
                borderRadius="100vmax"
                py={0.5}
              >
                <HeadingText variant="h6" sx={{ color: "#111111" }}>
                  Contact
                </HeadingText>
              </Stack>
            </Button>
          </motion.div>
        </Stack>
      </nav>
    );
  };
  const renderTitle = ({ text, image }) => {
    if (text) {
      return (
        <Stack
          direction="row"
          overflow={loadingAnimationComplete ? "visible" : "hidden"}
          justifyContent="space-between"
        >
          {text.map((item, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                whileHover={{
                  scale: 1.02,
                  color: ["#ffffe3", "#d6fb41"],
                }}
                initial={{ opacity: 0, y: 400 }}
                animate={HeroControl}
              >
                <HeadingText sx={styles.titleStyle} component="h1">
                  {item}
                </HeadingText>
              </motion.div>
            );
          })}
        </Stack>
      );
    }
    if (Image) {
      return (
        <motion.div initial={{ opacity: 0, y: 400 }} animate={HeroControl}>
          <Box
            component="img"
            src={image}
            alt="Suman Kumar Sinha"
            sx={{
              height: "200px",
              bgcolor: "#9fe870",
              mt: 1,
              mb: 1.5,
              objectFit: "cover",
              width: "100%",
            }}
          />
        </motion.div>
      );
    }
  };
  const renderDescription = () => {
    return (
      <Stack
        gap="24px"
        width={{ xs: "100% ", xl: "500px " }}
        overflow="hidden"
        mx={"auto"}
        mt={"32px"}
        initial="initial"
        variants={entryVariant}
        component={motion.div}
        animate={entryAnimationControl}
      >
        <RegularText
          sx={{
            lineHeight: "120%",
            fontSize: { xs: "18px", xl: "22px" },
            textAlign: "justify",
          }}
        >
          <SemiboldText
            component={"span"}
            mr={"16px"}
            sx={{
              lineHeight: "120%",
              color: "#777777",
            }}
            variant="h6"
          >
            ABOUT
          </SemiboldText>
          I am a developer based in Guwahati, India, with a specialization in
          building exceptional digital experiences on the web. My current focus
          revolves around crafting remarkable products at Ellenox.
        </RegularText>
        <Stack
          direction="row"
          justifyContent="space-between"
          component={motion.div}
          variants={entryVariant}
        >
          <SemiboldText sx={{ color: "#777777" }} variant="h6">
            Scroll Down
          </SemiboldText>
          <IconButton
            sx={{
              height: "40px",
              width: "40px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: ["-100%", "0%", "5%", "-5%", "100%"],
                transition: {
                  duration: 1.3,
                  repeat: "infinity",
                },
              }}
            >
              <ArrowDownward sx={{ color: "#777777", fontSize: "30px" }} />
            </motion.div>
          </IconButton>
        </Stack>
      </Stack>
    );
  };
  return (
    <Stack minHeight="100vh" px={2}>
      {renderNavbar()}

      <section role="main">
        <Stack
          mx="auto"
          justifyContent={"space-between"}
          component={motion.div}
          variants={entryVariant}
          sx={{ overflow: "hidden" }}
        >
          {renderTitle({ text: headingTextOne })}
          {renderTitle({ image: Images.SumanImage })}
          {renderTitle({ text: headingTextTwo })}
        </Stack>
        {renderDescription()}
      </section>
    </Stack>
  );
};

export default HeroSectionPhone;
const styles = {
  titleStyle: {
    fontSize: "90px",
    lineHeight: "85%",
    letterSpacing: { xs: 0, lg: "-5px", xl: "-10px" },
  },
};
