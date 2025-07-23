'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Monitor } from 'lucide-react';
import Link from 'next/link';
import { CollectiveRootsData } from '@/data/collectiveRootsData';
import ReadingModeToggle from './ReadingModeToggle';

interface CaseStudyLayoutProps {
  data: CollectiveRootsData;
  children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ data, children }) => {
  const [readingMode, setReadingMode] = useState<'gist' | 'deepDive'>('gist');

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header Section */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="bg-background-primary border-b border-accent-blue/20"
      >
        <div className="container-custom section-padding py-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link
              href="/#case-studies"
              className="inline-flex items-center space-x-2 text-accent-blue hover:text-blue-400 transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </nav>

          {/* Project Title and Subtitle */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight hover:text-blue-100 transition-colors duration-300">
              {data.meta.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-medium">
              {data.meta.subtitle}
            </h2>
          </div>

          {/* Project Meta Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
              <div className="bg-accent-blue/20 rounded-lg p-2">
                <User size={16} className="text-accent-blue" />
              </div>
              <div>
                <div className="text-xs text-gray-300 uppercase tracking-wide">Role</div>
                <div className="text-sm font-medium text-white">{data.meta.role}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
              <div className="bg-accent-blue/20 rounded-lg p-2">
                <Calendar size={16} className="text-accent-blue" />
              </div>
              <div>
                <div className="text-xs text-gray-300 uppercase tracking-wide">Date</div>
                <div className="text-sm font-medium text-white">{data.meta.date}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
              <div className="bg-accent-blue/20 rounded-lg p-2">
                <Clock size={16} className="text-accent-blue" />
              </div>
              <div>
                <div className="text-xs text-gray-300 uppercase tracking-wide">Duration</div>
                <div className="text-sm font-medium text-white">{data.meta.duration}</div>
              </div>
            </div>

            {data.meta.platform && (
              <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
                <div className="bg-accent-blue/20 rounded-lg p-2">
                  <Monitor size={16} className="text-accent-blue" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Platform</div>
                  <div className="text-sm font-medium text-white">{data.meta.platform}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Reading Mode Toggle */}
      <div className="bg-background-secondary border-b border-accent-blue/10">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ReadingModeToggle
              activeMode={readingMode}
              onModeChange={setReadingMode}
            />
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <motion.main
        key={readingMode} // This forces re-render when mode changes
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container-custom section-padding"
      >
        {React.cloneElement(children as React.ReactElement, { 
          readingMode, 
          data: readingMode === 'gist' ? data.gist : data.deepDive 
        })}
      </motion.main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            aria-label="Discuss this project"
          >
            <span className="text-xl">💬</span>
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Discuss this project
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            aria-label="Share case study"
          >
            <span className="text-xl">📤</span>
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Share case study
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout; 