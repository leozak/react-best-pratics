import React from 'react';

const NavItem = ({ children, href, icon, isActive }) => {
  const activeClasses = isActive ? 'bg-gray-200 dark:bg-gray-700 font-bold' : '';

  return (
    <a
      href={href}
      className={`flex items-center p-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 ${activeClasses}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
    </a>
  );
};

export default NavItem;
