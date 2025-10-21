"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiBootstrap, 
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiGit,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiWordpress,
  SiLinux,
  SiNginx,
  SiDocker,
  SiPython,
  SiJenkins,
  SiKubernetes,
  SiPostman,
  SiInsomnia
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaTerminal } from "react-icons/fa";

const skills = [
  { name: "HTML & CSS", icons: [SiHtml5, SiCss3] },
  { name: "JavaScript", icons: [SiJavascript] },
  { name: "Bootstrap", icons: [SiBootstrap] },
  { name: "TailwindCSS", icons: [SiTailwindcss] },
  { name: "React", icons: [SiReact] },
  { name: "GitHub & Git", icons: [SiGithub, SiGit] },
  { name: "TypeScript", icons: [SiTypescript] },
  { name: "Node.js", icons: [SiNodedotjs] },
  { name: "Express.js", icons: [SiExpress] },
  { name: "MongoDB & MySQL", icons: [SiMongodb, SiMysql] },
  { name: "React Redux", icons: [SiRedux, RiReactjsLine] },
  { name: "REST API & WebSocket", icons: [TbApi] },
  { name: "Postman & Insomnia", icons: [SiPostman, SiInsomnia] },
  { name: "WordPress", icons: [SiWordpress] },
  { name: "Linux", icons: [SiLinux] },
  { name: "Nginx", icons: [SiNginx] },
  { name: "Docker", icons: [SiDocker] },
  { name: "Puppeteer", icons: [FaTerminal] },
  { name: "Python", icons: [SiPython] },
  { name: "Shell / Bash Scripting", icons: [FaTerminal] },
  { name: "Jenkins", icons: [SiJenkins] },
  { name: "Kubernetes", icons: [SiKubernetes] },
];

export default function Skill() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-center text-black dark:text-white"
        >
          My <span className="text-gray-600 dark:text-gray-400">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4  border-1 border-dashed border-gray-500 dark:border-gray-600 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-row space-x-2 items-center justify-center h-full text-center group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
                {/* Icons */}
                <div className="flex gap-1">
                  {skill.icons.map((IconComponent, iconIndex) => (
                    <IconComponent 
                      key={iconIndex}
                      className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
                    />
                  ))}
                </div>
                
                {/* Skill Name */}
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 leading-tight">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}