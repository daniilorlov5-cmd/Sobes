import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl ${className}`}>
      <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white">
        Ai
      </div>
      <span className="text-brand-dark">Sobes</span>
    </div>
  );
};