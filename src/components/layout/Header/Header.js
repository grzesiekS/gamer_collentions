import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import NavBar from '../../features/NavBar/NavBar';
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

const Header = () => (
  <div className={styles.container}>
    <NavBar listOfPositions={positionList} linkSize='big' />
    <Splash />
    <PageTitle titleContent={mainTitle} />
  </div>
);

export default Header;
