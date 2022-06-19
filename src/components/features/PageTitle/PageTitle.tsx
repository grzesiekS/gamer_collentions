import React from 'react';
import { alignTextCSS, sizeCSS } from '../../../Util';
import Title from '../../common/Title/Title';

const PageTitle : React.FC<PageTitleProps> = ({ titleContent }) => (
  <Title content={titleContent} size={sizeCSS.big} align={alignTextCSS.center} />
);

export default PageTitle;
