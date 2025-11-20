// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   SiHtml5, 
//   SiCss3, 
//   SiJavascript, 
//   SiBootstrap, 
//   SiTailwindcss,
//   SiReact,
//   SiGithub,
//   SiGit,
//   SiTypescript,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiRedux,
//   SiWordpress,
//   SiLinux,
//   SiNginx,
//   SiDocker,
//   SiPython,
//   SiJenkins,
//   SiKubernetes,
//   SiPostman,
//   SiInsomnia
// } from "react-icons/si";
// import { TbApi } from "react-icons/tb";
// import { RiReactjsLine } from "react-icons/ri";
// import { FaTerminal } from "react-icons/fa";

// const skills = [
//   { name: "HTML & CSS", icons: [SiHtml5, SiCss3] },
//   { name: "JavaScript", icons: [SiJavascript] },
//   { name: "Bootstrap", icons: [SiBootstrap] },
//   { name: "TailwindCSS", icons: [SiTailwindcss] },
//   { name: "React", icons: [SiReact] },
//   { name: "GitHub & Git", icons: [SiGithub, SiGit] },
//   { name: "TypeScript", icons: [SiTypescript] },
//   { name: "Node.js", icons: [SiNodedotjs] },
//   { name: "Express.js", icons: [SiExpress] },
//   { name: "MongoDB & MySQL", icons: [SiMongodb, SiMysql] },
//   { name: "React Redux", icons: [SiRedux, RiReactjsLine] },
//   { name: "REST API & WebSocket", icons: [TbApi] },
//   { name: "Postman & Insomnia", icons: [SiPostman, SiInsomnia] },
//   { name: "WordPress", icons: [SiWordpress] },
//   { name: "Linux", icons: [SiLinux] },
//   { name: "Nginx", icons: [SiNginx] },
//   { name: "Docker", icons: [SiDocker] },
//   { name: "Puppeteer", icons: [FaTerminal] },
//   { name: "Python", icons: [SiPython] },
//   { name: "Shell / Bash Scripting", icons: [FaTerminal] },
//   { name: "Jenkins", icons: [SiJenkins] },
//   { name: "Kubernetes", icons: [SiKubernetes] },
// ];

// export default function Skill() {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-semibold mb-12 text-center text-black dark:text-white"
//         >
//           My <span className="text-gray-600 dark:text-gray-400">Skills</span>
//         </motion.h2>

//         {/* Skills Grid */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.1 },
//             },
//           }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               whileHover={{ 
//                 scale: 1.05,
//                 transition: { type: "spring", stiffness: 300 }
//               }}
//               className="group"
//             >
//               <div className="bg-white dark:bg-gray-800 rounded-xl p-4  border-1 border-dashed border-gray-500 dark:border-gray-600 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-row space-x-2 items-center justify-center h-full text-center group-hover:bg-gray-50 dark:group-hover:bg-gray-700">
//                 {/* Icons */}
//                 <div className="flex gap-1">
//                   {skill.icons.map((IconComponent, iconIndex) => (
//                     <IconComponent 
//                       key={iconIndex}
//                       className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
//                     />
//                   ))}
//                 </div>
                
//                 {/* Skill Name */}
//                 <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 leading-tight">
//                   {skill.name}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, SiPython,
  SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiFirebase,
  SiDocker, SiJenkins, SiKubernetes, SiNginx, SiLinux, SiGit,
  SiPostman, SiGrafana, SiFigma, SiFastapi, SiPrisma, SiPuppeteer,
  SiSocketdotio, SiOpenai, SiGoogle, SiTypescript
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { FaMicrochip, FaServer, FaDatabase, FaPalette, FaRobot, FaTools } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";

const expertiseCategories = [
  {
    category: "Frontend Development",
    icon: <RiReactjsLine className="text-xl" />,
    skills: [
      { name: "React.js", icons: [SiReact] },
      { name: "Next.js", icons: [SiNextdotjs] },
      { name: "React Native", icons: [SiReact] },
      { name: "TypeScript", icons: [SiTypescript] },
    ],
  },
  {
    category: "Backend Development",
    icon: <FaServer className="text-xl" />,
    skills: [
      { name: "Node.js", icons: [SiNodedotjs] },
      { name: "Express.js", icons: [SiExpress] },
      { name: "Nest.js", icons: [SiNestjs] },
      { name: "Python", icons: [SiPython] },
      { name: "FastAPI", icons: [SiFastapi] },
    ],
  },
  {
    category: "UI/UX & Styling",
    icon: <FaPalette className="text-xl" />,
    skills: [
      { name: "Tailwind CSS", icons: [SiTailwindcss] },
      { name: "Framer Motion", icons: [TbBrandFramerMotion] },
      { name: "Shadcn UI", icons: [TbApi] },
      { name: "Figma", icons: [SiFigma] },
    ],
  },
  {
    category: "Databases & ORM",
    icon: <FaDatabase className="text-xl" />,
    skills: [
      { name: "MongoDB", icons: [SiMongodb] },
      { name: "PostgreSQL", icons: [SiPostgresql] },
      { name: "MySQL", icons: [SiMysql] },
      { name: "Redis", icons: [SiRedis] },
      { name: "Firebase", icons: [SiFirebase] },
      { name: "Prisma", icons: [SiPrisma] },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: <VscServerProcess className="text-xl" />,
    skills: [
      { name: "Docker", icons: [SiDocker] },
      { name: "Kubernetes", icons: [SiKubernetes] },
      { name: "Jenkins", icons: [SiJenkins] },
      { name: "Nginx", icons: [SiNginx] },
      { name: "Linux", icons: [SiLinux] },
      { name: "Git", icons: [SiGit] },
    ],
  },
  {
    category: "AI & Automation",
    icon: <FaRobot className="text-xl" />,
    skills: [
      { name: "OpenAI GPT", icons: [SiOpenai] },
      { name: "Gemini AI", icons: [SiGoogle] },
      { name: "WebSocket", icons: [SiSocketdotio] },
      { name: "Puppeteer", icons: [SiPuppeteer] },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <FaTools className="text-xl" />,
    skills: [
      { name: "REST & GraphQL", icons: [TbApi] },
      { name: "Postman", icons: [SiPostman] },
      { name: "Grafana", icons: [SiGrafana] },
      { name: "Microservices", icons: [FaMicrochip] },
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to deliver exceptional solutions
          </p>
        </motion.div>

        {/* Updated Grid - 4 cards per row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {expertiseCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6  border-1 border-dashed border-gray-500 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full" // Added flex and h-full
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 bg-gray-200 dark:bg-blue-900/30 rounded-lg text-gray-800 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills Grid - Equal height for all cards */}
              <div className="grid grid-cols-2 gap-2 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4  border-1 border-dashed border-gray-500 dark:border-gray-600 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-row space-x-2 items-center justify-center h-full text-center group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
                  >
              
                      <div className="flex gap-1">
                        {skill.icons.map((IconComponent, iconIndex) => (
                          <IconComponent
                            key={iconIndex}
                            className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white leading-tight">
                        {skill.name}
                      </span>
               
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              With expertise across the full stack and a passion for innovative solutions, 
              I'm equipped to bring your ideas to life with cutting-edge technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}