import { Stack } from "@mui/material";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { HeadingText, MediumText } from "../../../styles/fonts";
import { constants } from "../../../../constants";
import Images from "../../../../assets";

const titleContainerVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const titleVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ...constants[`transitions`],
    },
  },
};

const Heading = ({ scrollY }) => {
  const springRotator = useSpring(scrollY, {
    stiffness: 50,
    damping: 30,
  });
  const rotateStar = useTransform(springRotator, [-2000, 2000], [0, 1000]);
  const ref = useRef(null);
  const title = `MY\u00a0 WORK`.split("");
  return (
    <Stack sx={{ position: "relative" }} mx="32px">
      <Stack
        direction={"column"}
        component={motion.div}
        initial="hidden"
        animate="visible"
        alignItems={{ xs: "center" }}
        variants={titleContainerVariant}
        justifyContent={"space-between"}
      >
        <Stack
          direction="row"
          component={motion.div}
          variants={titleVariants}
          height={"13vw"}
          overflow="hidden"
        >
          {title.map((item, i) => {
            return (
              <motion.div key={i}>
                <HeadingText sx={{ fontSize: "10vw" }}>{item}</HeadingText>
              </motion.div>
            );
          })}
        </Stack>
        <Stack direction="row" justifyContent="center" ref={ref}>
          <motion.img
            variants={titleVariants}
            src={Images.StarSvg}
            style={{
              rotate: rotateStar,
              width: "50px",
              margin: "10px 1em",
            }}
          />
          <motion.img
            variants={titleVariants}
            src={Images.StarSvg}
            style={{
              rotate: rotateStar,
              width: "100px",
              margin: "10px 1em",
            }}
          />
          <motion.img
            variants={titleVariants}
            src={Images.StarSvg}
            style={{
              rotate: rotateStar,
              width: "50px",
              margin: "10px 1em",
            }}
          />
        </Stack>
        <Stack component={motion.div} textAlign={{ xs: "center" }}>
          <Stack width="max-content" ml="auto" gap="8px">
            <MediumText
              variant="h4"
              variants={titleVariants}
              component={motion.div}
            >
              Explore some of the exciting projects I've
            </MediumText>

            <MediumText
              variant="h4"
              variants={titleVariants}
              component={motion.div}
            >
              worked on throughout
            </MediumText>
            <MediumText
              variant="h4"
              variants={titleVariants}
              component={motion.div}
            >
              my career.✨
            </MediumText>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Heading;
