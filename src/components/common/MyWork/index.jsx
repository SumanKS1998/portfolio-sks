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

const MyWork = () => {
  const { completeLoading } = useContext(AppContext);
  const projectRefOne = useRef(null);
  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });
  const isInViewProject = useInView(projectRefOne);
  const [project, setProject] = useState(constants[`projectsArray`][0]);
  const { scrollY } = useScroll();
  console.log(isInViewProject);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInViewProject) {
      console.log(isInViewProject, "asdasdasd");
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInViewProject]);
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
        delay:0.5
      },
    },
  };
  const renderChips = ({ type, text, index, data, bgcolor, color }) => {
    const animationVariant = index === 1 ? chipVariant : chipBelowVariant;
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
        variants={chipContainerVariant}
        initial="hidden"
        animate={controls}
        ref={projectRefOne}
      >
        <FrameOne color="#d6fb41">
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
            <ParallaxText>
              <HeadingText
                alignItems="center"
                direction="row"
                component={Stack}
                sx={{ color: "#111111" }}
                variant="h3"
              >
                Niyasa Global{" "}
                <img src={Images.StarSvg} style={{ width: "30px" }} /> Study
                Abroad
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
              type: "web",
              text: "Visit Website",
              index: 1,
              data: constants[`projectsArray`][0],
              bgcolor: "#111",
              color: "#d6fb41",
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
            {renderChips({
              type: "web",
              text: "React",
              index: 2,
              data: { link: "https://react.dev/" },
              bgcolor: "#5ed3f3",
            })}
            {renderChips({
              type: "web",
              text: "MUI",
              index: 1,
              data: { link: "https://mui.com/" },
              bgcolor: "#007fff",
            })}
            {renderChips({
              type: "web",
              text: "Framer Motion",
              index: 2,
              data: { link: "https://www.framer.com/motion/" },
              bgcolor: "#f74aa6",
            })}
          </Stack>
      
        </FrameOne>
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
