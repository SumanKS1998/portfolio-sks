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
            opacity: "0",
          }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Stack
            sx={{ borderRadius: "32px", overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
            component={motion.div}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.8, transition: { delay: 0.1 } }}
          >
            <FooterPhone type="modal" />
          </Stack>
        </Stack>
      )}
    </AnimatePresence>
  );
};

export default Modal;
