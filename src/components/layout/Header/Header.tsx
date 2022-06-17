import React from 'react';
import PageTitle from '../../features/PageTitle/PageTitle';
import NavBar from '../../features/NavBar/NavBar';
import PageLogo from '../../features/PageLogo/PageLogo';
import Splash from '../../features/Splash/Splash';
import styles from './Header.module.scss';

const positionList = [
  {
    _id: '1',
    Name: 'Consoles',
  },
  {
    _id: '2',
    Name: 'Games',
  },
  {
    _id: '3',
    Name: 'News',
  },
  {
    _id: '4',
    Name: 'Search',
  },
];

const mainTitle = 'Game Colection';

const Header : React.FC = () => (
  <div className={styles.container}>
    <NavBar listOfPositions={positionList} />
    <Splash />
    <PageTitle titleContent={mainTitle} />
    <PageLogo />
  </div>
);

export default Header;
