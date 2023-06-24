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
const niyasa = `https://prod.spline.design/CU1Kx8z0auNpWthe/scene.splinecode`;
const why = `https://prod.spline.design/l7mpeh5NjFiAHjaw/scene.splinecode`;

const MyWork = () => {
  const { completeLoading } = useContext(AppContext);
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
  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });
  const isInViewProject = useInView(projectsRef, { once: true });
  const [project, setProject] = useState(projectsArray[0]);
  const { scrollY, scrollYProgress } = useScroll();
  // ===================FRames=====================//
  const scrollSpringValue = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });
  const scrollYFirstFrame = useTransform(
    scrollSpringValue,
    [0, 1],
    ["50%", "-10%"]
  );
  // ==========X==================//
  const controls = useAnimation();
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const projectVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1.4,
      },
    },
  };
  useEffect(() => {
    if (isInViewProject) {
      console.log(isInViewProject);
      controls.start("visible");
    }
   }, [controls, isInViewProject]);
  return (
    <Stack>
      <Stack ref={headingRef} minHeight='50vh'>
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
        height="100vh"
        bgcolor="#e3ff73"
        borderRadius="5em"
        component={motion.div}
        style={{ y: scrollYFirstFrame, position: "relative", zIndex: 99 }}
      ></Stack>
    </Stack>
  );
};

export default MyWork;
