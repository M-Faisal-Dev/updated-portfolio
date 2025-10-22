"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiSmartphone, 
  FiCloud, 
  FiDatabase,
  FiLayers,
  FiShield
} from "react-icons/fi";

// Services Data
const services = [
  {
    id: 1,
    icon: FiCode,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. Responsive designs that work perfectly across all devices.",
    features: [
      "Responsive Web Design",
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Solutions"
    ],
    color: "from-gray-900 to-black"
  },
  {
    id: 2,
    icon: FiSmartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native. Native performance with shared codebase for iOS and Android.",
    features: [
      "React Native Apps",
      "iOS & Android Development",
      "App Store Deployment",
      "Offline Capabilities"
    ],
    color: "from-gray-800 to-gray-900"
  },
  {
    id: 3,
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure deployment and management using AWS, Docker, and Kubernetes for high-availability applications.",
    features: [
      "AWS Infrastructure",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipelines"
    ],
    color: "from-gray-700 to-gray-800"
  },
  {
    id: 4,
    icon: FiDatabase,
    title: "Backend Development",
    description: "Robust server-side applications with RESTful APIs, database design, and microservices architecture for scalable solutions.",
    features: [
      "REST API Development",
      "Database Design & Optimization",
      "Microservices Architecture",
      "Authentication & Authorization"
    ],
    color: "from-gray-600 to-gray-700"
  },
  {
    id: 5,
    icon: FiLayers,
    title: "Full Stack Solutions",
    description: "End-to-end development services from frontend to backend, ensuring seamless integration and optimal performance.",
    features: [
      "End-to-End Development",
      "System Architecture",
      "Performance Optimization",
      "Third-party Integrations"
    ],
    color: "from-gray-500 to-gray-600"
  },
  {
    id: 6,
    icon: FiShield,
    title: "DevOps & Security",
    description: "Secure deployment practices with automated testing, monitoring, and security implementations to protect your applications.",
    features: [
      "Security Implementation",
      "Automated Testing",
      "Performance Monitoring",
      "Code Review & Optimization"
    ],
    color: "from-gray-400 to-gray-500"
  }
];

export default function Services() {
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
            My <span className="text-gray-600 dark:text-gray-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl border-dashed border border-gray-400 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden h-full flex flex-col relative">
        
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Header */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
              <IconComponent className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Features List */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
              What I offer:
            </h4>
            <ul className="space-y-1">
              {service.features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors cursor-pointer"
          >
            <span>Learn more</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};