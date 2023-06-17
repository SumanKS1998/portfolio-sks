// import {
//   AnimatePresence,
//   useInView,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Stack } from "@mui/material";
// import { BoldText } from "../../styles/fonts";
// import { constants } from "../../../constants";
// const MyWork = () => {
//   const { scrollYProgress } = useScroll();
//   const translateHeader = useTransform(scrollYProgress, [0, 1], [-900, -300]);
//   const { scrollYProgress: scrollYProgress2 } = useScroll({});
//   const workY = useTransform(scrollYProgress2, [0, 1], ["-100%", "0%"]);
//   const projectY = useTransform(scrollYProgress2, [0, 1], ["500%", "-10%"]);
//   const scaleProject = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 0.5, 1]);
//   const headerText = new Array(100).fill("MY WORK.").map((item, i) => item);
//   const titleText = `MYWORK`.split("");
//   const titleRef = useRef();
//   const workRef = useRef();
//   const inView = useInView(titleRef);
//   const renderWork = (height, width, left, top, delay) => {
//     return (
//       <Stack
//         sx={{
//           bgcolor: "#fff",
//           height,
//           width,
//           position: "absolute",
//           left,
//           top,
//         }}
//         component={motion.div}
//         style={{
//           y: projectY,
//           x: workY,
//           scale: scaleProject,
//           opacity: scaleProject,
//         }}
//       ></Stack>
//     );
//   };
//   return (
//     <Stack
//       sx={{
//         bgcolor: "#000",
//         width: "100%",
//         overflowX: "hidden",
//         minHeight: "100vh",
//       }}
//     >
//       <Stack
//         direction="row"
//         width="100%"
//         component={motion.div}
//         style={{ x: translateHeader }}
//         animate={{
//           stiffness: 500,
//         }}
//       >
//         {headerText.map((item, i) => (
//           <BoldText
//             key={i}
//             sx={{
//               color: i % 2 === 0 ? "#8559e9" : "#ffffe3",
//               fontSize: "32px",
//             }}
//             component={motion.div}
//           >
//             {item}
//           </BoldText>
//         ))}
//       </Stack>
//       <Stack
//         sx={{ bgcolor: "#000" }}
//         alignItems="center"
//         justifyContent="center"
//         position="relative"
//         height="100vh"
//         overflow="hidden"
//       >
//         {renderWork(300, 200, "10%", "10%", 0.2)}
//         {renderWork(250, 180, "80%", "30%", 0.4)}
//         {renderWork(250, 180, "30%", "70%", 0.3)}

//         <Stack
//           direction="row"
//           component={motion.div}
//           ref={titleRef}
//           height="12vw"
//           overflow="hidden"
//         >
//           <AnimatePresence>
//             {inView &&
//               titleText.map((item, i) => (
//                 <BoldText
//                   sx={{
//                     color: i % 2 === 0 ? "#8559e9" : "#ffffe3",
//                     fontSize: "10vw",
//                   }}
//                   key={i}
//                   component={motion.div}
//                   initial={{ y: 300 }}
//                   animate={{
//                     y: 0,
//                     transition: {
//                       delay: i * 0.07,
//                       ...constants["transitions"],
//                     },
//                   }}
//                 >
//                   {item}
//                 </BoldText>
//               ))}
//           </AnimatePresence>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default MyWork;
