'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ChatBotBanner: React.FC = () => {
  const handleTryNow = () => {
    // TODO: Implement scroll to chatbot or open chatbot
    const chatSection = document.querySelector('#chat-with-ai');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white text-center py-3 px-6 relative overflow-hidden"
    >
      {/* Background animation */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
      />
      
      <div className="relative z-10">
        <p className="text-sm font-medium">
          <span className="mr-2">🤖</span>
          <strong>New:</strong> Chat with AI Hari to learn about my projects and experience!
          <button 
            onClick={handleTryNow}
            className="underline ml-2 hover:no-underline font-semibold transition-all duration-200 hover:text-blue-200"
          >
            Try it now →
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default ChatBotBanner; 