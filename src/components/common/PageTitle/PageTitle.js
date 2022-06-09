import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.scss';

const PageTitle = ({ titleContent }) => (
  <h1 className={styles.title}>{titleContent}</h1>
);

PageTitle.propTypes = {
  titleContent: PropTypes.string,
};

export default PageTitle;
