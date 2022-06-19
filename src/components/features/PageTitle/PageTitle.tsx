import React from 'react';
import { alignTextCSS, sizeCSS } from '../../../Util';
import Title from '../../common/Title/Title';
import styles from './PageTitle.module.scss';

const PageTitle : React.FC<PageTitleProps> = ({ titleContent }) => (
  <div className={styles.container}>
    <Title content={titleContent} size={sizeCSS.big} align={alignTextCSS.center} />
  </div>
);

export default PageTitle;
