import { Button, IconButton, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  HeadingText,
  MediumText,
  RegularText,
  SemiboldText,
} from "../../styles/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownward } from "@mui/icons-material";
import { constants } from "../../../constants";
import { ParallaxText } from "../ParallaxText";
import AppContext from "../../../context/AppContext";

const HeroSection = () => {
  const { appLoading } = useContext(AppContext);
  const [firstAnimationOver, setFirstAnimationOver] = useState(false);
  const [showBtnText, setShowBtnText] = useState(true);
  const [btnHovered, setBtnHovered] = useState(false);
  const headingTextOne = `FRONT`.split("");
  const headingTextSubOne = `——`.split("");
  const headingTextSubTwo = `END`.split("");
  const headingTextTwo = `DEVELOPER`.split("");
  const renderTitle = ({ text, fontSize }) => {
    return (
      <Stack
        direction="row"
        height="40vh"
        overflow={firstAnimationOver ? "visible" : "hidden"}
      >
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
  };
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
  return (
    <Stack minHeight="110vh">
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
        animate="animate"
        overflow="hidden"
      >
        <Stack variants={entryVariant} component={motion.div}>
          <SemiboldText>SUMAN KUMAR SINHA</SemiboldText>
        </Stack>
        <Stack
          direction="row"
          gap="40px"
          variants={entryVariant}
          component={motion.div}
        >
          <SemiboldText>
            AVAILABLE FOR FREELANCE
            <br /> WORK FROM JULY 2023
          </SemiboldText>
          <Button
            sx={{
              textTransform: "inherit",
              border: "1px solid #ffffe3",
              borderRadius: "100vmax",
              color: "#ffffe3",
              overflow: "hidden",
              width: "100px",
              mr: 1,
            }}
            component={motion.div}
            whileHover={{
              backgroundColor: "#d6fb41",
              borderColor: "#d6fb41",
              scale: [1, 1.1, 1],
              transition: {
                duration: 0.2,
              },
            }}
            onMouseOver={() => {
              setShowBtnText(false);
            }}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <AnimatePresence>
              {showBtnText && !btnHovered && (
                <SemiboldText
                  component={motion.div}
                  initial={{ y: "200%" }}
                  animate={{
                    y: "0%",
                    transition: { duration: 0.1, type: "spring" },
                  }}
                  exit={{ y: "200%", transition: { duration: 0.1 } }}
                  onAnimationComplete={(e) =>
                    e.y === "200%" && setBtnHovered(true)
                  }
                >
                  Contact
                </SemiboldText>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {btnHovered && !showBtnText && (
                <SemiboldText
                  component={motion.div}
                  initial={{ y: "-200%" }}
                  animate={{
                    y: "0%",
                    transition: { duration: 0.1, type: "spring" },
                  }}
                  exit={{ y: "-200%", transition: { duration: 0.1 } }}
                  onAnimationComplete={(e) =>
                    e.y === "-200%" && setShowBtnText(true)
                  }
                  sx={{ color: "#111111" }}
                >
                  Contact
                </SemiboldText>
              )}
            </AnimatePresence>
          </Button>
        </Stack>
      </Stack>
      <AnimatePresence>
        {!appLoading && (
          <>
            {" "}
            <Stack
              flex={1}
              justifyContent="center"
              component={motion.div}
              initial="initial"
              animate="animate"
              variants={entryContainerVariant}
            >
              <ParallaxText direction={false}>
                <Stack
                  width="100vw"
                  mx="auto"
                  direction="row"
                  justifyContent={"space-between"}
                  component={motion.div}
                  variants={entryVariant}
                >
                  {renderTitle({ text: headingTextOne, fontSize: "22vw" })}
                  {renderTitle({ text: headingTextSubOne, fontSize: "22vw" })}
                  {renderTitle({ text: headingTextSubTwo, fontSize: "22vw" })}
                </Stack>
              </ParallaxText>
              <ParallaxText direction={true}>
                <Stack
                  width="100vw"
                  mx="auto"
                  direction="row"
                  justifyContent="space-between"
                  gap="50px"
                >
                  {renderTitle({ text: headingTextTwo, fontSize: "22vw" })}
                  <Stack
                    gap="48px"
                    width={{ xs: "340px ", xl: "500px " }}
                    py={1}
                    height="40vh"
                    overflow="hidden"
                    sx={{ whiteSpace: "pre-wrap !important" }}
                  >
                    <RegularText
                      sx={{
                        lineHeight: "120%",
                        fontSize: { xs: "18px", xl: "22px" },
                      }}
                      component={motion.div}
                      variants={entryVariant}
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
                      I am a developer based in Guwahati, India, with a
                      specialization in building exceptional digital experiences
                      on the web. My current focus revolves around crafting
                      remarkable products at Ellenox.
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
                          <ArrowDownward
                            sx={{ color: "#777777", fontSize: "30px" }}
                          />
                        </motion.div>
                      </IconButton>
                    </Stack>
                  </Stack>
                </Stack>{" "}
              </ParallaxText>
            </Stack>
          </>
        )}
      </AnimatePresence>
    </Stack>
  );
};

export default HeroSection;
const styles = {
  titleStyle: {
    fontSize: "22vw",
    lineHeight: "85%",
    letterSpacing: { lg: "-5px", xl: "-10px" },
    ml: "-10px",
  },
};
