import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../common/Link/Link';
import styles from './HorizontalList.module.scss';

const HorizontalList = ({ listOfPositions, linkSize = 'normal' }) => (
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

HorizontalList.propTypes = {
  listOfPositions: PropTypes.array,
  linkSize: PropTypes.string,
};

export default HorizontalList;
