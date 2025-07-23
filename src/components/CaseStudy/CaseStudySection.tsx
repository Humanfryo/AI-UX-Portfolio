'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  AlertTriangle, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  FileText, 
  AlertCircle, 
  Palette, 
  Code, 
  BarChart, 
  BookOpen,
  Check
} from 'lucide-react';
import { CaseStudySection } from '@/data/collectiveRootsData';
import MetricCard from './MetricCard';
import QuoteBlock from './QuoteBlock';

interface CaseStudySectionProps {
  section: CaseStudySection;
  index: number;
}

const CaseStudySectionComponent: React.FC<CaseStudySectionProps> = ({ section, index }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Get the Lucide icon component
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      AlertTriangle,
      Zap,
      TrendingUp,
      CheckCircle,
      Star,
      FileText,
      AlertCircle,
      Palette,
      Code,
      BarChart,
      BookOpen,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={24} className="text-accent-blue" /> : null;
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="mb-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Content Column */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8 mt-12">
            <div className="text-3xl">{getIcon(section.icon)}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white hover:gap-5 transition-all duration-300 cursor-default">
              {section.title}
            </h3>
          </div>

          {/* Description */}
          {section.description && (
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              {section.description}
            </p>
          )}

          {/* Content - Gist mode uses HTML content */}
          {section.content && (
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: section.content
              }}
            />
          )}

          {/* Legacy content handling for Deep Dive mode */}
          {!section.content && (
            <>
              {/* Highlight */}
              {section.highlight && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <p className="text-xl text-red-400 font-medium text-center leading-relaxed">
                    {section.highlight}
                  </p>
                </div>
              )}

              {/* Approach List */}
              {section.approach && (
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Research-Driven Approach:</h4>
                  <ul className="space-y-4">
                    {section.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-blue-400 mt-2 text-xl">•</span>
                        <span className="text-xl text-gray-200 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              {section.deliverables && (
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Key Deliverables:</h4>
                  <ul className="space-y-4">
                    {section.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="bg-green-500/20 rounded-full p-2 mt-1">
                          <Check size={16} className="text-green-400" />
                        </div>
                        <span className="text-xl text-gray-200 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Special Points */}
              {section.specialPoints && (
                <div className="space-y-6">
                  {section.specialPoints.map((point, idx) => (
                    <div key={idx} className="bg-background-secondary/50 rounded-lg p-6 border border-accent-blue/10">
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">{point.icon}</span>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">{point.title}</h4>
                          <p className="text-lg text-gray-200 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Testimonials */}
              {section.testimonials && (
                <motion.div variants={gridVariants} className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">User Validation:</h3>
                  {section.testimonials.map((testimonial, idx) => (
                    <QuoteBlock
                      key={idx}
                      testimonial={testimonial}
                      index={idx}
                    />
                  ))}
                </motion.div>
              )}
            </>
          )}

          {/* Deep Dive content with improved typography */}
          {section.content && !section.content.includes('<div class=') && (
            <div className="prose prose-invert max-w-none space-y-8">
              <div 
                className="text-lg text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: section.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('**') && line.endsWith('**:')) {
                        return `<h4 class="text-3xl md:text-4xl font-bold text-white mb-8 mt-12">${line.slice(2, -3)}</h4>`;
                      }
                      if (line.startsWith('- **') && line.includes('**:')) {
                        const parts = line.split('**:');
                        const title = parts[0].slice(4);
                        const content = parts[1];
                        return `<div class="mb-8 bg-gray-800/30 rounded-lg p-6"><h5 class="text-xl font-bold text-white mb-4">${title}:</h5><p class="text-lg text-gray-200 leading-relaxed">${content}</p></div>`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="text-lg text-gray-200 leading-relaxed mb-4 ml-6">${line.slice(2)}</li>`;
                      }
                      if (line.startsWith('```') || line.endsWith('```')) {
                        return line.startsWith('```') ? '<pre class="bg-gray-800 p-8 rounded-lg mt-8 mb-8 text-lg overflow-x-auto border border-gray-700">' : '</pre>';
                      }
                      if (line.trim() === '') {
                        return '<div class="mb-6"></div>';
                      }
                      return `<p class="text-lg text-gray-200 leading-relaxed mb-6">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
          )}
        </div>

        {/* Visual Column */}
        <div className="space-y-8">
          {/* Section Image */}
          {section.image && (
            <div className="relative group">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={section.image}
                  alt={`${section.title} illustration`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl" />
            </div>
          )}

          {/* Legacy Metrics Grid - only show if no content */}
          {!section.content && section.metrics && (
            <motion.div variants={gridVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Key Metrics:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.metrics.map((metric, idx) => (
                  <MetricCard
                    key={idx}
                    metric={metric}
                    index={idx}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudySectionComponent; 