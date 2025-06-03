import React from "react";
import { motion } from "framer-motion";
import DisplayHead from "../components/DisplayHead";
import Projects from "../components/Projects";
import Card from "../components/Card";
import Api from "../components/Api";

const frontProjectList = [
  {
    title: "TAC — GOOGLE FONTS COMMISSIONED TYPEFACE",
    role: "REACCT DEVELOPER",
    specification: "REACT - JS - TAILWIND - FRAMER",
    company: "TAC",
    link: "https://fonts.google.com",
    external: true
  },
  {
    title: "FINTECH — KUDA BANKING SOFTWARE BANK APP",
    role: "INTERN",
    specification: "FRONTEND DEVELOPMENT",
    company: "KUDA",
    link: "https://fonts.google.com",
    external: true
  },
  {
    title: "ECOMMERCE — SHOPIFY CUSTOM THEME DEVELOPMENT",
    role: "FREELANCER",
    specification: "FULLSTACK DEVELOPMENT",
    company: "SHOPIFY",
    link: "https://fonts.google.com",
    external: true
  },
  {
    title: "MOBILE — REACT NATIVE FITNESS TRACKING APP",
    role: "LEAD DEVELOPER",
    specification: "MOBILE DEVELOPMENT",
    company: "FITTRACK",
    link: "https://fonts.google.com",
    external: true
  },
  {
    title: "WEB3 — DECENTRALIZED MARKETPLACE PLATFORM",
    role: "BLOCKCHAIN DEVELOPER",
    specification: "SMART CONTRACT DEVELOPMENT",
    company: "CRYPTOMART",
    link: "https://fonts.google.com",
    external: true
  },
];

const backProjectList = [
  {
    title: "TAC — GOOGLE FONTS COMMISSIONED TYPEFACE",
    role: "ART DIRECTOR",
    specification: "CREATIVE DEVELOPMENT",
    company: "TAC",
    external: false
  },
  {
    title: "FINTECH — KUDA BANKING SOFTWARE BANK APP",
    role: "INTERN",
    specification: "FRONTEND DEVELOPMENT",
    company: "KUDA",
    external: false
  },
  {
    title: "ECOMMERCE — SHOPIFY CUSTOM THEME DEVELOPMENT",
    role: "FREELANCER",
    specification: "FULLSTACK DEVELOPMENT",
    company: "SHOPIFY",
    external: false
  },
  {
    title: "MOBILE — REACT NATIVE FITNESS TRACKING APP",
    role: "LEAD DEVELOPER",
    specification: "MOBILE DEVELOPMENT",
    company: "FITTRACK",
    external: false
  },
  {
    title: "WEB3 — DECENTRALIZED MARKETPLACE PLATFORM",
    role: "BLOCKCHAIN DEVELOPER",
    specification: "SMART CONTRACT DEVELOPMENT",
    company: "CRYPTOMART",
    external: false
  },
];

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const Home = () => {
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
        <motion.div variants={sectionVariants}>
          <DisplayHead 
            TextA="FRONT" 
            TextB="END " 
            aboutText="Crafting pixel-perfect, responsive user interfaces with React, Vue.js, and TypeScript. I specialize in building dynamic web applications with seamless user experiences, leveraging modern tools like Tailwind CSS, Next.js, and state management libraries. From interactive dashboards to e-commerce platforms, I transform complex requirements into intuitive, accessible interfaces that users love." 
            id="frontend" 
          />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Projects projects={frontProjectList} />
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
            aboutText="Building native-quality mobile experiences with React Native and Expo. I create smooth, performant apps with custom animations using Reanimated, gesture handling, and platform-specific optimizations. From fitness trackers to fintech applications, I deliver cross-platform solutions that feel native on both iOS and Android while maintaining a single codebase." 
            id="mobile" 
          />
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Projects projects={backProjectList} />
        </motion.div>

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
            aboutText="Architecting scalable server-side solutions with Node.js and Express. I build robust APIs documented with Swagger, implement secure authentication systems, and optimize database performance across PostgreSQL, MySQL, and MongoDB. From payment integrations to real-time applications, I ensure reliable, maintainable backend systems that power modern web and mobile applications." 
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


