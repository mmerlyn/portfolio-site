import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFileAlt,
  faBriefcase,
  faCertificate,
  faGraduationCap,
  faEnvelope,
  faExternalLinkAlt,
  faChevronDown,
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as fabGithub,
  faLinkedinIn as fabLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Import components
import Header from "./Header";
import Footer from "./Footer";

// Import theme and utilities
import { scrollToSection } from "./utils";



// Import assets
import testImage from "../assets/my_photo.jpg";
import themeColors from "./themeConfig";
import {   projects, 
  publications, 
  skills, 
  workExperience, 
  certifications  } from "./data";

const Portfolio = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? themeColors.dark : themeColors.light;
  
  // Tab state
  const [activeTab, setActiveTab] = useState("skills");

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update body background when theme changes
  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    // Save theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, theme.background]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: theme.background,
        color: theme.text.primary,
        fontFamily: '"Roboto", "Segoe UI", sans-serif',
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Google Font Integration */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Component */}
      <Header 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        theme={theme}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="w-full max-w-full px-4 sm:px-6 lg:px-12 pt-20 pb-8 space-y-12 sm:space-y-16 overflow-x-hidden">
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Enhanced Background Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl"
              animate={{
                x: [0, 60, 20, 80, 0],
                y: [0, 30, 60, 40, 0],
                scale: [1, 1.2, 1.1, 1.3, 1],
                opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              style={{
                top: "5%",
                left: "8%",
                backgroundColor: isDarkMode
                  ? `${theme.primary}30`
                  : `${theme.primary}20`,
              }}
            />
            <motion.div
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl"
              animate={{
                x: [-40, 30, -20, 60, -40],
                y: [40, -20, -50, -30, 40],
                scale: [1, 1.15, 1, 1.2, 1],
                opacity: [0.4, 0.6, 0.5, 0.7, 0.4],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              style={{
                bottom: "10%",
                right: "8%",
                backgroundColor: isDarkMode
                  ? `${theme.secondary}30`
                  : `${theme.secondary}15`,
              }}
            />
            {/* Additional subtle orb */}
            <motion.div
              className="absolute w-40 sm:w-56 h-40 sm:h-56 rounded-full blur-3xl"
              animate={{
                x: [20, -20, 30, -10, 20],
                y: [-30, 10, 40, 20, -30],
                scale: [1, 1.1, 0.9, 1.05, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{
                top: "40%",
                left: "20%",
                backgroundColor: isDarkMode
                  ? `${theme.primary}20`
                  : `${theme.primary}10`,
                mixBlendMode: "multiply",
                opacity: isDarkMode ? 0.4 : 0.3,
              }}
            />
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-10 w-full max-w-6xl mx-auto px-6 py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Profile Image */}
              <motion.div
                className="lg:col-span-2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="relative">
                  {/* Animated ring around profile image */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 0 4px ${
                          isDarkMode
                            ? theme.primary + "40"
                            : theme.primary + "30"
                        }`,
                        `0 0 0 2px ${
                          isDarkMode
                            ? theme.primary + "60"
                            : theme.primary + "50"
                        }`,
                        `0 0 0 6px ${
                          isDarkMode
                            ? theme.primary + "30"
                            : theme.primary + "20"
                        }`,
                        `0 0 0 4px ${
                          isDarkMode
                            ? theme.primary + "40"
                            : theme.primary + "30"
                        }`,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: "calc(100% + 16px)",
                      height: "calc(100% + 16px)",
                      top: "-8px",
                      left: "-8px",
                    }}
                  />
                  <img
                    src={testImage}
                    alt="Merlyn Mercylona Profile"
                    className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover relative"
                    style={{
                      boxShadow: isDarkMode
                        ? "0 10px 40px rgba(187, 134, 252, 0.4)"
                        : "0 10px 30px rgba(98, 0, 238, 0.25)",
                    }}
                  />

                  {/* Material design floating badge */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 rounded-full py-1 px-3 flex items-center border-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(30, 30, 30, 0.9)"
                        : "white",
                      borderColor: theme.primary,
                      boxShadow: isDarkMode
                        ? `0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px ${theme.primary}50`
                        : `0 4px 12px rgba(98, 0, 238, 0.2)`,
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: theme.primary,
                      }}
                    >
                      MSCS @ SDSU
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="lg:col-span-3 text-center lg:text-left flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl font-bold mb-2"
                    style={{ color: theme.text.primary }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      Merlyn Mercylona
                    </motion.span>
                  </motion.h1>

                  <motion.h2
                    className="text-xl sm:text-2xl mb-5"
                    style={{ color: theme.primary }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Software Developer & CS Student
                  </motion.h2>
                </motion.div>

                <motion.p
                  className="text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0 text-justify"
                  style={{ color: theme.text.secondary }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Hi there! I'm Merlyn, a passionate Software Developer and current Master's student
                  in Computer Science at San Diego State University. I specialize in
                  <span style={{ color: theme.primary }}>
                    {" "}
                    Full-stack development
                  </span>
                  ,<span style={{ color: theme.primary }}> Microservices</span>,
                  and
                  <span style={{ color: theme.primary }}> Cloud-based solutions</span>
                  {" "}with a strong foundation in modern web technologies. Whether I'm crafting dynamic frontends with JavaScript or deploying resilient systems on AWS, I bring a problem-solving mindset and a passion for writing clean and maintainable code to every project I take on.

                </motion.p>

                {/* Quick Stats in Material Design Cards */}
                <motion.div
                  className="w-full flex justify-center lg:justify-start flex-wrap gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div
                    className="rounded-lg p-3 text-center"
                    style={{
                      backgroundColor: isDarkMode
                        ? `${theme.primary}20`
                        : `${theme.primary}10`,
                      border: `1px solid ${
                        isDarkMode ? theme.primary + "30" : theme.primary + "20"
                      }`,
                    }}
                  >
                    <div
                      className="text-sm"
                      style={{ color: theme.text.secondary }}
                    >
                      Projects
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: theme.primary }}
                    >
                      10+
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-3 text-center"
                    style={{
                      backgroundColor: isDarkMode
                        ? `${theme.primary}20`
                        : `${theme.primary}10`,
                      border: `1px solid ${
                        isDarkMode ? theme.primary + "30" : theme.primary + "20"
                      }`,
                    }}
                  >
                    <div
                      className="text-sm"
                      style={{ color: theme.text.secondary }}
                    >
                      Publications
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: theme.primary }}
                    >
                      1
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-3 text-center"
                    style={{
                      backgroundColor: isDarkMode
                        ? `${theme.secondary}20`
                        : `${theme.secondary}10`,
                      border: `1px solid ${
                        isDarkMode
                          ? theme.secondary + "30"
                          : theme.secondary + "20"
                      }`,
                    }}
                  >
                    <div
                      className="text-sm"
                      style={{ color: theme.text.secondary }}
                    >
                      Technologies
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: theme.secondary }}
                    >
                      20+
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="w-full flex justify-center lg:justify-start flex-wrap gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.a
                    href="https://github.com/mmerlyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: theme.primary,
                      color: theme.onPrimary,
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm sm:text-base gap-2"
                  >
                    <FontAwesomeIcon icon={fabGithub} />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/merlynmercylona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: theme.linkedin,
                      color: theme.onPrimary,
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm sm:text-base gap-2"
                  >
                    <FontAwesomeIcon icon={fabLinkedinIn} />
                    <span>LinkedIn</span>
                  </motion.a>
                
                </motion.div>

                {/* Improved Scroll Indicator with proper functionality */}
                <motion.div
                  className="flex justify-center lg:justify-start mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => scrollToSection("experience")}
                  >
                    <span
                      className="text-sm mb-2"
                      style={{ color: theme.text.secondary }}
                    >
                      Scroll to explore
                    </span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ color: theme.primary }}
                      className="text-lg"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-16 mt-16">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon
              icon={faCode}
              className="mr-2 sm:mr-3"
              style={{ color: theme.primary }}
            />
            Experience & Skills
          </h2>

          {/* Tab Navigation */}
          <div
            className="flex space-x-4 border-b"
            style={{
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
          >
            <button
              onClick={() => setActiveTab("skills")}
              style={{
                color:
                  activeTab === "skills" ? theme.primary : theme.text.tertiary,
                borderBottom:
                  activeTab === "skills"
                    ? `2px solid ${theme.primary}`
                    : "none",
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
              className="pb-2 px-4 text-sm sm:text-base transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              style={{
                color:
                  activeTab === "education"
                    ? theme.primary
                    : theme.text.tertiary,
                borderBottom:
                  activeTab === "education"
                    ? `2px solid ${theme.primary}`
                    : "none",
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
              className="pb-2 px-4 text-sm sm:text-base transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("work")}
              style={{
                color:
                  activeTab === "work" ? theme.primary : theme.text.tertiary,
                borderBottom:
                  activeTab === "work" ? `2px solid ${theme.primary}` : "none",
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
              className="pb-2 px-4 text-sm sm:text-base transition-colors"
            >
              Work Experience
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Frontend Skills */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: theme.text.primary }}
                  >
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm sm:text-base"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                          color: theme.text.secondary,
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: theme.text.primary }}
                  >
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm sm:text-base"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                          color: theme.text.secondary,
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Only showing a few skill categories to simplify code */}
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: theme.text.primary }}
                  >
                    Data
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.data.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm sm:text-base"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                          color: theme.text.secondary,
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: theme.text.primary }}
                  >
                    Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm sm:text-base"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                          color: theme.text.secondary,
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: theme.text.primary }}
                  >
                    Developer Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.dev_tools.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm sm:text-base"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.05)",
                          color: theme.text.secondary,
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                
                <div
                  className="p-4 sm:p-6 rounded-lg shadow-md"
                  style={{
                    backgroundColor: theme.surface,
                    boxShadow: isDarkMode
                      ? "0 4px 20px rgba(0,0,0,0.2)"
                      : "0 4px 20px rgba(0,0,0,0.1)",
                    transition:
                      "background-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-lg sm:text-xl mr-3"
                      style={{ color: theme.primary }}
                    />
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: theme.text.primary }}
                      >
                        Master of Science in Computer Science
                      </h3>
                      <p
                        className="text-sm sm:text-base"
                        style={{ color: theme.text.secondary }}
                      >
                        San Diego State University, Aug 2024 - May 2026 (Expected)
                      </p>
                    </div>
                    
                  </div>
                  
                </div>

                <div
                  className="p-4 sm:p-6 rounded-lg shadow-md"
                  style={{
                    backgroundColor: theme.surface,
                    boxShadow: isDarkMode
                      ? "0 4px 20px rgba(0,0,0,0.2)"
                      : "0 4px 20px rgba(0,0,0,0.1)",
                    transition:
                      "background-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-lg sm:text-xl mr-3"
                      style={{ color: theme.primary }}
                    />
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: theme.text.primary }}
                      >
                        Bachelor of Engineering in Computer Science
                      </h3>
                      <p
                        className="text-sm sm:text-base"
                        style={{ color: theme.text.secondary }}
                      >
                        Visvesvaraya Technological University
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
              </motion.div>
            )}

            {activeTab === "work" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 rounded-lg shadow-md"
                    style={{
                      backgroundColor: theme.surface,
                      boxShadow: isDarkMode
                        ? "0 4px 20px rgba(0,0,0,0.2)"
                        : "0 4px 20px rgba(0,0,0,0.1)",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="text-lg sm:text-xl mr-3"
                        style={{ color: theme.primary }}
                      />
                      <div>
                        <h3
                          className="text-lg sm:text-xl font-semibold"
                          style={{ color: theme.text.primary }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className="text-sm sm:text-base"
                          style={{ color: theme.text.secondary }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-sm sm:text-base"
                          style={{ color: theme.text.tertiary }}
                        >
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-sm sm:text-base mt-2 ml-8"
                      style={{ color: theme.text.secondary }}
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-16 mt-16">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className="mr-2 sm:mr-3"
              style={{ color: theme.primary }}
            />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
                style={{
                  backgroundColor: theme.surface,
                  borderRadius: "0.5rem",
                  boxShadow: isDarkMode
                    ? "0 4px 20px rgba(0,0,0,0.2)"
                    : "0 4px 20px rgba(0,0,0,0.1)",
                  padding: "1rem 1.5rem",
                  transition:
                    "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: theme.text.primary }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm sm:text-base mb-4"
                  style={{ color: theme.text.secondary }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${theme.primary}30`,
                        color: theme.primary,
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span
                      className="px-2 py-1 rounded-full text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${theme.primary}30`,
                        color: theme.primary,
                      }}
                    >
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
                {project.githubLink && (
                  <div className="mt-auto flex justify-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full hover:opacity-90 text-sm sm:text-base gap-2"
                      style={{
                        backgroundColor: isDarkMode
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.05)",
                        color: theme.text.primary,
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                    >
                      <FontAwesomeIcon icon={fabGithub} />
                      <span>View Project</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="pt-16 mt-16">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon
              icon={faFileAlt}
              className="mr-2 sm:mr-3"
              style={{ color: theme.primary }}
            />
            Achievements
          </h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: theme.surface,
                  borderRadius: "0.5rem",
                  boxShadow: isDarkMode
                    ? "0 4px 20px rgba(0,0,0,0.2)"
                    : "0 4px 20px rgba(0,0,0,0.1)",
                  padding: "1rem 1.5rem",
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <h3
                  className="text-lg sm:text-xl font-semibold"
                  style={{ color: theme.text.primary }}
                >
                  {pub.title}
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: theme.text.secondary }}
                >
                  {pub.journal}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block transition-colors text-sm sm:text-base"
                    style={{ color: theme.primary }}
                  >
                    View
                  </a>
                  
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="pt-16 mt-16">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon
              icon={faCertificate}
              className="mr-2 sm:mr-3"
              style={{ color: theme.primary }}
            />
            Certifications
          </h2>
          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{
                backgroundColor: theme.surface,
                boxShadow: isDarkMode
                  ? "0 4px 20px rgba(0,0,0,0.2)"
                  : "0 4px 20px rgba(0,0,0,0.1)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: `${theme.primary}15` }}>
                  <th
                    className="p-4 sm:p-6 text-left text-sm sm:text-base font-semibold"
                    style={{ color: theme.text.primary }}
                  >
                    Title
                  </th>
                  <th
                    className="p-4 sm:p-6 text-left text-sm sm:text-base font-semibold"
                    style={{ color: theme.text.primary }}
                  >
                    Skills
                  </th>
                  <th
                    className="p-4 sm:p-6 text-left text-sm sm:text-base font-semibold"
                    style={{ color: theme.text.primary }}
                  >
                    Platform
                  </th>
                  <th
                    className="p-4 sm:p-6 text-left text-sm sm:text-base font-semibold"
                    style={{ color: theme.text.primary }}
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((cert, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b last:border-b-0"
                    style={{
                      borderColor: isDarkMode
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                      transition: "border-color 0.3s ease",
                    }}
                  >
                    <td
                      className="p-4 sm:p-6 align-middle"
                      style={{ color: theme.text.primary }}
                    >
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faCertificate}
                          className="text-lg mr-3 hidden sm:block"
                          style={{ color: theme.primary }}
                        />
                        <span className="text-sm sm:text-base">
                          {cert.title}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 align-middle">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block px-2 py-1 text-xs sm:text-sm rounded-full"
                            style={{
                              backgroundColor: `${theme.primary}30`,
                              color: theme.primary,
                              transition:
                                "background-color 0.3s ease, color 0.3s ease",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td
                      className="p-4 sm:p-6 align-middle"
                      style={{ color: theme.text.primary }}
                    >
                      <span className="text-sm sm:text-base">
                        {cert.platform}
                      </span>
                    </td>
                    <td className="p-4 sm:p-6 align-middle">
                      <a
                        href={cert.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm sm:text-base hover:opacity-80"
                        style={{
                          color: theme.primary,
                          transition: "opacity 0.2s ease",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="mr-2"
                        />
                        Verify
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16 mt-16">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
            style={{ color: theme.text.primary }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 sm:mr-3"
              style={{ color: theme.primary }}
            />
            Get In Touch
          </h2>
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: theme.surface,
              boxShadow: isDarkMode
                ? "0 4px 20px rgba(0,0,0,0.2)"
                : "0 4px 20px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  className="text-base sm:text-lg mb-4"
                  style={{ color: theme.text.secondary }}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="mr-3"
                      style={{ color: theme.primary}}
                    />
                    <a
                      href="mailto:mmakireddy8011@sdsu.edu"
                      style={{ color: theme.text.secondary }}
                      className="text-sm sm:text-base hover:underline"
                    >
                      mmakireddy8011@sdsu.edu
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={fabLinkedinIn}
                      className="mr-3"
                      style={{ color: theme.primary }}
                    />
                    <a
                      href="https://www.linkedin.com/in/merlynmercylona/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.text.secondary }}
                      className="text-sm sm:text-base hover:underline"
                    >
                      linkedin.com/in/merlynmercylona
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer 
        isDarkMode={isDarkMode}
        theme={theme}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Portfolio;