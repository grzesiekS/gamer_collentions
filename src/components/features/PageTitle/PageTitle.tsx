import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle : React.FC<PageTitleProps> = ({ titleContent }) => (
  <h1 className={styles.title}>{titleContent}</h1>
);

export default PageTitle;
