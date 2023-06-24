import { Box, Button, Stack, Tooltip } from "@mui/material";
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
const Heading = () => {
  const { scrollY } = useScroll();

  const springRotator = useSpring(scrollY, {
    stiffness: 50,
    damping: 30,
  });
  const rotateStar = useTransform(springRotator, [0, 1000], [0, 1000]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const title = `MY JOBS`.split("");
  return (
    <Stack mx={"32px"} ref={ref}>
      <AnimatePresence>
        {isInView && (
          <Stack
            direction={{ xs: "column", lg: "row" }}
            component={motion.div}
            initial="hidden"
            animate="visible"
            alignItems={{ xs: "center", lg: "flex-start" }}
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
                    <HeadingText sx={{ fontSize: "10vw", lineHeight: "85%" }}>
                      {item}
                    </HeadingText>
                  </motion.div>
                );
              })}
            </Stack>
            <Stack direction="row">
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
            <Stack
              component={motion.div}
              width={{ xs: "100%", lg: "38%", xl: "28%" }}
              textAlign={{ xs: "center", lg: "left" }}
            >
              <MediumText
                variant="h3"
                variants={titleVariants}
                component={motion.div}
              >
                Explore some of the
              </MediumText>
              <MediumText
                variant="h3"
                variants={titleVariants}
                component={motion.div}
              >
                exciting projects I've
              </MediumText>
              <MediumText
                variant="h3"
                variants={titleVariants}
                component={motion.div}
              >
                worked on throughout
              </MediumText>
              <MediumText
                variant="h3"
                variants={titleVariants}
                component={motion.div}
              >
                my career.
              </MediumText>
            </Stack>
          </Stack>
        )}
      </AnimatePresence>
    </Stack>
  );
};
const MyWork = () => {
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
  const isInViewProjects = useInView(projectsRef, { once: true });
  const [project, setProject] = useState(projectsArray[0]);
  const { scrollY } = useScroll();
  const arrowSpringRotation = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
  });
  const arrowRightRotation = useTransform(
    arrowSpringRotation,
    [0, 1000],
    [180, 0]
  );
  const arrowLeftRotation = useTransform(
    arrowSpringRotation,
    [0, 1000],
    [180, 0]
  );
  const nextProject = () => {
    if (project.name === projectsArray[projectsArray.length - 1].name) {
      setProject(projectsArray[0]);
      return;
    }

    setProject(projectsArray[1]);
  };
  return (
    <>
      <Heading />
      <Stack ref={projectsRef} minHeight="80vh" sx={{ position: "relative" }}>
        <AnimatePresence>
          {isInViewProjects && (
            <Stack>
              <Stack>
                <Spline scene={project.spline} />
              </Stack>
            </Stack>
          )}
        </AnimatePresence>
      </Stack>
    </>
  );
};

export default MyWork;
