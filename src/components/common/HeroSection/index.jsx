import { Box, Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { HeadingText, RegularText, SemiboldText } from "../../styles/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownward, ArrowForwardIos } from "@mui/icons-material";
import { constants } from "../../../constants";
import { ParallaxText } from "../ParallaxText";
import AppContext from "../../../context/AppContext";
import Images from "../../../assets";
import Modal from "../Modal";

const HeroSection = () => {
  const { loadingAnimationComplete } = useContext(AppContext);
  const [firstAnimationOver, setFirstAnimationOver] = useState(false);
  const [contactBtnHovered, setContedtBtnHovered] = useState(false);
  const [opent, setOpen] = useState(false);
  const headingTextOne = `FRONT`.split("");
  const headingTextSubTwo = `END`.split("");
  const headingTextTwo = `DEVELOPER`.split("");
  const renderTitle = ({ text, fontSize, image }) => {
    if (text) {
      return (
        <Stack
          direction="row"
          height="40vh"
          overflow={firstAnimationOver ? "visible" : "hidden"}
          mx={4}
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
                  color: ["#ffffe3", "#9fe870"],
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
          sx={{ height: "16vw", bgcolor: "#9fe870", mt: 1 }}
          alt="Suman Kumar Sinha"
        />
      );
    }
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
      <Modal open={opent} setOpen={setOpen} type="contact" />
      <AnimatePresence>
        {!loadingAnimationComplete && (
          <>
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
                    sx={{ textTransform: "inherit" }}
                    onMouseOver={() => setContedtBtnHovered(true)}
                    onMouseLeave={() => setContedtBtnHovered(false)}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    aria-label="Contact Details"
                    onClick={() => setOpen(true)}

                  >
                    <Stack
                      justifyContent="center"
                      direction="row"
                      alignItems="center"
                      width="200px"
                      position="relative"
                      bgcolor="#ffffe3"
                      borderRadius="100vmax"
                      py={0.5}
                    >
                      <HeadingText variant="h6" sx={{ color: "#111111" }}>
                        Contact
                      </HeadingText>
                      {!contactBtnHovered && (
                        <Stack
                          component={motion.div}
                          width="40px"
                          bgcolor="#9fe870"
                          height="40px"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="100vmax"
                          position="absolute"
                          right="0"
                        >
                          <ArrowForwardIos sx={{ color: "#ffffe3" }} />
                        </Stack>
                      )}
                      <AnimatePresence>
                        {contactBtnHovered && (
                          <Stack
                            component={motion.div}
                            initial={{ width: "40px" }}
                            animate={{
                              width: "100%",
                            }}
                            exit={{ width: "40px" }}
                            bgcolor="#9fe870"
                            height="40px"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="100vmax"
                            position="absolute"
                            right="0"
                          >
                            <ArrowForwardIos sx={{ color: "#ffffe3" }} />
                          </Stack>
                        )}
                      </AnimatePresence>
                    </Stack>
                  </Button>
                </Stack>
              </Stack>{" "}
            </nav>
            <main role="marquee">
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
                    {renderTitle({ text: headingTextOne, fontSize: "20vw" })}
                    {renderTitle({
                      image: Images.SumanImage,
                      fontSize: "20vw",
                    })}
                    {renderTitle({ text: headingTextSubTwo, fontSize: "20vw" })}
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
                      mr={5}
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
                        specialization in building exceptional digital
                        experiences on the web. My current focus revolves around
                        crafting remarkable products at Ellenox.
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
                        <Stack
                          sx={{
                            height: "30px",
                            width: "40px",
                            overflow: "hidden",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <motion.div
                            initial={{ y: "-100%" }}
                            animate={{
                              y: ["-100%", "0%", "-25%", "100%"],
                              transition: {
                                duration: 1.3,
                                repeat: "infinity",
                              },
                            }}
                          >
                            <ArrowDownward
                              sx={{ color: "#777777", fontSize: "20px" }}
                            />
                          </motion.div>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </ParallaxText>
              </Stack>
            </main>
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
