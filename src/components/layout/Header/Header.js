import React from 'react';
import HorizontalList from '../../features/HorizontalList/HorizontalList';
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

const Header = () => (
  <div className={styles.container}>
    <HorizontalList listOfPositions={positionList} linkSize='big' />
  </div>
);

export default Header;
