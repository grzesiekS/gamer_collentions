import clsx from 'clsx';
import React, { useState } from 'react';
import { sizeCSS } from '../../../Util';
import Button from '../../common/Button/Button';
import IconsGenerator from '../../common/IconsGenerator/IconsGenerator';
import { faCode, fas } from '@fortawesome/free-solid-svg-icons';

import Link from '../../common/Link/Link';
import styles from './NavBar.module.scss';

const NavBar : React.FC<NavBarProps> = ({ listOfPositions }) => {

  const [listVisible, setListVisible] = useState(false);
  const [sliderButtonIcon, setSliderButtonIcon] = useState('faChevronRight');

  const SliderButtonAction = () => {
    ChangeListVisibility();
    ChangeSliderButtonIcon();
  };

  const ChangeListVisibility = () => {
    setListVisible(!listVisible);
  };

  const ChangeSliderButtonIcon = () => {
    if(listVisible) {
      setSliderButtonIcon('faChevronRight');
    } else {
      setSliderButtonIcon('faChevronLeft');
    }
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
          OnClickFunc={SliderButtonAction}>
          <IconsGenerator iconName={sliderButtonIcon} alternativeIcon={faCode} iconsList={fas} />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
