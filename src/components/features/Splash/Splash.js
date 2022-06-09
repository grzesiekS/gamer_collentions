import React from 'react';
import styles from './Splash.module.scss';

const splashData = {
  src: 'images/lorenzo-herrera-p0j-mE6mGo4-unsplash.webp',
  alt: 'Photo by Lorenzo Herrera on Unsplash',
};

const Splash = () => (
  <div className={styles.container}>
    <img className={styles.image} src={splashData.src} alt={splashData.alt} />
  </div>
);

export default Splash;
