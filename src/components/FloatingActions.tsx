"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp, FiMessageCircle, FiX, FiSend } from "react-icons/fi";

export default function FloatingActions() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
      setShowChat(false);
    }
  };

  return (
    <>
      {/* Floating Arrow (Back to Top) - right Side */}
      <motion.button
        className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-2xl border border-gray-600 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        title="Back to Top"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowUp className="text-sm md:text-lg" />
        </motion.div>
      </motion.button>

      {/* Floating Chatbot Icon - right Side */}
      <motion.button
        className="fixed right-4 md:right-6 bottom-20 md:bottom-24 z-50 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-800 to-black text-white rounded-full shadow-2xl border border-gray-600 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(true)}
        title="Chat with me"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FiMessageCircle className="text-sm md:text-lg" />
        </motion.div>
        
        {/* Notification Dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chatbot Modal - right Side with Mobile Responsive */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            className="fixed right-4 md:right-6 bottom-32 md:bottom-40 z-50 w-[calc(100vw-2rem)] md:w-80 max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-600 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Chat Header */}
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Chat Assistant</h3>
                  <p className="text-xs text-gray-300">Online</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-48 md:h-60 overflow-y-auto">
              <div className="space-y-3">
                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Hi! I'm here to help. How can I assist you today?
                    </p>
                  </div>
                </div>
                
                {/* Welcome Message */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Ask me about projects, skills, or availability
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <FiSend className="text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}