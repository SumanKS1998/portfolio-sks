import { Box, Grid, Stack } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";
import Images from "../../../../assets";
import { constants, tools } from "../../../../constants";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Modal from "../../Modal";

const TechStack = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTech, setSelectedTech] = useState();
  const [open, setOpen] = useState(false);
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
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <section title="My Work">
      <Modal
        open={open}
        setOpen={setOpen}
        type="tech"
        layoutId={selectedTech}
      />
      <Stack
        component={motion.div}
        my={"32px"}
        mx={2}
        variants={animationVariant}
        initial={"initial"}
        animate={"animate"}
        minHeight="100vh"
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
          justifyContent="space-around"
          p={1}
          bgcolor="#1b1c1c"
          borderRadius={2}
          my={2}
          component={motion.div}
          initial={animationVariant.initial}
          whileInView={animationVariant.animate}
          viewport={{ once: true }}
        >
          {techTypes.map((item) => {
            return (
              <Stack
                component={motion.div}
                alignItems="center"
                p={1}
                borderRadius={2}
                key={item.name}
                onClick={() => setSelectedType(item)}
                position="relative"
                flex={1}
                width="max-content"
              >
                {selectedType === item && (
                  <motion.span
                    layoutId="bg"
                    style={{
                      position: "absolute",
                      borderRadius: "8px",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 4,
                      mixBlendMode: `difference`,
                      backgroundColor: "#9fe870",
                    }}
                  />
                )}
                <SemiboldText
                  variant="body1"
                  sx={{
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  {item}
                </SemiboldText>
              </Stack>
            );
          })}
        </Stack>
        <Grid container mt={2}>
          {filteredArray.map((item, i) => {
            return (
              <Grid
                key={item.name}
                item
                xs={4}
                sx={{ position: "relative" }}
                component={motion.div}
                initial={animationVariant.initial}
                whileInView={animationVariant.animate}
                viewport={{ once: true }}
                layout
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#1b1c1c87"
                  sx={{
                    position: "relative",
                    zIndex: 4,
                    m: 1,
                  }}
                  onClick={() => {
                    setSelectedTech(item.name);
                    handleModal()
                  }}
                  layoutId={item.name}
                  py={5}
                  component={motion.div}
                >
                  <Box
                    component={"img"}
                    src={item.icon}
                    sx={{ height: "50px", width: "50px" }}
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
                  initial={{ filter: "blur(20px)" }}
                >
                  <Box
                    component={"img"}
                    src={item.icon}
                    sx={{ height: "50px", width: "50px" }}
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
