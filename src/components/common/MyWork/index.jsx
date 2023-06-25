import { Box, Button, Stack, Tooltip } from "@mui/material";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { HeadingText, MediumText } from "../../styles/fonts";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { constants } from "../../../constants";
import Images from "../../../assets";
import AppContext from "../../../context/AppContext";
import Spline from "@splinetool/react-spline";
import Heading from "./Heading";
import FrameOne from "./Frames/FrameOne";
import { ScrollerMotion } from "scroller-motion";

const MyWork = () => {
  const { completeLoading } = useContext(AppContext);
  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });
  const isInViewProject = useInView(projectsRef, { once: true });
  const [project, setProject] = useState(constants[`projectsArray`][0]);
  const { scrollY } = useScroll();

  const controls = useAnimation();

  useEffect(() => {
    if (isInViewProject) {
      console.log(isInViewProject);
      controls.start("visible");
    }
  }, [controls, isInViewProject]);
  return (
    <Stack sx={{ position: "relative" }}>
      <Stack
        ref={headingRef}
        minHeight="50vh"
        component={motion.div}
        sx={{ position: "sticky", top: "0px", zIndex: 1 }}
      >
        <AnimatePresence>
          {isInViewHeading && <Heading scrollY={scrollY} />}
        </AnimatePresence>
      </Stack>

      <Stack
        component={motion.div}
        mt="64px"
        sx={{ position: "sticky", top: 0, zIndex: 2 }}
      >
        <FrameOne color="#d6fb41" />
      </Stack>
      <Stack
        component={motion.div}
        sx={{ position: "sticky", top: "100px", zIndex: 3 }}
      >
        <FrameOne color="#e3ff73" />
      </Stack>
      <Stack
        component={motion.div}
        sx={{
          position: "sticky",
          top: "200px",
          zIndex: 4,
          bgcolor: "#f1ffb9",
          borderRadius: "5em 5em 0 0 ",
          background: `linear-gradient(180deg, rgba(241,255,185,1) 0%, rgba(255,255,255,1) 81%)`,
        }}
      >
        <FrameOne color="transparent" />
      </Stack>
    </Stack>
  );
};

export default MyWork;

{
  /* <Stack minHeight="80vh" sx={{ position: "relative" }}>
             <Stack
              component={motion.div}
              variants={projectVariant}
              initial="hidden"
              animate={controls}
              ref={projectsRef}
            >
              <Spline scene={project.spline} onLoad={() => completeLoading()} />
            </Stack>
         </Stack> */
}
