import clsx from 'clsx';
import React, { useState } from 'react';
import { sizeCSS } from '../../../Util';
import Button from '../../common/Button/Button';

import Link from '../../common/Link/Link';
import styles from './NavBar.module.scss';

const NavBar : React.FC<NavBarProps> = ({ listOfPositions }) => {

  const [listVisible, setListVisible] = useState(false);

  const ChangeListVisibility = () => {
    setListVisible(!listVisible);
  };

  return (
    <div className={listVisible ? clsx(styles.container, styles.listVisible) : styles.container}>
      <ul className={styles.list}>
        {listOfPositions.map(position => (
          <li
            key={position._id}
            className={styles.position}
          >
            <Link name={position.Name} size={sizeCSS.big} />
          </li>
        ))}
      </ul>
      <div className={styles.sliderButton}>
        <Button
          content='test'
          OnClickFunc={ChangeListVisibility}
        />
      </div>
    </div>
  );
};

export default NavBar;
