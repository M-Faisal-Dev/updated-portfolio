"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/moving-border";
import ExperienceStat from "@/components/ui/ExperienceStat";

export default function Hero() {
  return (
    <>
    <div className="absolute inset-0 z-0 overflow-hidden">

  <motion.div
    className="absolute top-10 left-10 w-2 h-2 bg-gray-300 rounded-full"
    animate={{
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
  <motion.div
    className="absolute top-1/4 right-20 w-3 h-3 bg-gray-400 rounded-full"
    animate={{
      y: [0, 30, 0],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
  />
  <motion.div
    className="absolute bottom-20 left-1/4 w-4 h-4 bg-gray-500 rounded-full"
    animate={{
      y: [0, -15, 0],
      opacity: [0.4, 0.9, 0.4],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
    }}
  />
  

  <div className="absolute inset-0 opacity-10">
    <motion.div
      className="absolute left-0 top-0 h-full w-px bg-black"
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ originY: 0 }}
    />
    <motion.div
      className="absolute left-1/3 top-0 h-full w-px bg-black"
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      style={{ originY: 0 }}
    />

    <motion.div
      className="absolute left-2/3 top-0 h-full w-px bg-black"
      animate={{ scaleY: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      style={{ originY: 0 }}
    />
  </div>

  <motion.div
    className="absolute inset-0 border border-gray-200 rounded-lg m-10"
    animate={{
      scale: [1, 1.02, 1],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div> 
   

<div className="max-w-7xl mx-auto relative">

    <section className="relative flex flex-col md:flex-row items-center justify-between px-5 md:px-12 py-20 bg-white overflow-hidden">
      {/* Animated Background */}
 
  
 




    <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
        >
          Hi, I'm{" "}
         <span className="bg-gradient-to-r from-gray-900 via-gray-500 to-gray-800 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
  M.Faisal
</span>

        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        >
         Full Stack Web & Mobile Developer | AI Agent Engineer with DevOps Expertise
        </motion.div>

        <motion.p
          className="text-gray-800 mt-6 text-lg leading-relaxed max-w-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
        >
          I specialize in building scalable web applications using the MERN stack 
          and implementing robust DevOps solutions. Passionate about creating 
          efficient, user-friendly applications with modern technologies and 
          best practices.
        </motion.p>

        {/* CTA Buttons with Border Animation */}
  <motion.div
  className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
>
  {/* First Button - Get In Touch */}
<div className="relative group flex items-center gap-2">
  {/* Subtle Glow */}
  <div className="absolute -inset-0.5 bg-gray-900 rounded-full opacity-50 group-hover:opacity-100 transition duration-400 blur-sm"></div>

  <button
    className="relative flex items-center justify-center py-3 px-6 bg-gray-900 hover:bg-gray-900 text-white rounded-full transition-all duration-400 border border-gray-800"
  >
    <span className="transition-all duration-300 group-hover:text-gray-100">
      Get In Touch
    </span>
    <motion.span
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="ml-2 group-hover:text-gray-300 transition-colors duration-300"
    >
      →
    </motion.span>
  </button>
</div>

  {/* Second Button - View Projects */}
<div className="relative group">
  <button
    className="relative bg-white rounded-full py-3 px-6 border-1 border-dashed border-gray-800 text-black group-hover:bg-gray-900 transition-colors duration-300"
  >
    <span className="group-hover:text-white transition-colors duration-300">
      View Projects
    </span>
  </button>
</div>
</motion.div>

     {/* Stats Section */}
<motion.div
  className="mt-12 flex justify-center md:justify-between items-start flex-nowrap"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
>
  {/* Stat 1 */}
  <ExperienceStat value="5+" label="Years of Experience" />

  {/* Stat 2 */}
  <ExperienceStat value="20+" label="Projects Done" />

  {/* Stat 3 */}
  <ExperienceStat value="100%" label="Client Satisfaction" />
</motion.div>







      </motion.div>

      {/* Right Image */}
        <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        className="mt-12 md:mt-0 md:w-2/5 flex justify-center z-10"
      >
        <motion.div
          className="relative flex flex-col items-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Typewriter Text Above Image */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-2xl font-bold text-gray-800 mb-2">
              <Typewriter
                words={['I am M. Faisal', 'Open to Work']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </motion.div>

          {/* Circular Image Container */}
     <div className="relative">
  {/* Outer Dotted Ring Animation */}
  <motion.svg
    className="absolute -inset-6"
    viewBox="0 0 200 200"
    animate={{ rotate: 360 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <circle
      cx="100"
      cy="100"
      r="95"
      fill="none"
      stroke="#111827"
      strokeWidth="0.5"
      strokeDasharray="1.5 5"  // 👈 ye control karta hai dot aur gap ka distance
      strokeLinecap="round"
    />
  </motion.svg>

  {/* Main Circular Image */}
  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
    <Image
      width={400}
      height={400}
      src="/faisaldeveloper.png"
      alt="Muhammad Faisal - Full Stack Developer"
      className="w-full h-full object-cover"
      priority
    />
  </div>

  {/* Floating Elements */}
  <motion.div
    className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
    animate={{
      rotate: [0, 360],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <span className="text-xs text-white font-bold">✓</span>
  </motion.div>

  <motion.div
    className="absolute -bottom-2 -left-2 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center shadow-lg"
    animate={{
      y: [0, -8, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
  >
    <span className="text-xs text-white font-bold">+</span>
  </motion.div>
</div>

        </motion.div>
      </motion.div>
    </section>
    </div>
     </>

  );
}


