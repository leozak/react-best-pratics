import React from 'react';
import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';

const Header = () => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Vincent 👋</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span>🔍</span> {/* Placeholder icon */}
          <span>🔔</span> {/* Placeholder icon */}
          <span>📅 19 May 2022</span>
          <Avatar src="https://i.pravatar.cc/32" alt="User Avatar" />
        </div>
      </div>
      <div className="flex justify-end items-center space-x-4">
        <Button className="hover:bg-gray-200 dark:hover:bg-gray-700">Filter</Button>
        <Button className="hover:bg-gray-200 dark:hover:bg-gray-700">Sort</Button>
        <Button className="bg-blue-500 text-white">New template</Button>
      </div>
    </header>
  );
};

export default Header;
