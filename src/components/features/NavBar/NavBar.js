import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../common/Link/Link';
import styles from './NavBar.module.scss';

const NavBar = ({ listOfPositions, linkSize = 'normal' }) => (
  <ul className={styles.container}>
    {listOfPositions.map(position => (
      <li
        key={position._id}
        className={styles.position}
      >
        <Link name={position.Name} size={linkSize} />
      </li>
    ))}
  </ul>
);

NavBar.propTypes = {
  listOfPositions: PropTypes.array,
  linkSize: PropTypes.string,
};

export default NavBar;
