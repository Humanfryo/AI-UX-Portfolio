'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '@/data/projects';

const FeaturedProjects: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
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

  return (
    <section id="projects" className="py-20 px-6 bg-background-primary">
      <div className="container-custom">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 max-w-2xl mx-auto">
              Real AI solutions and accessibility transformations that solve actual problems for real people.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            variants={titleVariants}
            className="text-center mt-16"
          >
            <button className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 