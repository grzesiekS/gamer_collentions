import React from 'react';
import { alignTextCSS, sizeCSS } from '../../../Util';
import Title from '../../common/Title/Title';
import styles from './News.module.scss';
import NewsElement from './NewsElement/NewsElement';

const newsData = [
  {
    _id: '1',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
    date: new Date(),
  },
  {
    _id: '2',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
    date: new Date(),
  },
  {
    _id: '3',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
    date: new Date(),
  },
  {
    _id: '4',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
    date: new Date(),
  },
  {
    _id: '5',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan at sapien a imperdiet. Ut porttitor lacinia lectus, molestie rutrum turpis volutpat id. Curabitur pellentesque orci vitae arcu mollis condimentum. Pellentesque id dui dolor. Aenean sem ipsum, aliquam eu sagittis sit amet, consectetur eu nisi. Quisque sagittis magna vitae lobortis lobortis.',
    date: new Date(),
  },
];

const News : React.FC = () => (
  <div className={styles.container}>
    <Title
      align={alignTextCSS.center}
      size={sizeCSS.small}
      content={`News`}
    />
    {newsData.map(news => (
      <NewsElement
        key={news._id}
        title={news.title}
        description={news.description}
        date={news.date}
      />
    ))}
  </div>
);

export default News;
