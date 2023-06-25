import { Stack } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const FrameOne = ({ color, children }) => {
  return (
    <motion.div>
      {" "}
      <Stack
        minHeight="100vh"
        bgcolor={color || "#e3ff73"}
        borderRadius="5em"
        component={motion.div}
        sx={{ position: "relative" }}
        width='100vw'
        oveflow='hidden'
      >
        {children}
      </Stack>
    </motion.div>
  );
};

export default FrameOne;
