import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800" />
  );
};

export default Avatar;
