import React from 'react';
import { sizeCSS } from '../../../Util';
import Logo from '../../common/Logo/Logo';
import styles from './PageLogo.module.scss';

const PageLogo : React.FC = () => (
  <div className={styles.container}>
    <Logo size={sizeCSS.big} />
  </div>
);

export default PageLogo;
