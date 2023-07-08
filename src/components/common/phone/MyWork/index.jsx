import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";
import Images from "../../../../assets";
import { constants } from "../../../../constants";

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
    <Stack
      component={motion.div}
      my={"32px"}
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
      >
        My Work
      </HeadingText>
      <SemiboldText
        variant="h6"
        component={motion.div}
        initial={animationVariant.initial}
        whileInView={animationVariant.animate}
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
              key={i}
              sx={{
                bgcolor: "#9fe870",
                height: "40vh",
                borderRadius: "24px",
                position: "relative",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <img
                alt="Niyasa Global"
                src={item.image}
                style={{ objectFit: "contain", height: "100%" }}
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
                  sx={{ bgcolor: "#54616c", borderRadius: "100vmax", p: 1 }}
                  mx="auto"
                  direction="row"
                  gap="8px"
                >
                  {item.techStack.map((tech) => {
                    return (
                      <Stack
                        key={tech.name}
                        sx={{ bgcolor: "#111111", borderRadius: "100vmax" }}
                      >
                        <Box
                          component="img"
                          alt="Niyasa Global"
                          src={tech.icon}
                          sx={{
                            objectFit: "contain",
                            height: "50px",
                            width: "50px",
                          }}
                        />
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default MyWorkPhone;
