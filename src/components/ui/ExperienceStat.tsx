"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ExperienceStat({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const number = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value;
  const suffix = typeof value === 'string' ? value.replace(number.toString(), '') : '';

  useEffect(() => {
    if (isInView && !isCounting) {
      setIsCounting(true);
      
      const duration = 2000;
      const startTime = Date.now();

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out function for smooth ending
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(number * easeOut);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, isCounting, number]);

  const displayValue = `${count}${suffix}`;

  return (
    <div ref={ref} className="flex flex-col items-center justify-start leading-none">
      <motion.div
        className="relative font-bold text-5xl tracking-tight select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Outline */}
        <span
          className="absolute inset-0 text-transparent"
          style={{ WebkitTextStroke: "2px #000" }}
        >
          {displayValue}
        </span>

        {/* Animated Number */}
        <motion.span 
          className="text-white dark:text-gray-100 relative"
          animate={isCounting ? {
            color: ["#ffffff", "#fbbf24", "#ffffff"]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {displayValue}
        </motion.span>
      </motion.div>

      <motion.p
        className="text-sm tracking-wide text-gray-900 font-mono font-semibold uppercase mt-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </div>
  );
}