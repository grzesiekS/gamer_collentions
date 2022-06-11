import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../common/Link/Link';
import styles from './NavBar.module.scss';

const NavBar = ({ listOfPositions, linkSize = 'normal' }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {listOfPositions.map(position => (
        <li
          key={position._id}
          className={styles.position}
        >
          <Link name={position.Name} size={linkSize} />
        </li>
      ))}
    </ul>
  </div>
);

NavBar.propTypes = {
  listOfPositions: PropTypes.array,
  linkSize: PropTypes.oneOf(['small','normal','big']),
};

export default NavBar;
