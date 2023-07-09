import { Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FooterPhone from "../phone/Footer";

const Modal = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <Stack
          component={motion.div}
          layout
          onClick={() => setOpen(false)}
          sx={{
            position: "fixed",
            zIndex: 999,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "#0000000",
          }}
          layoutId="modal"
          initial={{
            backdropFilter: "blur(0px)",
          }}
          animate={{
            backdropFilter: "blur(10px)",
          }}
          exit={{
            backdropFilter: "blur(0px)",
          }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Stack sx={{ m: 4, borderRadius: "32px", overflow: "hidden" }}>
            <FooterPhone />
          </Stack>
        </Stack>
      )}
    </AnimatePresence>
  );
};

export default Modal;
