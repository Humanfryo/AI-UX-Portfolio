'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ChatBotPreview: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const sampleQuestions = [
    "What's your UX background?",
    "Tell me about accessibility work",
    "How do you build AI apps?"
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Chat with AI Hari
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Have a conversation with my AI version! Ask about my projects, experience, or get advice on AI and accessibility.
          </motion.p>

          {/* Chat Preview Mock */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto mb-8"
          >
            <div className="space-y-4">
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-xs">
                  "Tell me about your Nokia Bounce game project"
                </div>
              </motion.div>
              
              {/* AI Response */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-2xl max-w-sm text-left">
                  <span className="text-blue-400 font-medium">AI Hari:</span> That was my breakthrough moment! I saw Instagram videos of people building games with AI and thought "I bet I can do that." Built it in one night using just prompts - completely changed how I see AI development...
                </div>
              </motion.div>
              
              {/* Typing Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700 text-gray-400 px-4 py-2 rounded-2xl text-sm">
                  <span className="text-blue-400 font-medium">AI Hari</span> is typing...
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sample Questions */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {sampleQuestions.map((question, index) => (
              <button 
                key={index}
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-3 rounded-lg transition-colors hover:border-blue-500/30 border border-gray-700"
              >
                "{question}"
              </button>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.button 
            variants={itemVariants}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <span className="text-xl">🚀</span>
            Start Chatting Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatBotPreview; 