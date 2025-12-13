import React, { useState } from 'react';
import NavItem from '../molecules/NavItem';
import ThemeSwitcher from '../molecules/ThemeSwitcher';

const Sidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [tasksOpen, setTasksOpen] = useState(true);

  return (
    <div className="flex flex-col w-64 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <span className="font-bold text-xl">Projects</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <NavItem href="#" icon="🏠">Team</NavItem>
            </li>
            <li className="mb-4">
              <button onClick={() => setProjectsOpen(!projectsOpen)} className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                <span>Projects</span>
                <span>{projectsOpen ? 'v' : '>'}</span>
              </button>
              {projectsOpen && (
                <ul className="pl-4 mt-2">
                  <li><NavItem href="#">All projects (3)</NavItem></li>
                  <li><NavItem href="#">Design system</NavItem></li>
                  <li><NavItem href="#">User flow</NavItem></li>
                  <li><NavItem href="#">UX research</NavItem></li>
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
                  <li><NavItem href="#">All tasks (11)</NavItem></li>
                  <li><NavItem href="#">To do (4)</NavItem></li>
                  <li><NavItem href="#">In progress (4)</NavItem></li>
                  <li><NavItem href="#">Done (3)</NavItem></li>
                </ul>
              )}
            </li>
            <li className="mb-4">
              <NavItem href="#">Reminders</NavItem>
            </li>
            <li>
              <NavItem href="#">Messengers</NavItem>
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
