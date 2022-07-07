import React from 'react';
import { alignTextCSS, sizeCSS } from '../../../Util';
import Title from '../../common/Title/Title';
import styles from './Info.module.scss';
import InfoElement from './InfoElement/InfoElement';

const infoData = [
  {
    _id: '1',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
  },
  {
    _id: '2',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
  },
  {
    _id: '3',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
  },
  {
    _id: '4',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
  },
];

const Information : React.FC = () => (
  <div className={styles.container}>
    <Title
      align={alignTextCSS.left}
      size={sizeCSS.normal}
      content={`Newest Information`}
    />
    {infoData.map(info => (
      <InfoElement key={info._id} title={info.title} description={info.description} />
    ))}
  </div>
);

export default Information;
