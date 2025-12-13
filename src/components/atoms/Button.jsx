import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
