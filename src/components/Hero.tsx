'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  // Handle CTA actions
  const handleStartChat = () => {
    // TODO: Implement chatbot opening logic
    console.log('Opening chatbot...');
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">
                Hari
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl"
            >
              With 4+ years in UX design and 2+ years in AI development, I bridge accessibility-focused design with AI innovation. From building games with prompts to transforming inaccessible websites, I create technology that works for everyone.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleStartChat}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                aria-label="Start a conversation with AI Hari"
              >
                <span className="text-xl">🤖</span>
                <span>Chat with AI Hari</span>
                <span className="text-sm opacity-75">← Try this!</span>
              </button>

              <button
                onClick={handleViewProjects}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                aria-label="See Hari's work and projects"
              >
                <span>🚀</span>
                <span>See My Work</span>
              </button>
            </motion.div>

            {/* Updated stats based on real experience */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center lg:justify-items-start"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">Years UX Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2+</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">Years AI Development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">888+</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">Website Visits Generated</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              {/* Main profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-blue-600/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-blue/30 shadow-2xl">
                  <Image
                    src="/images/hero-profile.jpg"
                    alt="Hari - AI Innovation & Accessibility Designer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
              </div>

              {/* Floating elements with updated emojis */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🎮</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">♿</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-text-secondary"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 