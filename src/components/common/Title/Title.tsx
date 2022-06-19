import React from 'react';
import clsx from 'clsx';
import styles from './Title.module.scss';

const Title : React.FC<TitleProps> = ({ content, size, align }) => (
  <h1 className={clsx(styles.title, styles[size], styles[align])}>{content}</h1>
);

export default Title;
