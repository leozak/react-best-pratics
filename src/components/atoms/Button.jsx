import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-md bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
