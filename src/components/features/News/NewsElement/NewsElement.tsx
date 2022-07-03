import React from 'react';
import styles from './NewsElement.module.scss';
import Title from '../../../common/Title/Title';
import { alignTextCSS, sizeCSS } from '../../../../Util';

const NewsElement : React.FC<NewsElementProps> = ({ title, description, date }) => (
  <div className={styles.container}>
    <Title align={alignTextCSS.center} size={sizeCSS.small} content={title} />
    <p className={styles.description}>{description}</p>
  </div>
);

export default NewsElement;
