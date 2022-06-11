import React from 'react';
import Logo from '../../common/Logo/Logo';
import styles from './PageLogo.module.scss';

const PageLogo = () => (
  <div className={styles.container}>
    <Logo size='big' />
  </div>
);

export default PageLogo;
