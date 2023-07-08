import { Box, Button, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";
import { motion, useAnimationControls } from "framer-motion";
import { constants } from "../../../../constants/index";
import AppContext from "../../../../context/AppContext";
import Images from "../../../../assets";
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
  const entryAnimaitonControl = useAnimationControls();
  useEffect(() => {
    if (!loadingAnimationComplete) {
      entryAnimaitonControl.start("animate");
    }
  }, [loadingAnimationComplete]);
  const renderNavbar = () => {
    return (
      <nav role="navigation">
        <Stack
          width="95vw"
          mx="auto"
          height="100px"
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
          component={motion.div}
          variants={entryContainerVariant}
          initial="initial"
          animate={entryAnimaitonControl}
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
        <Stack direction="row">
          {text.map((item, i) => {
            return (
              <motion.div
                key={i}
                onAnimationComplete={() => {
                  setFirstAnimationOver(true);
                }}
                whileHover={{
                  scale: 1.02,
                  color: ["#ffffe3", "#d6fb41"],
                }}
                initial={{ opacity: 0, y: 400 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: i * 0.1,
                    ...constants[`transitions`],
                  },
                }}
              >
                <HeadingText sx={styles.titleStyle}>{item}</HeadingText>
              </motion.div>
            );
          })}
        </Stack>
      );
    }
    if (Image) {
      return (
        <Box
          component="img"
          src={image}
          sx={{
            height: "200px",
            bgcolor: "#9fe870",
            mt: 1,
            mb: 1.5,
            objectFit: "cover",
          }}
        />
      );
    }
  };
  return (
    <Stack minHeight="100vh">
      {renderNavbar()}
      <Stack
        mx="auto"
        justifyContent={"space-between"}
        component={motion.div}
        variants={entryVariant}
      >
        {renderTitle({ text: headingTextOne })}
        {renderTitle({ image: Images.SumanImage })}
        {renderTitle({ text: headingTextTwo })}
      </Stack>
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
