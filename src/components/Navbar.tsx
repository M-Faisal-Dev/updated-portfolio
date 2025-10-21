"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion"; // ✅ Import easing function

function Navbar() {
  const [open, setOpen] = useState(false);

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }, // ✅ FIXED — use function not string
    },
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav initial="hidden" animate="visible" variants={navVariants} className="relative">
      <div className="flex items-center justify-between px-6 py-4 relative">
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          MyApp
        </motion.div>

    <motion.ul
  variants={menuVariants}
  initial="hidden"
  animate="visible"
  className="hidden md:flex space-x-10 
             bg-white/10 backdrop-blur-md 
             px-10 py-3 rounded-full 
             shadow-sm border border-white/20 
              left-1/2 transform -translate-x-1/2 fixed z-20"
>
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }} // ✅ also here
          className="md:hidden mt-3 space-y-3 bg-gray-800 text-white p-4 rounded-lg"
        >
          {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, color: "#3B82F6" }}
              className="cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
