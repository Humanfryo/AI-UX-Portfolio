'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialData } from '@/data/collectiveRootsData';

interface QuoteBlockProps {
  testimonial: TestimonialData;
  index: number;
  className?: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ testimonial, index, className = '' }) => {
  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={quoteVariants}
      className={`${className}`}
    >
      <blockquote className="text-xl text-gray-100 italic leading-relaxed border-l-4 border-blue-500 pl-6 my-8 bg-gray-800/50 py-6 rounded-r-lg">
        "{testimonial.quote}"
        <cite className="block text-lg text-blue-300 mt-4 not-italic font-medium">
          - {testimonial.author}
        </cite>
      </blockquote>
    </motion.div>
  );
};

export default QuoteBlock; 