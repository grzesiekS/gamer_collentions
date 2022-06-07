import React from 'react';
import PropTypes from 'prop-types';

import styles from './Link.module.scss';

const Link = ({ name, reference = '/#' }) => (
  <a
    href={reference}
    className={styles.link}
  >
    {name}
  </a>
);

Link.propTypes = {
  name: PropTypes.string,
  reference: PropTypes.string,
};

export default Link;
