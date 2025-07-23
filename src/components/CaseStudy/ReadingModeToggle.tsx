'use client';

import React from 'react';

interface ReadingModeToggleProps {
  activeMode: 'gist' | 'deepDive';
  onModeChange: (mode: 'gist' | 'deepDive') => void;
}

const ReadingModeToggle: React.FC<ReadingModeToggleProps> = ({
  activeMode,
  onModeChange,
}) => {

  return (
    <div className="flex justify-center mb-8 mt-6">
      <div className="bg-gray-800 p-1 rounded-full border border-gray-700 shadow-lg">
        <div className="flex">
          <button
            onClick={() => onModeChange('gist')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeMode === 'gist'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
            aria-label="Switch to Gist view - 30 second read"
            aria-pressed={activeMode === 'gist'}
          >
            <div className="text-center">
              <div className="text-sm font-semibold">Gist</div>
              <div className="text-xs opacity-75">30 sec read</div>
            </div>
          </button>
          <button
            onClick={() => onModeChange('deepDive')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeMode === 'deepDive'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
            aria-label="Switch to Deep Dive view - 2-3 minute read"
            aria-pressed={activeMode === 'deepDive'}
          >
            <div className="text-center">
              <div className="text-sm font-semibold">Deep Dive</div>
              <div className="text-xs opacity-75">2-3 min read</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadingModeToggle; 