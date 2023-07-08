import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";
 import { constants } from "../../../../constants";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MyWorkPhone = () => {
  const animationVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ...constants[`transitions`],
      },
    },
  };
  return (
    <section title="My Work">
      <Stack
        component={motion.div}
        my={"64px"}
        mx={2}
        variants={animationVariant}
        initial={"initial"}
        animate={"animate"}
      >
        <HeadingText
          variant="h1"
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
          viewport={{ once: true }}
        >
          My Work
        </HeadingText>
        <SemiboldText
          variant="h6"
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
          viewport={{ once: true }}
        >
          Explore some of the exciting projects I've worked on throughout my
          career.✨
        </SemiboldText>
        <Stack gap="64px" mt="32px">
          {constants[`projectsArray`].map((item, i) => {
            return (
              <Stack
                component={motion.div}
                initial={animationVariant.initial}
                whileInView={animationVariant.animate}
                viewport={{ once: true }}
                key={i}
                sx={{
                  bgcolor: "#9fe870",
                  height: "40vh",
                  borderRadius: "24px",
                  position: "relative",
                  width: "100%",
                }}
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  component="img"
                  alt={item.name}
                  src={item.image}
                  sx={{ objectFit: "contain", height: "100%", width: "100%" }}
                />

                <Stack
                  direction="row"
                  sx={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: 0,
                    transform: "translateY(50%)",
                    borderRadius: "16px",
                    p: 1,
                  }}
                >
                  <Stack
                    component={motion.div}
                    sx={{
                      bgcolor: "#54616c",
                      borderRadius: "100vmax",
                      p: 1,
                      overflow: "hidden",
                    }}
                    mx="auto"
                    direction="row"
                    gap="8px"
                    initial={{ height: "0", width: "0" }}
                    whileInView={{
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    {item.techStack.map((tech) => {
                      return (
                        <Stack
                          key={tech.name}
                          sx={{
                            bgcolor: "#111111",
                            borderRadius: "100vmax",
                          }}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box
                            component="img"
                            alt="Niyasa Global"
                            src={tech.icon}
                            sx={{
                              objectFit: "contain",
                              height: "30px",
                              width: "30px",
                            }}
                          />
                        </Stack>
                      );
                    })}
                  </Stack>
                </Stack>
                <Link to={item.link} target="_blank">
                  <Stack
                    component={motion.div}
                    sx={{
                      bgcolor: "#111111",
                      borderRadius: "100vmax",
                      position: `absolute`,
                      top: "10px",
                      right: "10px",
                    }}
                    alignItems="center"
                    justifyContent="center"
                    initial={{ height: "30px", width: "30px" }}
                    whileInView={{
                      width: "60px",
                    }}
                  >
                    <ArrowForwardIos sx={{ color: "#fff" }} />
                  </Stack>
                </Link>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </section>
  );
};

export default MyWorkPhone;
