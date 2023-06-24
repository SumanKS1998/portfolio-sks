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
const niyasa = `https://prod.spline.design/CU1Kx8z0auNpWthe/scene.splinecode`;
const why = `https://prod.spline.design/l7mpeh5NjFiAHjaw/scene.splinecode`;

const projectsArray = [
  {
    name: "Niyasa Global",
    spline: niyasa,
    description:
      "Explore endless opportunities for studying abroad and visa services at Niyasa Global. Expert guidance, visa assistance, and valuable resources. Unlock a world of possibilities today!",
    link: `https://eduniyasa.in/`,
    type: "web",
  },
  {
    name: "WHY Emotional Support &Therapy",
    spline: why,
    description:
      "Get the understanding and guidance you need to navigate life's challenges, anytime, anywhere. Find solace, healing, and empowerment with WHY.",
    link: `https://play.google.com/store/apps/details?id=com.wehearyou&hl=en-IN`,
    type: "app",
  },
];
const MyWork = () => {
  const { completeLoading } = useContext(AppContext);
  const containerRef = useRef(null);
  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });
  const isInViewProject = useInView(projectsRef, { once: true });
  const [project, setProject] = useState(projectsArray[0]);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });
  // ===============parent scroll==================//
  const backgroundY = useTransform(springScroll, [0, 1], ["0%", "100%"]);
  // ===============frames scroll ================== //
  const framesY = useTransform(springScroll, [0, 1], ["0%", "-200%"]);
  const framesTwoY = useTransform(springScroll, [0, 1], ["-10%", "-270%"]);
  const framesThreeY = useTransform(springScroll, [0, 1], ["-20%", "-300%"]);
  // ===============frame scale================== //
  const framesScale = useTransform(springScroll, [0, 1], [0.8, 1.2]);
  const framesTwoScale = useTransform(springScroll, [0, 1], [0.6, 1.2]);
  const framesThreeScale = useTransform(springScroll, [0, 1], [0.4, 1.2]);
  // ==========X==================//
  const controls = useAnimation();

  useEffect(() => {
    if (isInViewProject) {
      console.log(isInViewProject);
      controls.start("visible");
    }
  }, [controls, isInViewProject]);
  return (
    <Stack height="150vh" overflow='hidden' ref={containerRef}>
      <Stack
        ref={headingRef}
        minHeight="50vh"
        component={motion.div}
        style={{ y: backgroundY }}
      >
        <AnimatePresence>
          {isInViewHeading && <Heading scrollY={scrollY} />}
        </AnimatePresence>
      </Stack>
      {/* <Stack minHeight="80vh" sx={{ position: "relative" }}>
           <Stack
            component={motion.div}
            variants={projectVariant}
            initial="hidden"
            animate={controls}
            ref={projectsRef}
          >
            <Spline scene={project.spline} onLoad={() => completeLoading()} />
          </Stack>
       </Stack> */}
      <Stack
        component={motion.div}
        style={{ y: framesY, scale: framesScale }}
        mt={"64px"}
      >
        <FrameOne color="#d6fb41" />
      </Stack>
      <Stack
        component={motion.div}
        style={{ y: framesTwoY, scale: framesTwoScale }}
      >
        <FrameOne color="#e3ff73" />
      </Stack>
      <Stack
        component={motion.div}
        style={{ y: framesThreeY, scale: framesThreeScale }}
      >
        <FrameOne color="#ffffff" />
      </Stack>
    </Stack>
  );
};

export default MyWork;
