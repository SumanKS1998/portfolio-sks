import { Stack } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const FrameOne = ({color}) => {
  return (
    <motion.div>
      {" "}
      <Stack
        height="100vh"
        bgcolor={color||"#e3ff73"}
        borderRadius="5em"
        component={motion.div}
      ></Stack>
    </motion.div>
  );
};

export default FrameOne;
