import { Stack } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { HeadingText,   } from "../../styles/fonts";
import { constants } from "../../../constants";
import AppContext from "../../../context/AppContext";

const index = ({ appLoading, setLoadingAnimationComplete }) => {
  const { loadingAnimationComplete } = useContext(AppContext);
  const controls = useAnimationControls();
  const [loadingSplines, setLoadingSplines] = useState(10);

  const animateOutVariant = {
    hidden: {
      scale: 0.4,
    },
    visible: {
      scale: 200,
      x: "-200%",
      transition: { ease: constants[`transitions`], duration: 1},
    },
  };
  useEffect(() => {
    if (!appLoading.projectOne && loadingSplines < 50) {
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
            bgcolor: "#ffffe3",
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
            {!appLoading.projectOne && !appLoading.projectTwo ? (
              <HeadingText variant="h1" sx={{ color: "#111111" }}>
                Loaded let's go
              </HeadingText>
            ) : (
              <HeadingText variant="h1" sx={{ color: "#111111" }}>
                Loading
              </HeadingText>
            )}
            <motion.div
              style={{
                position: "relative",
                width: "200px",
                height: "10px",
                border: "1px solid #111111",
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
                  width: `${loadingSplines * 2}px`,
                  transition: { ease: constants[`transitions`], duration: 1.4 },
                }}
                onAnimationComplete={() => {
                  if (loadingSplines===100) {
                       controls.start("visible");
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
