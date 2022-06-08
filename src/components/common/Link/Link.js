import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Link.module.scss';

const Link = ({ name, reference = '/#', size = 'normal' }) => (
  <a
    href={reference}
    className={clsx(styles.link, styles[size])}
  >
    {name}
  </a>
);

Link.propTypes = {
  name: PropTypes.string,
  reference: PropTypes.string,
  size: PropTypes.string,
};

export default Link;
