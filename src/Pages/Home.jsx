import React from "react";
import { motion } from "framer-motion";
import DisplayHead from "../components/DisplayHead";
import Projects from "../components/Projects";
import Card from "../components/Card";
import Api from "../components/Api";
import axiosInstance from "../axios/axiosInstance"
import { useQuery } from "@tanstack/react-query";


const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Home = () => {
  // const {
  //   isLoading: FeIsLoading,
  //   error: FeError,
  //   data: FeData,
  // } = useQuery({
  //   queryKey: ["frontend-data"],
  //   queryFn: async () => {
  //     const response = await axiosInstance.get("/frontend/get-data");
  //     return response.data;
  //   },
  // });

  // const frontendProjects = FeData?.projects || [];

  const {
    isLoading: MaIsLoading,
    error: MaError,
    data: MaData,
  } = useQuery({
    queryKey: ["mobile-data"],
    queryFn: async () => {
      const response = await axiosInstance.get("/mobile/get-all-mobileApps");
      return response.data;
    },
  });

  const MobileAppProject = MaData?.data || [];

  return (
    <motion.div
      className="bg-transparent overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >

        {/* Mobile Section */}
        <motion.div
          className="md:mt-2 mt-10"
          variants={sectionVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DisplayHead
            TextA="MOBILE"
            TextB="APP "
            aboutText="I develop cross-platform mobile apps with React Native and Expo, delivering smooth, native like experiences on both iOS and Android. Using Reanimated for advanced gestures and animations, I build intuitive apps from fitness trackers to fintech platforms with responsive layouts and platform specific optimizations."
            id="mobile"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Projects
            projects={MobileAppProject}
            BeIsLoading={MaIsLoading}
            BeError={MaError}
            type="mobile"
          />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card />
        </motion.div>

        {/* <motion.div variants={sectionVariants}>
          <DisplayHead
            TextA="FRONT"
            TextB="END "
            aboutText="I craft responsive, high-performance user interfaces using React, Vue.js, Nuxt.js, TypeScript, and JavaScript. With tools like Tailwind CSS, Next.js, Redux, Pinia, and React Query, I build clean, accessible UIs from admin dashboards and portfolios to e-commerce and fintech apps always with a focus on UX, speed, and pixel perfect"
            id="frontend"
          />
        </motion.div> */}

        {/* <motion.div
          variants={sectionVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Projects
            projects={frontendProjects}
            FeIsLoading={FeIsLoading}
            FeError={FeError}
            type="frontend"
          />
        </motion.div> */}

        {/* Backend Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DisplayHead
            TextA="BACK"
            TextB="END "
            aboutText="I design scalable, secure backend systems using Node.js and Express. I build and document RESTful APIs with Swagger, implement JWT and cookie based authentication, and integrate third-party services like payment gateways. I work with PostgreSQL, MongoDB, and MySQL, ensuring robust, maintainable, and performant backend services."
            id="backend"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Api />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;