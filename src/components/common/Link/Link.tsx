import React from 'react';
import clsx from 'clsx';

import styles from './Link.module.scss';
import { sizeCSS } from '../../../Util';

const Link : React.FC<LinkProps> = ({ name, reference = '/#', size = sizeCSS.normal }) => (
  <a
    href={reference}
    className={clsx(styles.link, styles[size])}
  >
    {name}
  </a>
);

export default Link;
