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
          style={{ y: translateY, scale }}
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
            alt={item.icon}
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
  const translateY1 = useTransform(springScrollY, [0, 1], ["100%", "-150%"]);
  const translateY2 = useTransform(springScrollY, [0, 1], ["200%", "-250%"]);
  const translateY3 = useTransform(springScrollY, [0, 1], ["300%", "-350%"]);

  return (
    <Stack
      position="relative"
      sx={{ bgcolor: "#111111", borderRadius: "64px 64px 0 0" }}
      zIndex={4}
    >
      <Stack
        position="absolute"
        right={0}
        left={0}
        bottom={0}
        top={"65vh"}
        zIndex={4}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          <ToolColumn
            scale={1.5}
            tools={tools.slice(0, 4)}
            translateY={translateY1}
          />
          <ToolColumn
            scale={1.5}
            tools={tools.slice(4, 8)}
            translateY={translateY2}
          />
          <ToolColumn
            scale={1.8}
            tools={tools.slice(8)}
            translateY={translateY3}
          />
        </Stack>
      </Stack>
      <Stack
        component={motion.div}
        sx={{
          position: "sticky",
          top: "0px",
          backgroundColor: "#111111a1",
          zIndex: 4,
          borderRadius: "64px 64px 0 0",
          height: "100%",
          backdropFilter: "blur(100px)",
        }}
      >
        <Stack
          alignItems="center"
          height={"200vh"}
          width="100%"
          pt={35}
          ref={containerRef}
          position="relative"
          zIndex={4}
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
    </Stack>
  );
};

export default MyTools;
