import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutNav from './LayoutNav';

const Layout = () => {
  return (
    <div className="layout">
      <LayoutNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
