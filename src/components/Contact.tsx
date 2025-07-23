'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'haripxls@gmail.com',
      href: 'mailto:haripxls@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(737) 733-4049',
      href: 'tel:+17377334049'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Austin, Texas',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hari-rajashekar-81816818a/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Stronger opening with clear value proposition */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Accessible
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to create AI solutions that actually work for everyone? Let's discuss how we can make technology more inclusive together.
            </p>
            
            {/* Primary CTA - Most Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center">
                💬 Chat with AI Hari
                <span className="text-sm opacity-75">← Start here!</span>
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-600 text-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                📧 Send Direct Message
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Quick Contact */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  Quick Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:haripxls@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium">
                        haripxls@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+17377334049" className="text-blue-400 hover:text-blue-300 font-medium">
                        (737) 733-4049
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="text-gray-300 text-sm">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/hari-rajashekar-81816818a/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                        Connect with me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white font-medium">Austin, Texas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form & What I'm Looking For */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Contact Form */}
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject *</label>
                      <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message *</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none transition-colors"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                        Something went wrong. Please try again or contact me directly.
                      </div>
                    )}
                  </form>
                </div>

                {/* What I'm Looking For */}
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-600/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    What I'm Looking For
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg">✓</span>
                      <div>
                        <span className="text-lg text-white font-medium block">Accessibility-First Organizations</span>
                        <span className="text-gray-300 text-sm">Teams ready to prioritize inclusive design</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg">✓</span>
                      <div>
                        <span className="text-lg text-white font-medium block">Human-Centered AI Projects</span>
                        <span className="text-gray-300 text-sm">Solutions that solve real problems for real people</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg">✓</span>
                      <div>
                        <span className="text-lg text-white font-medium block">Inclusive Technology Teams</span>
                        <span className="text-gray-300 text-sm">Building the future of ethical AI development</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 text-lg">✓</span>
                      <div>
                        <span className="text-lg text-white font-medium block">Rapid AI Implementation</span>
                        <span className="text-gray-300 text-sm">Fast, practical solutions using prompt engineering</span>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-blue-900/30 rounded-xl border border-blue-600/30">
                    <p className="text-blue-200 text-sm">
                      <strong>Currently available for:</strong> Freelance projects, consulting, and full-time opportunities in AI product development and accessibility design.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA - Secondary */}
          <motion.div variants={itemVariants} className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Whether it's an AI solution that actually works or making your website accessible to everyone, let's discuss how we can work together.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start a Conversation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-700 mt-20 pt-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Hari Rajashekar. Building accessible AI solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 