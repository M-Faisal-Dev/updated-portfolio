"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiStar } from "react-icons/fi";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager, TechCorp",
    company: "TechCorp Inc.",
    image: "/testimonials/sarah.jpg",
    content:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the code quality was exceptional.",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "StartUp Ventures",
    image: "/testimonials/michael.jpg",
    content:
      "Outstanding full-stack developer who transformed our business idea into a robust web application. Their expertise in React and Node.js helped us build a scalable product.",
    rating: 5,
    project: "SaaS Application",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "Digital Solutions LLC",
    image: "/testimonials/emily.jpg",
    content:
      "The mobile app developed for our company exceeded all expectations. It's fast, intuitive, and has significantly improved our customer engagement.",
    rating: 5,
    project: "Mobile Application",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Founder & CEO",
    company: "Innovate Labs",
    image: "/testimonials/david.jpg",
    content:
      "Professional, reliable, and highly skilled. They built our entire backend infrastructure and the results have been fantastic.",
    rating: 5,
    project: "Backend System",
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "UX Lead",
    company: "Creative Agency Co.",
    image: "/testimonials/lisa.jpg",
    content:
      "As a designer, I appreciate developers who understand user experience. They implemented our designs perfectly and provided valuable technical insights.",
    rating: 5,
    project: "Portfolio Website",
  },
  {
    id: 6,
    name: "Alex Kumar",
    position: "Technical Director",
    company: "Enterprise Solutions",
    image: "/testimonials/alex.jpg",
    content:
      "Exceptional problem-solving skills and deep technical knowledge. They helped us migrate our legacy system to modern microservices architecture without downtime.",
    rating: 5,
    project: "System Migration",
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPaused) {
      // Get current transform value to resume from same position
      const currentTransform = sliderRef.current?.style.transform || "translateX(0%)";
      const currentX = currentTransform.match(/translateX\(([^%]+)%\)/)?.[1] || 0;
      
      controls.start({
        x: [`${currentX}%`, "-100%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16 bg-white dark:bg-gray-900 overflow-hidden">
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
            Client <span className="text-gray-600 dark:text-gray-400">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients say about working with me and the projects we've built together
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            ref={sliderRef}
            className="flex gap-6" 
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>

          {/* Optional gradient edges for nice fade */}
          <div className="absolute -left-20 top-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute -right-20 top-0 w-24 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-400 border-dashed dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
        "{testimonial.content}"
      </blockquote>

      {/* Project */}
      <div className="mb-4">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          {testimonial.project}
        </span>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h4 className="font-semibold text-black dark:text-white text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs">
            {testimonial.position}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};