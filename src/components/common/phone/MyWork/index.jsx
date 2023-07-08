import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { HeadingText, SemiboldText } from "../../../styles/fonts";

const MyWorkPhone = () => {
  return (
    <Stack component={motion.div} my={"32px"}>
      <HeadingText variant="h1">My Work</HeadingText>
      <SemiboldText variant="h5">
        Explore some of the exciting projects I've worked on throughout my
        career.✨
      </SemiboldText>
    </Stack>
  );
};

export default MyWorkPhone;
