'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudySectionComponent from './CaseStudySection';

interface CaseStudyContentProps {
  readingMode: 'gist' | 'deepDive';
  data: any;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ readingMode, data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Get sections based on reading mode
  const getSections = () => {
    if (readingMode === 'gist') {
      return [
        data.problem,
        data.solution,
        data.impact,
        data.deliverables,
        data.special,
      ].filter(Boolean);
    } else {
      return [
        data.overview,
        data.problemAnalysis,
        data.designProcess,
        data.implementation,
        data.results,
        data.learnings,
      ].filter(Boolean);
    }
  };

  const sections = getSections();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-28"
    >
      {/* Reading mode indicator */}
      <div className="text-center py-8">
        <div className="inline-flex items-center space-x-3 bg-background-secondary rounded-full px-6 py-3 border border-accent-blue/20">
          <div className={`w-3 h-3 rounded-full ${readingMode === 'gist' ? 'bg-blue-400' : 'bg-green-400'}`}></div>
          <span className="text-text-secondary font-medium">
            {readingMode === 'gist' ? 'Gist Mode' : 'Deep Dive Mode'} • {sections.length} sections
          </span>
        </div>
      </div>

      {/* Render sections */}
      {sections.map((section, index) => (
        <CaseStudySectionComponent
          key={`${readingMode}-${section.id}`}
          section={section}
          index={index}
        />
      ))}

      {/* Bottom navigation - Back to portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center py-16 border-t border-accent-blue/20"
      >
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Explore More Work
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            This case study demonstrates accessibility-first design thinking. 
            View more projects to see the range of problems I've solved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#projects"
              className="btn-primary hover:scale-105 transition-transform duration-300"
            >
              View All Projects
            </a>
            <a
              href="/#contact"
              className="btn-secondary hover:scale-105 transition-transform duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyContent; 