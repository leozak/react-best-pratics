import React from 'react';

const Tag = ({ children, color }) => {
  const getTagColor = (color) => {
    const colors = {
      red: 'bg-red-200 text-red-800',
      blue: 'bg-blue-200 text-blue-800',
      green: 'bg-green-200 text-green-800',
      yellow: 'bg-yellow-200 text-yellow-800',
      purple: 'bg-purple-200 text-purple-800',
      default: 'bg-gray-200 text-gray-800',
    };
    return colors[color] || colors.default;
  };

  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTagColor(color)}`}>
      {children}
    </span>
  );
};

export default Tag;
