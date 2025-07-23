'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricData } from '@/data/collectiveRootsData';

interface MetricCardProps {
  metric: MetricData;
  index: number;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, index, className = '' }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  // Get color classes based on metric color or improvement
  const getColorClasses = () => {
    if (metric.color) {
      const colorMap = {
        blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
        red: 'bg-red-500/10 border-red-500/20 text-red-400',
        yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
        green: 'bg-green-500/10 border-green-500/20 text-green-400',
      };
      return colorMap[metric.color];
    }
    
    // Default to green for improvements
    return 'bg-green-500/10 border-green-500/20 text-green-400';
  };

  // Determine if this is an improvement metric
  const hasImprovement = metric.improvement || (metric.before && metric.after);
  const improvementValue = metric.improvement ? parseFloat(metric.improvement.replace('%', '')) : 0;
  const isPositiveImprovement = improvementValue > 0;

  return (
    <motion.div
      variants={cardVariants}
      className={`
        bg-gray-800 border border-gray-600 rounded-lg p-6
        hover:shadow-lg transition-all duration-300
        ${className}
      `}
    >
      <div className="space-y-4">
        {/* Metric Label */}
        <div className="text-lg font-medium text-gray-300 uppercase tracking-wide">
          {metric.label}
        </div>

        {/* Simple Value Display */}
        {metric.value && !hasImprovement && (
          <div className="text-4xl font-bold text-white mb-2">
            {metric.value}
          </div>
        )}

        {/* Before/After with Improvement */}
        {hasImprovement && (
          <div className="space-y-4">
            {/* Before/After Values */}
            {metric.before && metric.after && (
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  <span className="block text-sm font-medium">Before</span>
                  <span className="font-medium text-lg">{metric.before}</span>
                </div>
                <div className="text-white">
                  <span className="block text-sm font-medium">After</span>
                  <span className="font-bold text-4xl">{metric.after}</span>
                </div>
              </div>
            )}

            {/* Improvement Badge */}
            {metric.improvement && (
              <div className={`
                flex items-center space-x-2 text-lg font-medium
                ${isPositiveImprovement ? 'text-green-400' : 'text-red-400'}
              `}>
                {isPositiveImprovement ? (
                  <TrendingUp size={20} />
                ) : (
                  <TrendingDown size={20} />
                )}
                <span>
                  {isPositiveImprovement ? '+' : ''}{metric.improvement} improvement
                </span>
              </div>
            )}
          </div>
        )}

        {/* Only Improvement (no before/after) */}
        {metric.improvement && !metric.before && !metric.after && (
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="text-4xl font-bold text-white">
                +{metric.improvement}
              </div>
              <TrendingUp size={24} className="text-green-400" />
            </div>
            <div className="text-lg text-blue-300 mt-2">
              improvement
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MetricCard; 