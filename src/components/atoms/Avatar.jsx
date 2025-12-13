import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
      />
      <span
        className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        {alt}
      </span>
    </div>
  );
};

export default Avatar;
