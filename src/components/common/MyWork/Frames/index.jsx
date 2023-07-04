import { Stack } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Frame = ({ color, children }) => {
  return (
    <motion.div>
      {" "}
      <Stack
        minHeight="100vh"
        bgcolor={color}
        borderRadius="64px 64px 0 0"
        component={motion.div}
        sx={{ position: "relative" }}
        width="100%"
        overflow="hidden"
      >
        {children}
      </Stack>
    </motion.div>
  );
};

export default Frame;
