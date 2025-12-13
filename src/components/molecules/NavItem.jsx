import React from 'react';

const NavItem = ({ children, href, icon }) => {
  return (
    <a href={href} className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
    </a>
  );
};

export default NavItem;
