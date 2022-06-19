import React from 'react';
import styles from './Button.module.scss';

const Button : React.FC<ButtonProps> = ({ content, children, OnClickFunc }) => (
  <div className={styles.button} onClick={OnClickFunc}>
    <div className={styles.content}>
      {children !== undefined ? children : content}
    </div>
  </div>
);

export default Button;
