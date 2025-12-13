import React from 'react';

const ProgressBar = ({ progress }) => {
  const getProgressBarColor = (progress) => {
    if (progress < 40) return 'bg-pink-500';
    if (progress < 70) return 'bg-orange-500';
    return 'bg-green-500';
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
      <div className={`${getProgressBarColor(progress)} h-1.5 rounded-full`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
