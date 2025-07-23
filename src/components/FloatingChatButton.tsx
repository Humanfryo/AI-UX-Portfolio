'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChatClick = () => {
    // TODO: Implement actual chatbot opening logic
    console.log('Opening chatbot...');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleChatClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        aria-label="Chat with AI Hari"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">💬</span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            Chat with AI Hari
          </motion.span>
        </div>
        
        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-blue-400 rounded-full -z-10"
        />
      </button>
    </motion.div>
  );
};

export default FloatingChatButton; 