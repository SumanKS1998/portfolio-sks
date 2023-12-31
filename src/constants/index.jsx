import Images from "../assets";

export const constants = {
  transitions: [0.6, 0.01, -0.05, 0.9],
  projectsArray: [
    {
      name: "Niyasa Global",
      spline: `https://prod.spline.design/CU1Kx8z0auNpWthe/scene.splinecode`,
      description:
        "Explore endless opportunities for studying abroad and visa services at Niyasa Global. Expert guidance, visa assistance, and valuable resources. Unlock a world of possibilities today!",
      link: `https://eduniyasa.in/`,
      type: "web",
      image: Images.Niyasa,
      techStack: [
        {
          name: "React",
          icon: Images.ReactLogo,
        },
        {
          name: "Firebase",
          icon: Images.Firebase,
        },
        {
          name: "Framer Motion",
          icon: Images.FramerMotion,
        },
        {
          name: "Material UI",
          icon: Images.MaterialUi,
        },
      ],
    },
    {
      name: "WHY Emotional Support &Therapy",
      spline: `https://prod.spline.design/l7mpeh5NjFiAHjaw/scene.splinecode`,
      description:
        "Get the understanding and guidance you need to navigate life's challenges, anytime, anywhere. Find solace, healing, and empowerment with WHY.",
      link: `https://play.google.com/store/apps/details?id=com.wehearyou&hl=en-IN`,
      type: "app",
      image: Images.Why,
      techStack: [
        {
          name: "Expo",
          icon: Images.Expo,
        },
        {
          name: "Firebase",
          icon: Images.Firebase,
        },
      ],
    },
  ],
};
export const tools = [
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: Images.ReactLogo,
    description: "A JavaScript library for building user interfaces.",
    type: "Front-end",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: Images.Javascript,
    description:
      "A high-level programming language commonly used for web development.",
    type: "Front-end",
  },
  {
    name: "Material UI",
    link: "https://material-ui.com/",
    icon: Images.MaterialUi,
    description:
      "A popular React UI framework that provides pre-built components following the Material Design guidelines.",
    type: "Front-end",
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    icon: Images.Firebase,
    description:
      "A comprehensive platform for building web and mobile applications, offering various backend services.",
    type: "Back-end",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
    icon: Images.Tailwind,
    description:
      "A utility-first CSS framework that provides a set of pre-defined classes to style web elements.",
    type: "Front-end",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: Images.Typescript,
    description:
      "A typed superset of JavaScript that adds static types to the language.",
    type: "Front-end",
  },
  {
    name: "Expo",
    link: "https://reactnative.dev/",
    icon: Images.Expo,
    description:
      "A set of tools and services for building cross-platform mobile applications with React Native.",
    type: "Front-end",
  },
  {
    name: "Framer Motion",
    link: "https://www.framer.com/api/motion/",
    icon: Images.FramerMotion,
    description:
      "A React library for creating smooth and interactive animations.",
    type: "Front-end",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    icon: Images.NodeJs,
    description:
      "A runtime environment for executing JavaScript code outside the browser, typically on the server-side.",
    type: "Back-end",
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: Images.NextJS,
    description:
      "A React framework for building server-side rendered (SSR) and statically generated (SSG) websites.",
    type: "Front-end",
  },
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: Images.HTML,
    description:
      "The standard markup language for creating web pages and applications.",
    type: "Front-end",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: Images.CSS,
    description:
      "The style sheet language used for describing the visual presentation of a document written in HTML.",
    type: "Front-end",
  },
];

export const socialLinks = [
  {
    socialLink: "https://github.com/SumanKS1998",
    socialPlatform: "GitHub",
  },
  {
    socialLink: "https://www.linkedin.com/in/suman-kumar-sinha",
    socialPlatform: "LinkedIn",
  },
  {
    socialLink: "https://www.instagram.com/s_u_m_a_n_s_i_n_h_a/",
    socialPlatform: "Instagram",
  },
];
