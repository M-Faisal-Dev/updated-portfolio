"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

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
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Tabs */}
     <div className="relative mb-16">
  {/* Background Bar with Static Grid */}
  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-screen h-96 bg-gradient-to-b from-black via-gray-600 to-gray-800 -z-10">
    {/* Static Grid Overlay */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255) 1px, transparent 1px),
          linear-gradient(180deg, rgba(255,255,255) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
    
    {/* Corner Accents
    <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white opacity-20"></div>
    <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white opacity-20"></div>
    <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white opacity-20"></div>
    <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white opacity-20"></div> */}
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
    {/* Left Side - Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-left w-full lg:w-auto"
    >
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 uppercase tracking-widest text-sm mb-4"
      >
        Creative Works
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        My <span className="text-gray-400">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-gray-300 max-w-md"
      >
        Filter by category to explore my work
      </motion.p>
    </motion.div>

    {/* Right Side - Filter Tabs */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full lg:w-auto"
    >
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border border-dashed transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-black border-white shadow-lg"
                : "bg-transparent text-white border-gray-500 hover:bg-white/10 hover:border-white"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  </div>
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🚧
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Projects coming soon for this category!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Enhanced Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-400 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden h-full flex flex-col relative">
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px)`,
              backgroundSize: '30px 30px'
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl text-gray-400 dark:text-gray-500"
            >
              📁
            </motion.span>
          </div>

          {/* Project Links */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors shadow-lg"
            >
              <FiGithub className="text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors shadow-lg"
            >
              <FiExternalLink className="text-gray-700 dark:text-gray-300" />
            </motion.a>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-white dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm">
              {project.category}
            </span>
          </motion.div>

          {/* Hover Arrow */}
          <motion.div
            className="absolute bottom-4 right-4"
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiArrowRight className="text-2xl text-gray-600 dark:text-gray-400" />
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10">
          <motion.h3
            className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex-1 justify-center py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-black dark:hover:border-white bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
            >
              <FiGithub />
              Code
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex-1 justify-center py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-black dark:hover:border-white bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
            >
              <FiExternalLink />
              Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
  
};