import { Box, Stack } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { tools } from "../../../constants";
import Heading from "../MyWork/Heading";

const ToolColumn = ({ tools, translateY, scale }) => {
  return (
    <Stack>
      {tools.map((item, i) => (
        <Stack
          key={i}
          component={motion.div}
          style={{ y: translateY ,scale}}
          alignItems="center"
          height="50vh"
          width="30vw"
          justifyContent="center"
          position="relative"
          zIndex={999}
         >
          <Box
            component="img"
            src={item.icon}
            sx={{ width: "200px", height: "200px" }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

const MyTools = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const { scrollY, scrollYProgress } = useScroll();
  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });
  const translateY1 = useTransform(springScrollY, [0, 1], ["100%", "-100%"]);
  const translateY2 = useTransform(springScrollY, [0, 1], ["200%", "-200%"]);
  const translateY3 = useTransform(springScrollY, [0, 1], ["300%", "-300%"]);

  return (
    <Stack
      component={motion.div}
      sx={{
        position: "sticky",
        top: "0px",
        backgroundColor: "#111111",
        zIndex: 4,
        borderRadius: "5em 5em 0 0 ",
        height: "100%",
      }}
    >
      <Stack
        alignItems="center"
        height={"200vh"}
        width="100%"
        pt={35}
        ref={containerRef}
      >
        <AnimatePresence>
          {isInView && (
            <Stack
              sx={{
                position: "sticky",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Heading
                scrollY={scrollY}
                hideSubHeading={true}
                headingText={`TECH\u00a0STACK`}
                subHeadingText={[
                  `My Tools ⛏️  for Crafting `,
                  `Exceptional Products.`,
                ]}
              />
            </Stack>
          )}
        </AnimatePresence>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <ToolColumn
            scale={0.6}
            tools={tools.slice(0, 4)}
            translateY={translateY1}
          />
          <ToolColumn
            scale={0.8}
            tools={tools.slice(4, 8)}
            translateY={translateY2}
          />
          <ToolColumn
            scale={1.2}
            tools={tools.slice(8)}
            translateY={translateY3}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyTools;
