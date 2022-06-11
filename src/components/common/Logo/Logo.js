import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

const Logo = ({ size = 'normal' }) => (
  <img className={clsx(styles.logo, styles[size])} src='images/game-console-svgrepo-com.svg' alt='Test' />
);

Logo.propTypes = {
  size: PropTypes.oneOf(['small','normal','big']),
};

export default Logo;
