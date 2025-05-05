import pythonDS from "../assets/python_ds.pdf";
import mongodb from "../assets/MongoDB.pdf";
import awsCloud from "../assets/awsCloud.pdf";
import dockerKubernetes from "../assets/dockerKubernetes.pdf";
import react from "../assets/react.pdf";

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Redux",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Go",
    "FastAPI",
    "GraphQL",
    "RESTful APIs",
    "WebSockets",
    "Firebase",
    "Microservices",
  ],
  data: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
    "Apache Spark",
    "PySpark",
    "Apache Kafka", 
    "TensorFlow",   
  ],
  cloud: [
    "AWS",
    "GCP",
    "Docker",
    "Vercel",
  ],
  dev_tools: [
    "Git",
    "GitHub",
    "Postman",
    "Vim",
  ],
};

export const workExperience = [
  {
    title: "Student Intern",
    company: "Gustovalley Technovations",
    period: "Apr 2021 - May 2021",
    description:
      "Developed a heart disease diagnosis model achieving 85.81% accuracy and deployed it via a Flask-based API for real-time patient diagnosis, reducing manual analysis time by 40%",
  },
];



export const projects = [
  {
  title: "DevConnect - A Social Media Platform for Developers",
  description:
    "Built a responsive social media platform for developers with real-time updates and AI-powered suggestions",
  technologies: ["React", "Vite", "Tailwind CSS", "NextAuth.js", "ElasticSearch", "WebSockets", "MongoDB", "TensorFlow.js", "Vercel", "AWS"],
  githubLink: "https://github.com/mmerlyn/devconnect",
},
{
  title: "SensorStream - Streaming Data Pipeline & Dashboard",
  description:
    "Built a real-time streaming pipeline to process and visualize sensor data using Python, Spark, PostgreSQL, Docker, and a React dashboard",
  technologies: ["Python", "Apache Spark", "PostgreSQL", "Docker", "React.js", "Streaming Data"],
  githubLink: "https://github.com/mmerlyn/sensor-stream",
},
{
  title: "Lilac - An E-commerce Platform",
  description:
    "Designed a microservices-based e-commerce platform with optimized performance",
  technologies: ["Microservices", "React.js", "Nest.js", "Typescript", "MongoDB", "Docker", "Tailwind CSS", "RestAPIs"],
  githubLink: "https://github.com/mmerlyn/lilac",
},
{
  title: "React-Resto App - Food Ordering UI",
  description:
    "Developed a single-page food ordering application with modular architecture",
  technologies: ["React.js", "Redux", "JavaScript", "Tailwind CSS"],
  githubLink: "https://github.com/mmerlyn/react-resto-app",
},
{
  title: "Sales Management System for Farmers",
  description:
    "Created a digital sales reporting portal for farmers to optimize revenue forecasting",
  technologies: ["PHP", "MySQL", "HTML/CSS"],
  githubLink:
    "https://github.com/mmerlyn/sales-management-system-for-farmers",
},
{
  title: "Fertilizer Recommendation System",
  description:
    "Developed a CNN model (88.24% accuracy) with image-based diagnosis for real-time fertilizer guidance",
  technologies: ["Python", "Machine Learning", "Image Classification", "CNN", "OpenCV", ],
  githubLink:
    "https://github.com/mmerlyn/fertilizer-recommendation",
},
{
  title: "American Sign Language Translator for Deaf and Speech-impaired",
  description:
    "Built a real-time ASL alphabet recognition app using CNN, OpenCV, and TensorFlow with 99% training accuracy",
  technologies: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
  githubLink:
    "https://github.com/mmerlyn/asl-translator",
},
{
  title: "Analysis of Tomato Prices in Karnataka using Machine Learning",
  description:
    "Built a Flask web app using Gradient Boosting (80% accuracy) to forecast monthly tomato prices from supply data",
  technologies: ["Python", "Machine Learning", "NumPy", "Scikit-learn", "Pandas", "Flask"],
  githubLink:
    "https://github.com/mmerlyn/analysis-of-tomato-prices",
},
];

export const publications = [
{
title:
  "Co-Author - \"Nitrogen Deficiency Detection in Paddy for Urea Fertilizer Management\"",
journal: "UIJRT, Volume 02, Issue 07, 2021 (ISSN: 2582-6832)",
link: "https://uijrt.com/articles/v2/i7/UIJRTV2I70009.pdf",
},
{
title: "Second Prize - \"Analysis of Tomato Prices in Karnataka Using Machine Learning\"",
journal: "Project Contest, Department of CSE, BMSIT",
link: "https://bmsit.ac.in/public/assets/pdf/cse/pbl/PBL%202018-19%20Odd%20Report.pdf",
},
]; 

export const certifications = [
{
title: "Google Cloud Data Analytics Certificate",
skills: ["Cloud Computing", "BigQuery", "Google Cloud", "Data Modeling", "Data Transformation", "Data Analytics", "Data Visualization"],
platform: "Google Cloud",
verify: "https://www.credly.com/badges/750e57fc-395d-47ee-8d57-b7f187e7c998",
},
{
title: "AWS Cloud Practitioner Essentials",
skills: ["Cloud Computing", "Cloud Economics", "AWS Global Infrastructure", "AWS Security"],
platform: "AWS",
verify: awsCloud
},
{
  title: "React - The Complete Guide 2023",
  skills: ["React.js", "React Router", "Redux", "Context API", "Form Handling & Validations", "Component Reusability"],
  platform: "Udemy",
  verify: react
},
{
  title: "MongoDB - The Complete Developer's Guide 2023",
  skills: ["MongoDB", "JSON", "Data Modeling"],
  platform: "Udemy",
  verify: mongodb,
},
{
  title: "Docker & Kubernetes: The Practical Guide 2023",
  skills: ["Docker", "Docker Compose", "Kubernetes"],
  platform: "Udemy",
  verify: dockerKubernetes,
}, 
{
  title: "Introduction to PySpark",
  skills: ["Big Data", "Python", "PySpark", "PySparkSQL"],
  platform: "DataCamp",
  verify: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7d1f68253152b174e4ac69231fcc206eaad2d0f3",
},
{
title: "Python Data Fundamentals",
skills: ["Python", "Statistics", "Exploratory Data Analysis", "Data Manipulation", "Data Visualization"],
platform: "Datacamp",
verify: "https://www.datacamp.com/completed/statement-of-accomplishment/track/b333a94ce20fb7da9eb367447de9f654635412c9",
},
{
title: "Python Data Structures",
skills: ["Python Programming", "Data Structures", "Data Management", "Problem Solving"],
platform: "Coursera",
verify: pythonDS,
}, 
      
];