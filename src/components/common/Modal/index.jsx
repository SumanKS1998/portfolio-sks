import { Box, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FooterPhone from "../phone/Footer";
import { tools } from "../../../constants";
import { BoldText, HeadingText, SemiboldText } from "../../styles/fonts";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
const Modal = ({ open, setOpen, type, layoutId }) => {
  console.log(layoutId);
  const renderContact = () => {
    return (
      <Stack
        sx={{ borderRadius: "32px", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
        component={motion.div}
        initial={{ scale: 0 }}
        whileInView={{ scale: 0.8, transition: { delay: 0.1 } }}
      >
        <FooterPhone type="modal" />
      </Stack>
    );
  };
  const renderTech = () => {
    const selectedTech = tools.find((item) => item.name === layoutId);
    console.log(selectedTech);
    return (
      <Stack
        sx={{
          bgcolor: "#111",
          width: "90%",
          borderRadius: 4,
          p: 1,
          mx: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Stack
          direction="row"
          gap="16px"
          sx={{ bgcolor: "#3233344f", p: 1, borderRadius: 4 }}
        >
          <Box
            component="img"
            src={selectedTech.icon}
            alt={selectedTech.name}
            sx={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              borderRadius: 4,
            }}
          />
          <Stack gap="4px">
            <Stack
              direction="row"
              sx={{ color: "#9fe870", textDecoration: "none" }}
              component={Link}
              to={selectedTech.link}
              target="_blank"
            >
              <motion.div initial={{ rotate: -45 }}>
                <LinkIcon />
              </motion.div>
              <BoldText variant="h6">{selectedTech.name}</BoldText>
            </Stack>
            <SemiboldText variant="body2" sx={{ color: "#ffffe38c" }}>
              {selectedTech.description}
            </SemiboldText>
          </Stack>
        </Stack>
      </Stack>
    );
  };
  const conditionalRenderer = () => {
    if (type === "contact") return renderContact();
    if (type === "tech") return renderTech();
  };
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
          layoutId={layoutId}
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
          {conditionalRenderer()}
        </Stack>
      )}
    </AnimatePresence>
  );
};

export default Modal;
