import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Camera, Briefcase, File, Code } from "lucide-react";

import testImage from "../assets/my_photo.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
}

interface Publication {
  title: string;
  journal: string;
  link?: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "DevConnect - Social Media Platform for Developers",
      description:
        "Built a responsive social media platform for developers with real-time updates and AI-powered suggestions",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "NextAuth.js",
        "ElasticSearch",
        "WebSockets",
        "GraphQL",
        "MongoDB",
        "TensorFlow.js",
        "Vercel",
        "AWS",
      ],
      githubLink: "https://github.com/mmerlyn/devconnect",
    },
    {
      title: "Lilac - An E-commerce Platform",
      description:
        "Designed a microservices-based e-commerce platform with optimized performance",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Nest.js",
        "RESTful APIs",
        "TypeScript",
        "Redis",
        "Microservices",
      ],
      githubLink: "https://github.com/mmerlyn/lilac",
    },
    {
      title: "React-Resto App - Food Ordering UI",
      description:
        "Developed a single-page food ordering application with modular architecture",
      technologies: ["React.js", "Redux", "TypeScript"],
      githubLink: "https://github.com/mmerlyn/react-resto-app",
    },
    {
      title: "Sales Management System for Farmers",
      description:
        "Created a digital sales reporting portal for farmers to optimize revenue forecasting",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      githubLink: "https://github.com/mmerlyn/sales-management-system-for-farmers",
    },
  ];

  const publications: Publication[] = [
    {
      title:
        "Nitrogen Deficiency Detection in Paddy for Urea Fertilizer Management",
      journal: "UIJRT, Volume 02, Issue 07, 2021 (ISSN: 2582-6832)",
      link: "https://uijrt.com/articles/v2/i7/UIJRTV2I70003.pdf",
    },
    {
      title: "Analysis of Tomato Prices in Karnataka Using Machine Learning",
      journal: "Project Contest, Department of CSE, BMSIT",
      link: "https://bmsit.ac.in/public/assets/pdf/cse/pbl/PBL%202018-19%20Odd%20Report.pdf",
    },
  ];

  interface WorkExperience {
    title: string;
    company: string;
    period: string;
    description: string;
  }

  // Add new state for active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Add skills data
  const skills = {
    frontend: ["React", "JavaScript", "HTML/CSS", "TypeScript", "Redux", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "GoLang", "Express.js"],
    development: ["RESTful APIs", "GraphQL APIs", "WebSockets", "Firebase", "Microservices"],
    databases: ["SQL", "MySQL", "PostGRESQL", "NoSQL", "MongoDB", "ElasticSearch", "Redis"],
    cloud_devops: ["AWS", "GCP", "Vercel", "Docker"],
    developer_tools: ["Git", "GitHub", "Postman", "Vim"],
    frameworks_libraries: ["TensorFlow", "PySpark"],
  };

  // Add work experience data
  const workExperience: WorkExperience[] = [
    {
      title: "Software Engineer Intern",
      company: "Tech Corp",
      period: "May 2023 - Aug 2023",
      description:
        "Developed scalable web applications using React and Node.js, improved API performance by 30%",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "Jan 2022 - Apr 2023",
      description:
        "Built RESTful APIs and implemented microservices architecture",
    },
  ];

  const LinkedInIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      {/* Header (remains the same) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md p-4 bg-gray-800/90">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-12">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2 sm:mb-0">
            Merlyn Mercylona
          </h1>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#publications"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              Achievements
            </a>
            <a
              href="#publications"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              Certifications
            </a>
            <a
              href="#publications"
              className="text-sm sm:text-base hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content - Added overflow-x-hidden and max-w-full */}
      <main className="w-full max-w-full px-4 sm:px-6 lg:px-12 pt-20 pb-8 space-y-12 sm:space-y-16 overflow-x-hidden">
        {/* About Section (with slight modifications) */}
        <section
          id="about"
          className="h-screen flex items-center justify-center relative overflow-hidden snap-start"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "10%", left: "5%" }}
            />
            <motion.div
              className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                x: [-40, 40, -40],
                y: [40, -40, 40],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "15%", right: "5%" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto p-6 sm:p-8 z-10"
          >
            {/* Image */}
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img
                src={testImage}
                alt="Merlyn Mercylona Profile"
                className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Text and Buttons */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100">
                Merlyn Mercylona
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
                Hey there! I'm Merlyn, a passionate Software Developer and current Master's student 
                in Computer Science at SDSU.
                Backed by a strong academic foundation and hands-on experience with modern web stacks, 
                I’ve built real-time apps, microservice architectures, and intelligent search systems. 
                Whether it’s JavaScript on the frontend or cloud deployments on AWS, I bring a 
                problem-solving mindset and a passion for clean, maintainable code to every project I take on.       
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/mmerlyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-700 text-purple-100 rounded-full hover:bg-purple-600 hover:text-white transition-colors text-sm sm:text-base gap-2"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <GitHubIcon />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/merlynmercylona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base gap-2"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <LinkedInIcon />
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/path/to/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base gap-2"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <File className="w-6 h-6" />
                  </span>
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* New Experience Section with Tabs */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center text-gray-100">
            <Code className="mr-2 sm:mr-3 w-6 h-6" /> Experience & Skills
          </h2>

          {/* Tab Navigation */}
          <div className="flex space-x-4 border-b border-gray-600">
            <button
              onClick={() => setActiveTab("skills")}
              className={`pb-2 px-4 text-sm sm:text-base ${
                activeTab === "skills"
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              } transition-colors`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`pb-2 px-4 text-sm sm:text-base ${
                activeTab === "education"
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              } transition-colors`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`pb-2 px-4 text-sm sm:text-base ${
                activeTab === "work"
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              } transition-colors`}
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.development.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Database Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud DevOps Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Cloud/DevOps
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud_devops.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Developer Tools Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Developer Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.developer_tools.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Framework- Libraries Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">
                    Frameworks/Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks_libraries.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base"
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
                <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    San Diego State University, Aug 2024 – May 2026
                  </p>
                </div>
                <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Visvesvaraya Technological University
                  </p>
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
                    className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {exp.company}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {exp.period}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 mt-2">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center text-gray-100">
            <Briefcase className="mr-2 sm:mr-3 w-6 h-6" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base mb-4 text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubLink && (
                  <div className="mt-auto flex justify-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-24 py-2 bg-gray-600 text-gray-100 rounded-full hover:bg-gray-500 hover:text-white transition-colors text-sm sm:text-base gap-2"
                    >
                      <span className="flex items-center justify-center w-6 h-6">
                        <GitHubIcon />
                      </span>
                      <span>View Project</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center text-gray-100">
            <FileText className="mr-2 sm:mr-3 w-6 h-6" /> 
            Achievements
          </h2>
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                {pub.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {pub.journal}
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-500 mt-2 inline-block transition-colors text-sm sm:text-base"
                >
                  View
                </a>
              )}
            </motion.div>
          ))}
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center text-gray-100">
            <Camera className="mr-2 sm:mr-3 w-6 h-6" /> Certifications
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["Photography", "Traveling", "Reading Tech Blogs", "Cooking"].map(
              (hobby, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-gray-200 text-sm sm:text-base"
                >
                  {hobby}
                </motion.span>
              )
            )}
          </div>
        </section>
      </main>

      {/* Footer (remains the same) */}
      <footer className="bg-gray-700 py-6 relative">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Logo/Description */}
            <div className="space-y-4">
              <a
                href="#"
                aria-label="Go to homepage"
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold text-gray-100">Merlyn</span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              </a>
              <p className="text-gray-300 text-sm sm:text-base max-w-xs">
                A passionate Software Engineer and Computer Science student
                dedicated to creating innovative tech solutions that make a
                difference.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#publications"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    Publications
                  </a>
                </li>
              </ul>
            </div>

            {/* Let's Connect */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                Let's Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/merlynmercylona"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/mmerlyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="mailto:merlyn@example.com"
                  aria-label="Email Me"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-6 border-t border-gray-600 text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              © 2025 Merlyn Mercylona. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Optional decorative shape */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"></div>
      </footer>
    </div>
  );
};

export default Portfolio;
