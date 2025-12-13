import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../organisms/Header';
import Content from '../organisms/Content';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Content>
          {children}
        </Content>
      </div>
    </div>
  );
};

export default Layout;
