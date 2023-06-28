import { Stack } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { LoaderText } from "../../styles/fonts";
import { constants } from "../../../constants";
import AppContext from "../../../context/AppContext";

const index = ({ appLoading, setLoadingAnimationComplete }) => {
  const { loadingAnimationComplete } = useContext(AppContext);
  const controls = useAnimationControls();
  const [loadingSplines, setLoadingSplines] = useState(10);

  const animateOutVariant = {
    hidden: {
      scale: 0.5,
    },
    visible: {
      scale: 300,
      x: "-200%",
      transition: { ease: constants[`transitions`], duration: 2 },
    },
  };
  useEffect(() => {
    if (!appLoading.projectOne) {
      setLoadingSplines(50);
    }
    if (!appLoading.projectTwo) {
      setLoadingSplines(100);
    }
  }, [appLoading]);

  return (
    <>
      {loadingAnimationComplete && (
        <Stack
          component={motion.div}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 999,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            alignItems="center"
            component={motion.div}
            variants={animateOutVariant}
            initial="hidden"
            animate={controls}
            gap="16px"
            onAnimationComplete={() => {
              setLoadingAnimationComplete(false);
            }}
          >
            <LoaderText variant="h1">Suman.dev</LoaderText>
            <motion.div
              style={{
                position: "relative",
                width: "200px",
                height: "10px",
                border: "1px solid #fff",
                borderRadius: "100vmax",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "#B8FF20",
                  height: "10px",
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${loadingSplines * 4}px`,
                  transition: { ease: constants[`transitions`], duration: 1.4 },
                }}
                onAnimationComplete={() => {
                  if (!appLoading.projectTwo) {
                    setTimeout(() => {
                      controls.start("visible");
                    }, 500);
                  }
                }}
              ></motion.div>
            </motion.div>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default index;
