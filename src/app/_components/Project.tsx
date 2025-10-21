"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// data/projects.js
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/username/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-drop functionality, and team collaboration features.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    githubLink: "https://github.com/username/taskapp",
    liveLink: "https://taskapp-demo.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current weather and forecasts using OpenWeather API with beautiful data visualizations.",
    image: "/projects/weather.jpg",
    technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-demo.com",
    category: "Frontend"
  },
  {
    id: 4,
    title: "REST API Backend",
    description: "A robust REST API backend with authentication, CRUD operations, and database management for a blogging platform.",
    image: "/projects/api.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Postman"],
    githubLink: "https://github.com/username/blog-api",
    liveLink: "https://api-blog-demo.com",
    category: "Backend"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubLink: "https://github.com/username/portfolio",
    liveLink: "https://myportfolio.com",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms, private messaging, and file sharing capabilities using WebSockets.",
    image: "/projects/chat.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/chat-app",
    liveLink: "https://chat-demo.com",
    category: "Full Stack"
  },
  {
    id: 7,
    title: "AWS Cloud Infrastructure",
    description: "Deployed and managed cloud infrastructure using AWS services including EC2, S3, and Lambda functions.",
    image: "/projects/aws.jpg",
    technologies: ["AWS", "EC2", "S3", "Lambda", "CloudFront"],
    githubLink: "https://github.com/username/aws-infra",
    liveLink: "https://aws-demo.com",
    category: "DevOps"
  },
  {
    id: 8,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with workout plans and progress monitoring.",
    image: "/projects/mobile.jpg",
    technologies: ["React Native", "Firebase", "Redux", "iOS", "Android"],
    githubLink: "https://github.com/username/fitness-app",
    liveLink: "https://fitness-demo.com",
    category: "Mobile App"
  }
];

// Categories for filtering
const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile App", "DevOps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left w-full lg:w-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-2">
              My <span className="text-gray-600 dark:text-gray-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Filter by category to explore my work
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm border-dashed border-gray-500 hover:bg-black hover:text-white font-medium border transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-black text-white border-black  dark:bg-white dark:text-black dark:border-white"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

       
       
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Project Card Component
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  category: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="bg-white border-dashed dark:bg-gray-800 rounded-xl border border-gray-500 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
            <span className="text-4xl text-gray-400 dark:text-gray-500">📁</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          
          {/* Project Links */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors"
            >
              <FiGithub className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors"
            >
              <FiExternalLink className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-300 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex-1 justify-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-black dark:hover:border-white"
            >
              <FiGithub />
              Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex-1 justify-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-black dark:hover:border-white"
            >
              <FiExternalLink />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};