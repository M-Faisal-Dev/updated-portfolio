"use client";
import { motion } from "framer-motion";

export default function ExperienceStat({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-start leading-none">
      {/* Main number with outline */}
      <motion.div
        className="relative font-bold text-5xl tracking-tight select-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Outline (back layer) */}
        <span
          className="absolute inset-0 text-transparent"
          style={{
            WebkitTextStroke: "2px #000", // outline color
          }}
        >
          {value}
        </span>

        {/* Solid fill (front layer) */}
        <span className="text-white dark:text-gray-100 relative">{value}</span>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-sm tracking-wide text-gray-900 font-mono font-semibold uppercase mt-1"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
