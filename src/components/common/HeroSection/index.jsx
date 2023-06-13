import { Stack, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { BoldText } from "../../styles/fonts";
import { useState } from "react";
import MyWork from "../../common/MyWork";
import Images from "../../../assets";
const Home = () => {
  const imgLink = `https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80`;
  const [animateHeader, setAnimateHeader] = useState(false);
  const [imageAnimationEnd, setImageAnimationEnd] = useState(false);
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], ["25vw", "-100vw"]);
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const [scrolled, setScroller] = useState(false);
  const headerText = [
    "DESIGN.",
    "DEVELOP.",
    "DEPLOY.",
    "DESIGN.",
    "DEVELOP.",
    "DEPLOY.",
    "DESIGN.",
    "DEVELOP.",
    "DEPLOY.",
  ];
  useEffect(() => {
    const clearTimeout = setTimeout(() => {
      setScroller(true);
    }, 500);
    return () => clearTimeout;
  }, []);

  return (
    <Stack
      sx={{
        bgcolor: "#000",
        height: imageAnimationEnd ? "100%" : "200vh",
        maxWidth: "100vw",
        overflow: "hidden",
        minHeight: "100vh",
      }}
      alignItems="center"
    >
      <Stack
        height="30vh"
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-start"
        component={motion.section}
        style={{ x: translateX }}
        animate={{ stiffness: 200 }}
      >
        <AnimatePresence>
          {animateHeader &&
            headerText.map((item, i) => (
              <BoldText
                sx={{
                  color: i % 2 === 0 ? "#8559e9" : "#ffffe3",
                  fontSize: "10vw",
                }}
                key={i}
                component={motion.div}
                initial={{ y: 300 }}
                animate={{
                  y: 0,
                  transition: { delay: 0.1 * i, ...transition },
                }}
                onAnimationComplete={() => setImageAnimationEnd(true)}
              >
                {item}
              </BoldText>
            ))}
        </AnimatePresence>
      </Stack>
      <AnimatePresence>
        {scrolled ? (
          <Tooltip arrow followCursor>
            <motion.div
              initial={{
                y: "-50%",
                width: styles.imgInitial.width,
                height: styles.imgInitial.height,
              }}
              animate={{
                y: 0,
                width: "100%",
                height: 800,
                transition: { delay: 0.2, ...transition },
              }}
              onAnimationComplete={() => setAnimateHeader(true)}
            >
              <motion.img
                src={Images.SumanImage}
                style={{
                  ...styles.imgInitial,
                }}
                initial={{
                  width: styles.imgInitial.width,
                  height: styles.imgInitial.height,
                }}
                animate={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          </Tooltip>
        ) : (
          <motion.img
            src={Images.SumanImage}
            style={styles.imgInitial}
            initial={{
              width: styles.imgInitial.width,
              height: styles.imgInitial.height,
              y: "-50%",
            }}
          />
        )}
      </AnimatePresence>
    </Stack>
  );
};

export default Home;
const styles = {
  imgInitial: {
    width: "200px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "16px",
  },
};
