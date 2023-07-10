import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadingText } from "../../../styles/fonts";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { constants } from "../../../../constants";

const PhoneLoader = ({ setLoadingAnimationComplete }) => {
  const loadPercent = useMotionValue(0);
  const [number, setNumber] = useState(0);
  const loadComplete = number === 100;
  useEffect(() => {
    if (number !== 100) {
      const newNum = number + 1;
      setTimeout(() => {
        setNumber(newNum);
        loadPercent.set(newNum);
      }, 5);
    }
  }, [number]);
  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
        bgcolor: "#9fe870",
      }}
      height="100vh"
      component={motion.div}
      initial={{ y: 0 }}
      animate={{
        y: loadComplete && "-150%",
        transition: {
          delay: 0.5,
          duration: 1.4,
          ease: constants[`transitions`],
        },
      }}
      onAnimationComplete={() => {
        setTimeout(() => {
          setLoadingAnimationComplete(false);
        }, 1000);
      }}
    >
      <HeadingText
        component={motion.div}
        variant="h1"
        sx={{
          color: "#111111",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {number}%
      </HeadingText>
      <Stack sx={{ position: "absolute", bottom: "-4%" }}>
        {loadComplete && (
          <motion.div layoutId="svg">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <path
                d="M0 513L6.8 514.2C13.7 515.3 27.3 517.7 41 514.3C54.7 511 68.3 502 82 479C95.7 456 109.3 419 123 409.8C136.7 400.7 150.3 419.3 164 437.8C177.7 456.3 191.3 474.7 204.8 470.7C218.3 466.7 231.7 440.3 245.2 444.2C258.7 448 272.3 482 286 479C299.7 476 313.3 436 327 431.3C340.7 426.7 354.3 457.3 368 476.7C381.7 496 395.3 504 409 509.7C422.7 515.3 436.3 518.7 450 496.2C463.7 473.7 477.3 425.3 491 401C504.7 376.7 518.3 376.3 532 390.7C545.7 405 559.3 434 573 445.8C586.7 457.7 600.3 452.3 614 446.8C627.7 441.3 641.3 435.7 654.8 441.2C668.3 446.7 681.7 463.3 695.2 471.5C708.7 479.7 722.3 479.3 736 480.7C749.7 482 763.3 485 777 489.8C790.7 494.7 804.3 501.3 818 491.7C831.7 482 845.3 456 859 454.3C872.7 452.7 886.3 475.3 893.2 486.7L900 498L900 601L893.2 601C886.3 601 872.7 601 859 601C845.3 601 831.7 601 818 601C804.3 601 790.7 601 777 601C763.3 601 749.7 601 736 601C722.3 601 708.7 601 695.2 601C681.7 601 668.3 601 654.8 601C641.3 601 627.7 601 614 601C600.3 601 586.7 601 573 601C559.3 601 545.7 601 532 601C518.3 601 504.7 601 491 601C477.3 601 463.7 601 450 601C436.3 601 422.7 601 409 601C395.3 601 381.7 601 368 601C354.3 601 340.7 601 327 601C313.3 601 299.7 601 286 601C272.3 601 258.7 601 245.2 601C231.7 601 218.3 601 204.8 601C191.3 601 177.7 601 164 601C150.3 601 136.7 601 123 601C109.3 601 95.7 601 82 601C68.3 601 54.7 601 41 601C27.3 601 13.7 601 6.8 601L0 601Z"
                fill="#111"
              ></path>
            </svg>
          </motion.div>
        )}
        {!loadComplete && (
          <motion.div
            layoutId="svg"
            style={{ width: "100vw", height: 0 }}
          ></motion.div>
        )}
      </Stack>
    </Stack>
  );
};

export default PhoneLoader;
