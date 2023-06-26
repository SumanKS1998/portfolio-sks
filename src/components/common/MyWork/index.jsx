import { Box, Button, Stack, Tooltip } from "@mui/material";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
  useScroll,
} from "framer-motion";
import { constants } from "../../../constants";
import Images from "../../../assets";
import AppContext from "../../../context/AppContext";
import Spline from "@splinetool/react-spline";
import Heading from "./Heading";
import FrameOne from "./Frames/FrameOne";
import { BoldText, HeadingText } from "../../styles/fonts";
import { ParallaxText } from "../ParallaxText";
const chipContainerVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const chipVariant = {
  hidden: {
    rotate: 0,
    y: 200,
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    rotate: 25,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const chipBelowVariant = {
  hidden: {
    rotate: 0,
    y: 200,
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: -25,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const splineVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.5,
    },
  },
};
const MyWork = () => {
  const { completeLoading } = useContext(AppContext);
  const projectRefOne = useRef(null);
  const projectRefTwo = useRef(null);
  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });
  const isInViewProject = useInView(projectRefOne);
  const isInViewProjectTwo = useInView(projectRefTwo);
  const [project, setProject] = useState(constants[`projectsArray`][0]);
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const controlsTwo = useAnimationControls();

  useEffect(() => {
    if (isInViewProject) {
      controls.start("visible");
    }
    if (isInViewProjectTwo) {
      controlsTwo.start("visible");
    }
  }, [controls, isInViewProject, isInViewProjectTwo]);

  const renderChips = ({ type, text, index, data, bgcolor, color }) => {
    const animationVariant = index % 2 !== 0 ? chipVariant : chipBelowVariant;
    const basicStyles = {
      py: 1,
      width: "max-content",
      px: 10,
      borderRadius: "100vmax",
      zIndex: 999,
      cursor: "pointer",
      bgcolor,
    };

    return (
      <Stack
        sx={basicStyles}
        component={motion.div}
        variants={animationVariant}
      >
        <HeadingText
          variant="h2"
          component={"a"}
          href={data.link}
          target="_blank"
          sx={{ textDecoration: "none", color: color || "#fff !important" }}
        >
          {text}
        </HeadingText>
      </Stack>
    );
  };
  const renderFrames = ({
    zIndex,
    bgcolor,
    top,
    marqueeText,
    project,
    tech,
    parallaxDirection,
    ref,
    control,
  }) => {
    
    return (
      <Stack
        component={motion.div}
        mt="64px"
        sx={{ position: "sticky", top, zIndex }}
        variants={chipContainerVariant}
        initial="hidden"
        animate={control}
        overflow="hidden"
      >
        <FrameOne color={bgcolor}>
          <Stack
            minHeight="100vh"
            justifyContent={"center"}
            alignItems="center"
          >
            <Stack
              width="max-content"
              height="max-content"
              component={motion.div}
              variants={splineVariant}
              ref={ref}
            >
              <Spline scene={project.spline} onLoad={() => completeLoading()} />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            sx={{
              position: "absolute",
              top: "10px",
              transform: `translateY('-50px')`,
              left: 0,
              right: 0,
            }}
          >
            <ParallaxText direction={parallaxDirection}>
              <HeadingText
                alignItems="center"
                direction="row"
                component={Stack}
                sx={{ color: "#737373" }}
                variant="h3"
              >
                {marqueeText}
              </HeadingText>
            </ParallaxText>
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              right: { xs: 0, xl: "10%" },
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {renderChips({
              text: "Visit Website",
              index: 1,
              data: { link: project.link },
              bgcolor: "#111",
              color: bgcolor,
            })}
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              left: { xs: 0, xl: "10%" },
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {tech.map((item, i) => {
              return (
                <>
                  {renderChips({
                    text: item.name,
                    index: i,
                    data: { link: item.link },
                    bgcolor: item.bgcolor,
                  })}
                </>
              );
            })}
          </Stack>
        </FrameOne>
      </Stack>
    );
  };
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

      {renderFrames({
        zIndex: 2,
        bgcolor: "#d6fb41",
        top: 0,
        marqueeText: "Niyasa Global 🌍 Study Abroad",
        parallaxDirection: true,
        project: constants[`projectsArray`][0],
        tech: [
          {
            name: "React",
            link: "https://react.dev/",
            bgcolor: "#5ed3f3",
          },
          {
            name: "MUI",
            link: "https://mui.com/",
            bgcolor: "#007fff",
          },
          {
            name: "Framer Motion",
            link: "https://www.framer.com/motion/",
            bgcolor: "#f74aa6",
          },
        ],
        ref: projectRefOne,
        control: controls,
      })}
      {renderFrames({
        zIndex: 3,
        bgcolor: "#e3ff73",
        top: "100px",
        marqueeText: "WHY 🧘🏻 Emotional Support &Therapy",
        parallaxDirection: false,
        project: constants[`projectsArray`][1],
        tech: [
          {
            name: "React Native",
            link: "https://reactnative.dev/",
            bgcolor: "#5ed3f3",
          },
          {
            name: "Firebase",
            link: "https://firebase.google.com/",
            bgcolor: "#fea613",
          },
        ],
        ref: projectRefTwo,
        control: controlsTwo,
      })}

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
