import React from 'react';
import styles from './NewsElement.module.scss';
import Title from '../../../common/Title/Title';
import { alignTextCSS, sizeCSS } from '../../../../Util';
import DateComp from '../../../common/DateComp/DateComp';

const NewsElement : React.FC<NewsElementProps> = ({ title, description, date }) => (
  <div className={styles.container}>
    <Title align={alignTextCSS.center} size={sizeCSS.small} content={title} />
    <p className={styles.description}>{description}</p>
    <DateComp day={date.getDate()} month={date.getMonth()} year={date.getFullYear()} />
  </div>
);

export default NewsElement;
