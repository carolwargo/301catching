import React from 'react';
import CatchingHeader from './CatchingHeader';
import CatchingFooter from './CatchingFooter';

function Layout({ children }) {
  return (
    <div>
      <CatchingHeader />
      <main>
        {children}
        </main>
      <CatchingFooter />
    </div>
  );
}

export default Layout;
