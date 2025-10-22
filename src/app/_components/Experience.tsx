"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

// Experience Data
const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading a team of developers in building scalable web applications. Responsible for architecture decisions and mentoring junior developers.",
    technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration from legacy system to modern microservices architecture",
      "Mentored 3 junior developers to senior level positions"
    ]
  },
  {
    id: 2,
    company: "Digital Innovations LLC",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: "Developed responsive web applications and collaborated with UX designers to implement pixel-perfect designs.",
    technologies: ["React", "JavaScript", "CSS3", "Redux", "Jest"],
    achievements: [
      "Built 10+ reusable component libraries used across multiple projects",
      "Reduced page load time by 60% through code splitting and lazy loading",
      "Implemented comprehensive testing suite with 95% code coverage"
    ]
  },
  {
    id: 3,
    company: "StartUp Ventures",
    position: "Junior Web Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description: "Started my professional journey building websites and web applications for various clients across different industries.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
    achievements: [
      "Developed 20+ client websites with custom CMS solutions",
      "Automated deployment processes reducing deployment time by 70%",
      "Received 100% client satisfaction rating for all delivered projects"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
            Work <span className="text-gray-600 dark:text-gray-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the milestones I've achieved along the way
          </p>
        </motion.div>

        {/* Main Content - Left Experience, Right Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Experience Cards */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>

          {/* Right Side - Animation Component */}
          <div className="lg:col-span-1">
            <AnimationComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-400 border-dashed dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header Section */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {experience.position}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                {experience.company}
              </p>
              
              {/* Duration & Location */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-gray-500" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-gray-500" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Expand/Collapse Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <FiArrowRight className="text-2xl text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </motion.div>
          </div>

          {/* Brief Description (Always Visible) */}
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-black dark:text-white mb-3">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li 
                    key={achievementIndex}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="text-black dark:text-white mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animation Component for Right Side
const AnimationComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="sticky top-24"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-400 dark:border-gray-700 p-8 shadow-lg">
        {/* Animated Coding Elements */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Coding Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Years of experience in development
          </p>
        </div>

        {/* Animated Progress Bars */}
        <div className="space-y-6">
          {/* Frontend Skills */}
          <div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>Frontend</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="bg-black dark:bg-white h-2 rounded-full"
              />
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>Backend</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="bg-black dark:bg-white h-2 rounded-full"
              />
            </div>
          </div>

          {/* DevOps Skills */}
          <div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>DevOps</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="bg-black dark:bg-white h-2 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="mt-8 relative h-32">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 left-4 text-2xl"
          >
            {"</>"}
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-12 right-6 text-xl"
          >
            {"{}"}
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-4 left-12 text-lg"
          >
            {"=>"}
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-8 right-8 text-lg"
          >
            {"();"}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-center">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="text-2xl font-bold text-black dark:text-white">4+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="text-2xl font-bold text-black dark:text-white">50+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};