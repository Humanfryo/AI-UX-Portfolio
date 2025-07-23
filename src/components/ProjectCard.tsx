'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="group relative bg-background-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons - visible on hover */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={16} className="text-white" />
            </a>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 text-white text-xs font-medium rounded-full backdrop-blur-sm ${
            project.id === 'mooody' ? 'bg-purple-600/90' :
            project.id === 'ai-portfolio-builder' ? 'bg-green-600/90' :
            project.id === 'nokia-bounce' ? 'bg-yellow-600/90' :
            'bg-accent-blue/90'
          }`}>
            {project.id === 'mooody' ? 'AI PRODUCT' :
             project.id === 'ai-portfolio-builder' ? 'AI PORTFOLIO' :
             project.id === 'nokia-bounce' ? 'AI BREAKTHROUGH' :
             project.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700 hover:border-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-gray-400 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-blue-400 font-medium text-sm transition-colors flex items-center space-x-1"
              >
                <span>
                  {project.id === 'mooody' ? 'Try Mooody ↗' :
                   project.id === 'ai-portfolio-builder' ? 'See Demo ↗' :
                   project.id === 'nokia-bounce' ? 'Play Game ↗' :
                   'Live Demo'}
                </span>
                {project.id !== 'mooody' && project.id !== 'ai-portfolio-builder' && project.id !== 'nokia-bounce' && <ExternalLink size={14} />}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary font-medium text-sm transition-colors flex items-center space-x-1"
              >
                <span>Code</span>
                <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard; 