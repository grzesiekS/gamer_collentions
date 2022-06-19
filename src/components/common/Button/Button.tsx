import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

const Button : React.FC<ButtonProps> = ({ content, children, OnClickFunc }) => (
  <div className={styles.button} onClick={OnClickFunc}>
    {children}
    <p className={children !== undefined
      ? clsx(styles.inactive) : clsx(styles.content)}>
      {content}
    </p>
  </div>
);

export default Button;
