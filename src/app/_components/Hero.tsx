"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/moving-border";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating dots animation */}
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
        
        {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
  {/* 1st vertical line */}
  <motion.div
    className="absolute left-0 top-0 h-full w-px bg-black"
    animate={{ scaleY: [0, 1, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ originY: 0 }} // start scaling from top
  />

  {/* 2nd vertical line */}
  <motion.div
    className="absolute left-1/3 top-0 h-full w-px bg-black"
    animate={{ scaleY: [0, 1, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    style={{ originY: 0 }}
  />

  {/* 3rd vertical line */}
  <motion.div
    className="absolute left-2/3 top-0 h-full w-px bg-black"
    animate={{ scaleY: [0, 1, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    style={{ originY: 0 }}
  />
</div>


        {/* Pulse effect */}
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

      {/* Left Content */}
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
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Muhammad Faisal
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
        >
          Full Stack Developer & DevOps Engineer
        </motion.div>

        <motion.p
          className="text-gray-600 mt-6 text-lg leading-relaxed max-w-2xl"
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
          {/* Animated Border Button */}
<div className="relative group flex items-center gap-2">
  {/* Glowing Border */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>

  {/* Button */}
  <Button
    borderRadius="3.5rem"
    className="relative flex items-center justify-center px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-900 dark:text-white rounded-full transition-all border border-neutral-200 dark:border-gray-800"
  >
    <span>Get In Touch</span>
      <motion.span
    animate={{ x: [0, 6, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    className="text-lg text-white-700 dark:text-gray-300"
  >
    →
  </motion.span>
  </Button>

  {/* Animated Arrow Outside */}

</div>

          
          {/* Second Button with Moving Border */}
          <div className="relative group">
      
              <Button
        borderRadius="3.5rem"
        className="bg-white dark:bg-gray-900 rounded-full  text-black dark:text-white border-neutral-200 dark:border-gray-800"
      >
        View Projects
      </Button>
       
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
  <div className="flex flex-col items-center leading-none">
    <TextHoverEffect text="50+" />
    <div className="text-xl font-semibold text-gray-800 -mt-2 leading-[1]">
      Years&nbsp;of&nbsp;Experience
    </div>
  </div>

  {/* Stat 2 */}
  <div className="flex flex-col items-center leading-none">
    <TextHoverEffect text="20+"  />
    <div className="text-xl font-semibold text-gray-800 -mt-2 leading-[1]">
      Projects&nbsp;Done
    </div>
  </div>

  {/* Stat 3 */}
  <div className="flex flex-col items-center leading-none">
    <TextHoverEffect text="100%" />
    <div className="text-xl font-semibold text-gray-800 -mt-2 leading-[1]">
      Client Satisfaction
    </div>
  </div>
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
            {/* Outer Ring Animation */}
            <motion.div
              className="absolute -inset-4 border-2 border-gray-300 rounded-full"
              animate={{
                rotate: [0, 360],
                borderColor: ['#D1D5DB', '#9CA3AF', '#D1D5DB'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
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
  );
}


