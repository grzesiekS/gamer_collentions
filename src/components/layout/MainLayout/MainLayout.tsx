import React from 'react';

import Header from '../Header/Header';

const MainLayout : React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
