import React from 'react';
import clsx from 'clsx';

import styles from './Logo.module.scss';
import { sizeCSS } from '../../../Util';

const Logo : React.FC<LogoProps> = ({ size = sizeCSS.normal }) => (
  <img className={clsx(styles.logo, styles[size])} src='images/game-console-svgrepo-com.svg' alt='Test' />
);

export default Logo;
