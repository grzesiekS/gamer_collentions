import React from 'react';
import Information from '../../features/Info/Information';
import MainLayout from '../../layout/MainLayout/MainLayout';
import NewsInfo from '../../layout/NewsInfo/NewsInfo';

const MainPage : React.FC = () => (
  <MainLayout>
    <NewsInfo>
      <Information />
    </NewsInfo>
  </MainLayout>
);

export default MainPage;
