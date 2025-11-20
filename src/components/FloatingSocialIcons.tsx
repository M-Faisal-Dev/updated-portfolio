"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Add this line

const FloatingSocialIcons = () => {
  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:text-red-500",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/yourphonenumber",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="fixed 2xl:left-6 left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center border-dashed space-y-4 2xl:p-4 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 ${social.color} group`}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              x: 5 
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            {social.icon}
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {social.label}
            </div>
          </motion.a>
        ))}
        
      </div>
    </motion.div>
  );
};

export default FloatingSocialIcons;