import React from 'react';
import styles from './NewsInfo.module.scss';
import News from '../../features/News/News';

const NewsInfo : React.FC<NewsInfoProps> = ({ children }) => (
  <div className={styles.container}>
    <News />
    <div>
      {children}
    </div>
  </div>
);

export default NewsInfo;
