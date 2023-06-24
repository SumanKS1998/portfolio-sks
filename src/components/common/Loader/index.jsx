import React from "react";
import { SemiboldText } from "../../styles/fonts";
import { Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      height="100vh"
      width="100vw"
      bgcolor="red"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={999}
    >
      <SemiboldText sx={{ color: "#FFF" }}>Loading</SemiboldText>
    </Stack>
  );
};

export default Loader;
