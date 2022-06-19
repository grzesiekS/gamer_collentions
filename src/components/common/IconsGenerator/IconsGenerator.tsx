import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './IconsGenerator.module.scss';

const IconsGenerator : React.FC<IconsGeneratorProps> = ({ iconName, iconsList, alternativeIcon, children}) => (
  <div className={styles.icon}>
    {iconName === '' || iconsList[iconName] === undefined
      ? <FontAwesomeIcon icon={alternativeIcon} />
      : <FontAwesomeIcon icon={iconsList[iconName]} />
    }
    {children}
  </div>
);

export default IconsGenerator;
