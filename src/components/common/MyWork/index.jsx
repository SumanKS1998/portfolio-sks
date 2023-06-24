import { Box, Button, Stack } from "@mui/material";
import Spline from "@splinetool/react-spline";
import React, { useRef, useState } from "react";
import { HeadingText, MediumText } from "../../styles/fonts";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { constants } from "../../../constants";
import Images from "../../../assets";
const niyasa = `https://prod.spline.design/CU1Kx8z0auNpWthe/scene.splinecode`;
const why = `https://prod.spline.design/l7mpeh5NjFiAHjaw/scene.splinecode`;

const titleContainerVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    delay: 0.5,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
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
const MyWork = () => {
  const { scrollY } = useScroll();

  const springRotator = useSpring(scrollY, {
    stiffness: 50,
    damping: 30,
  });
  const rotateStar = useTransform(springRotator, [0, 1000], [0, 1000]);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [project, setProject] = useState(niyasa);
  const title = `MY JOBS`.split("");
  console.log(isInView);
  return (
    <Stack height="100vh" mx={"32px"} ref={ref}>
      {/* <Button onClick={() => setProject(why)}>WHY</Button>
            <Button onClick={() => setProject(niyasa)}>Niyasa</Button>
            <Stack>
                <Spline scene={project} />
            </Stack> */}

      <AnimatePresence>
        {isInView && (
          <Stack
            direction="row"
            component={motion.div}
            initial="hidden"
            animate="visible"
            alignItems="flex-start"
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
                    <HeadingText sx={{ fontSize: "14vw", lineHeight: "85%" }}>
                      {item}
                    </HeadingText>
                  </motion.div>
                );
              })}
            </Stack>

            <motion.img
              variants={titleVariants}
              src={Images.StarSvg}
              style={{ rotate: rotateStar, width: "100px", margin: "10px 1em" }}
            />
            <Stack
              direction="row"
              component={motion.div}
              variants={titleVariants}
              width="40%"
            >
              <MediumText variant="h3">
                Explore some of the exciting projects I've worked on throughout
                my career.
              </MediumText>
            </Stack>
          </Stack>
        )}
      </AnimatePresence>
    </Stack>
  );
};

export default MyWork;
