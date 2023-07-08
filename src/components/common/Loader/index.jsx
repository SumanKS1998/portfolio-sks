import { Stack, useMediaQuery } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { HeadingText } from "../../styles/fonts";
import { constants } from "../../../constants";
import AppContext from "../../../context/AppContext";

const index = ({ appLoading, setLoadingAnimationComplete }) => {
  const { loadingAnimationComplete } = useContext(AppContext);
  const controls = useAnimationControls();
  const [loadingSplines, setLoadingSplines] = useState(30);
  const animateOutVariant = {
    hidden: {
      scale: 0.4,
    },
    visible: {
      scale: 230,
      transition: { ease: constants[`transitions`], duration: 1.4 },
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
          <HeadingText
            sx={{
              position: "absolute",
              zIndex: 500,
              top: 0,
              color: "transparent",
            }}
          >
            test
          </HeadingText>
          <Stack
            alignItems="center"
            component={motion.div}
            variants={animateOutVariant}
            initial="hidden"
            animate={controls}
            gap="32px"
            onAnimationComplete={() => {
              setLoadingAnimationComplete(false);
            }}
          >
            <HeadingText
              variant="h1"
              sx={{
                color:
                  !appLoading.projectOne && !appLoading.projectTwo
                    ? "#111111"
                    : "transparent",
              }}
              initial={{ x: 200, opacity: 0 }}
              component={motion.div}
              animate={{
                x: !appLoading.projectOne && !appLoading.projectTwo && 0,
                opacity: !appLoading.projectOne &&
                  !appLoading.projectTwo && [0, 0.5, 1],
              }}
              transition={{ duration: 0.5 }}
              height="100px"
            >
              {/* Loaded let's go */}
              Suman Kumar Sinha
            </HeadingText>

            <motion.div
              style={{
                position: "relative",
                width: "200px",
                height: "10px",
                border: "1px solid #111111",
                borderRadius: "100vmax",
                overflow: "hidden",
                mt: "100px",
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
                  if (loadingSplines === 100) {
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
