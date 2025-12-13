import React, { useState } from 'react';
import NavItem from '../molecules/NavItem';
import ThemeSwitcher from '../molecules/ThemeSwitcher';

const Sidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [tasksOpen, setTasksOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Design system');

  const handleNavItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="flex flex-col w-64 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <span className="font-bold text-xl">Projects</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <div onClick={() => handleNavItemClick('Team')}>
                <NavItem href="#" icon="🏠" isActive={activeItem === 'Team'}>Team</NavItem>
              </div>
            </li>
            <li className="mb-4">
              <button onClick={() => setProjectsOpen(!projectsOpen)} className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <span>Projects</span>
                <span>{projectsOpen ? 'v' : '>'}</span>
              </button>
              {projectsOpen && (
                <ul className="pl-4 mt-2">
                  <li onClick={() => handleNavItemClick('All projects')}><NavItem href="#" isActive={activeItem === 'All projects'}>All projects (3)</NavItem></li>
                  <li onClick={() => handleNavItemClick('Design system')}><NavItem href="#" isActive={activeItem === 'Design system'}>Design system</NavItem></li>
                  <li onClick={() => handleNavItemClick('User flow')}><NavItem href="#" isActive={activeItem === 'User flow'}>User flow</NavItem></li>
                  <li onClick={() => handleNavItemClick('UX research')}><NavItem href="#" isActive={activeItem === 'UX research'}>UX research</NavItem></li>
                </ul>
              )}
            </li>
            <li className="mb-4">
              <button onClick={() => setTasksOpen(!tasksOpen)} className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <span>Tasks</span>
                <span>{tasksOpen ? 'v' : '>'}</span>
              </button>
              {tasksOpen && (
                <ul className="pl-4 mt-2">
                  <li onClick={() => handleNavItemClick('All tasks')}><NavItem href="#" isActive={activeItem === 'All tasks'}>All tasks (11)</NavItem></li>
                  <li onClick={() => handleNavItemClick('To do')}><NavItem href="#" isActive={activeItem === 'To do'}>To do (4)</NavItem></li>
                  <li onClick={() => handleNavItemClick('In progress')}><NavItem href="#" isActive={activeItem === 'In progress'}>In progress (4)</NavItem></li>
                  <li onClick={() => handleNavItemClick('Done')}><NavItem href="#" isActive={activeItem === 'Done'}>Done (3)</NavItem></li>
                </ul>
              )}
            </li>
            <li className="mb-4" onClick={() => handleNavItemClick('Reminders')}>
              <NavItem href="#" isActive={activeItem === 'Reminders'}>Reminders</NavItem>
            </li>
            <li onClick={() => handleNavItemClick('Messengers')}>
              <NavItem href="#" isActive={activeItem === 'Messengers'}>Messengers</NavItem>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
