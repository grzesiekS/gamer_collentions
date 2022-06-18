import React from 'react';
import { sizeCSS } from '../../../Util';

import Link from '../../common/Link/Link';
import styles from './NavBar.module.scss';

const NavBar : React.FC<NavBarProps> = ({ listOfPositions }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {listOfPositions.map(position => (
        <li
          key={position._id}
          className={styles.position}
        >
          <Link name={position.Name} size={sizeCSS.big} />
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
