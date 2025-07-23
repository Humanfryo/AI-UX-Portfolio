'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { skills } from '@/data/projects';

const About: React.FC = () => {
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

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      title: 'Tools & Platforms',
      icon: Brain,
      skills: skills.tools,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: skills.soft,
      color: 'bg-green-500/10 text-green-400 border-green-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background-primary">
      <div className="container-custom">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-100 leading-loose mb-6 max-w-3xl">
                  I'm Hari, an AI Product Developer with 4+ years of UX expertise who builds technology that actually works for everyone.
                </p>
                
                {/* Keep the breakthrough moment callout box but make it shorter */}
                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                    💡 The Breakthrough
                  </h4>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Built Nokia Bounce game in one night using AI prompts. That moment showed me AI could amplify human creativity in unexpected ways.
                  </p>
                </div>

                <p className="text-xl text-gray-100 leading-loose mb-6 max-w-3xl">
                  Now I create AI solutions that prioritize accessibility and real human needs. Every project starts with: "How can this actually help people?"
                </p>
              </div>

              {/* Update the Key Highlights to be more scannable */}
              <div className="space-y-6">
                <h4 className="text-white font-semibold mb-4">Key Highlights</h4>
                
                {/* Streamlined Recent Impact */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">4x</div>
                      <div className="text-xs text-gray-300">Donation Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">888+</div>
                      <div className="text-xs text-gray-300">Website Visits</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
                      <div className="text-xs text-gray-300">Industry Interviews</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">🎯</span>
                    <span className="text-gray-200">4+ years UX & Accessibility expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">🤖</span>
                    <span className="text-gray-200">2+ years AI development with prompt engineering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">🎤</span>
                    <span className="text-gray-200">15+ industry professional interviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400">♿</span>
                    <span className="text-gray-200">Accessibility-first design approach</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main profile image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-purple-600/20 rounded-full blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-blue/30 shadow-2xl">
                    <Image
                      src="/images/hero-profile.jpg"
                      alt="Hari - AI Product Developer & UX Designer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 384px"
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -top-8 -right-8 w-16 h-16 border-2 border-accent-blue/30 rounded-full"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-600/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
              <p className="text-xl text-gray-200">Prioritized by expertise level and current focus</p>
            </div>

            {/* Primary Expertise - Most Important */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                🌟 Primary Expertise
                <span className="text-sm text-gray-400 font-normal">(Core competencies)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-6">
                  <h4 className="text-blue-300 font-bold text-lg mb-4">AI Development & Strategy</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">Prompt Engineering</span>
                    <span className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">Rapid Prototyping</span>
                    <span className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm">Multi-LLM Strategy</span>
                  </div>
                </div>
                <div className="bg-green-900/30 border border-green-700 rounded-xl p-6">
                  <h4 className="text-green-300 font-bold text-lg mb-4">UX & Accessibility Design</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-sm">WCAG 2.2 Compliance</span>
                    <span className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-sm">User Research</span>
                    <span className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-sm">Evidence-Based Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Skills - Supporting */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-3">
                🛠️ Tools & Platforms
                <span className="text-sm text-gray-400 font-normal">(Working proficiency)</span>
              </h3>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h5 className="text-purple-300 font-medium mb-2">AI Development</h5>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>Cursor</div>
                      <div>Replit</div>
                      <div>Claude/ChatGPT</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-medium mb-2">Design & Research</h5>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>Figma</div>
                      <div>User Testing</div>
                      <div>A/B Testing</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-medium mb-2">Development</h5>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>React/Next.js</div>
                      <div>HTML/CSS</div>
                      <div>Salesforce</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-medium mb-2">Soft Skills</h5>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div>Market Research</div>
                      <div>Content Creation</div>
                      <div>Photography</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-background-secondary rounded-2xl p-8 md:p-12 border border-primary-light">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '4+', label: 'Years UX Experience' },
                  { value: '888+', label: 'Website Visits Generated' },
                  { value: '100%', label: 'Accessibility Focused' },
                  { value: '15+', label: 'Industry Interviews' }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-accent-blue">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 