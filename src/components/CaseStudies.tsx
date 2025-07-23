'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import Image from 'next/image';
import { caseStudies } from '@/data/projects';

const CaseStudies: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const caseStudyVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Icons for different case study types
  const getIcon = (index: number) => {
    const icons = [Users, TrendingUp, Award];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={24} className="text-accent-blue" />;
  };

  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="container-custom">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Real transformations across accessibility design, UX optimization, and AI research with measurable business impact.
            </p>
          </motion.div>

          {/* Enhanced Case Studies with Strong Visual Differentiation */}
          <div className="space-y-16">
            {/* Collective Roots APG - Enhanced with stronger visual identity */}
            <motion.div variants={caseStudyVariants} className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border-2 border-blue-600/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  {/* Stronger category badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <span className="text-white text-xl">♿</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-bold uppercase tracking-wider text-sm block">
                        ACCESSIBILITY TRANSFORMATION
                      </span>
                      <span className="text-blue-400 text-xs">Recovery Organization</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Collective Roots APG
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    Accessibility-first redesign that transformed digital barriers into bridges for community engagement, achieving measurable impact for families in recovery.
                  </p>

                  {/* Enhanced results with color coding */}
                  <div className="bg-blue-900/50 border border-blue-600/30 rounded-xl p-6 mb-8">
                    <h4 className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
                      📈 Transformation Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">+162%</div>
                        <div className="text-xs text-gray-300">Conversion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">+58%</div>
                        <div className="text-xs text-gray-300">Accessibility Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">-25%</div>
                        <div className="text-xs text-gray-300">Bounce Rate</div>
                      </div>
                    </div>
                  </div>

                  <a href="/case-studies/collective-roots-apg" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl">
                    Read Full Case Study →
                  </a>
                </div>
                <div className="relative min-h-[400px]">
                  <Image
                    src={caseStudies[0]?.image || "/images/placeholder.jpg"}
                    alt="Collective Roots APG"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vanishing Seattle - Enhanced with distinct visual identity */}
            <motion.div variants={caseStudyVariants} className="bg-gradient-to-r from-green-900/40 to-emerald-800/40 border-2 border-green-600/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative min-h-[400px] order-2 lg:order-1">
                  <Image
                    src={caseStudies[1]?.image || "/images/placeholder.jpg"}
                    alt="Vanishing Seattle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  {/* Stronger category badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-600 p-3 rounded-xl">
                      <span className="text-white text-xl">📈</span>
                    </div>
                    <div>
                      <span className="text-green-300 font-bold uppercase tracking-wider text-sm block">
                        UX OPTIMIZATION
                      </span>
                      <span className="text-green-400 text-xs">Nonprofit Organization</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Vanishing Seattle
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    Transformed a confusing nonprofit website into a donation-generating machine through strategic UX improvements and user-focused design.
                  </p>

                  {/* Enhanced results */}
                  <div className="bg-green-900/50 border border-green-600/30 rounded-xl p-6 mb-8">
                    <h4 className="text-green-300 font-semibold mb-4 flex items-center gap-2">
                      💰 Business Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">4x</div>
                        <div className="text-xs text-gray-300">Donation Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">-50%</div>
                        <div className="text-xs text-gray-300">Bounce Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">+30%</div>
                        <div className="text-xs text-gray-300">Organic Traffic</div>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl">
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Level11 Technology - Enhanced with distinct visual identity */}
            <motion.div variants={caseStudyVariants} className="bg-gradient-to-r from-purple-900/40 to-indigo-800/40 border-2 border-purple-600/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  {/* Stronger category badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-600 p-3 rounded-xl">
                      <span className="text-white text-xl">🛠️</span>
                    </div>
                    <div>
                      <span className="text-purple-300 font-bold uppercase tracking-wider text-sm block">
                        ACCESSIBILITY TRANSFORMATION
                      </span>
                      <span className="text-purple-400 text-xs">Multiple Nonprofits</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Level11 Technology Projects
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    Redesigned multiple nonprofit websites to make them more accessible, better for SEO, and easier for everyone to use through evidence-based design improvements.
                  </p>

                  {/* Enhanced results */}
                  <div className="bg-purple-900/50 border border-purple-600/30 rounded-xl p-6 mb-8">
                    <h4 className="text-purple-300 font-semibold mb-4 flex items-center gap-2">
                      🎯 Accessibility Impact
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">WCAG 2.2 Compliance</span>
                        <span className="text-green-400 font-bold">✓ Achieved</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">SEO Performance</span>
                        <span className="text-blue-400 font-bold">Improved</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">User Experience</span>
                        <span className="text-purple-400 font-bold">Enhanced</span>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl">
                    Learn More →
                  </a>
                </div>
                <div className="relative min-h-[400px]">
                  <Image
                    src={caseStudies[2]?.image || "/images/placeholder.jpg"}
                    alt="Level11 Technology Projects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Job Market Research - Enhanced with distinct visual identity */}
            <motion.div variants={caseStudyVariants} className="bg-gradient-to-r from-orange-900/40 to-amber-800/40 border-2 border-orange-600/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative min-h-[400px] order-2 lg:order-1">
                  <Image
                    src={caseStudies[3]?.image || "/images/placeholder.jpg"}
                    alt="Job Market Transformation Research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  {/* Stronger category badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-600 p-3 rounded-xl">
                      <span className="text-white text-xl">🔬</span>
                    </div>
                    <div>
                      <span className="text-orange-300 font-bold uppercase tracking-wider text-sm block">
                        AI RESEARCH
                      </span>
                      <span className="text-orange-400 text-xs">Industry Analysis</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Job Market Transformation Research
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    Conducted extensive research with 15+ industry professionals to understand hiring challenges and explore AI solutions for human-centered recruitment.
                  </p>

                  {/* Enhanced results */}
                  <div className="bg-orange-900/50 border border-orange-600/30 rounded-xl p-6 mb-8">
                    <h4 className="text-orange-300 font-semibold mb-4 flex items-center gap-2">
                      📊 Research Output
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
                        <div className="text-xs text-gray-300">Expert Interviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">8</div>
                        <div className="text-xs text-gray-300">Articles Published</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-400 mb-1">5.7K+</div>
                        <div className="text-xs text-gray-300">LinkedIn Impressions</div>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl">
                    Read Research →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={titleVariants} className="text-center mt-20">
            <div className="bg-background-primary/50 rounded-2xl p-8 md:p-12 border border-accent-blue/20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Have a Challenge to Solve?
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
                Let's discuss how we can work together to achieve your goals with innovative 
                AI solutions and strategic problem-solving.
              </p>
              <button className="btn-primary text-lg px-8 py-4">
                Start a Conversation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 