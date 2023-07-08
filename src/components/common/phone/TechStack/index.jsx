import { Box, Grid, Stack } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";
import Images from "../../../../assets";
import { constants, tools } from "../../../../constants";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const TechStack = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const techTypes = ["All", "Front-end", "Back-end"];
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
  useEffect(() => {
     if (selectedType === "All") {
      setFilteredArray(tools);
      return;
    } else if (selectedType === "Front-end") {
      setFilteredArray(tools.filter((item) => item.type === "Front-end"));
      return;
    }
    setFilteredArray(tools.filter((item) => item.type === "Back-end"));
  }, [selectedType]);
  return (
    <section title="My Work">
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
          viewport={{ once: true }}
        >
          Tech Stack
        </HeadingText>
        <SemiboldText
          variant="h6"
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
          viewport={{ once: true }}
        >
          Tools I use to build my projects 👷🏾‍♂️
        </SemiboldText>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          p={1}
          bgcolor="#1b1c1c"
          borderRadius={2}
          gap={2}
          my={2}
        >
          {techTypes.map((item) => {
            return (
              <Stack
                component={motion.div}
                width="30%"
                alignItems="center"
                p={1}
                borderRadius={2}
                key={item.name}
                onClick={() => setSelectedType(item)}
                position="relative"
              >
                {selectedType === item && (
                  <motion.span
                    layoutId="bg"
                    style={{
                      background: "#9fe870",
                      position: "absolute",
                      borderRadius: "8px",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 2,
                    }}
                  />
                )}
                <SemiboldText
                  variant="h6"
                  sx={{
                    position: "relative",
                    zIndex: 3,
                    color: selectedType === item ? "#000" : "#ffffff",
                  }}
                >
                  {item}
                </SemiboldText>
              </Stack>
            );
          })}
        </Stack>
        <Grid container mt={2}  >
          {filteredArray.map((item, i) => {
            return (
              <Grid
                key={item.name}
                item
                xs={6}
                sx={{ position: "relative" }}
                component={motion.div}
                initial={animationVariant.initial}
                whileInView={animationVariant.animate}
                layout
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#1b1c1c87"
                  sx={{
                    backdropFilter: "blur(20px)",
                    position: "relative",
                    zIndex: 2,
                    m: 1,
                  }}
                  py={5}
                >
                  <Box
                    component={"img"}
                    src={item.icon}
                    sx={{ height: "80px", width: "80px" }}
                  />
                </Stack>
                <Stack
                  component={motion.div}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <Box
                    component={"img"}
                    src={item.icon}
                    sx={{ height: "80px", width: "80px" }}
                  />
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </section>
  );
};

export default TechStack;