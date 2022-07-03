import React from 'react';
import { alignTextCSS, sizeCSS } from '../../../../Util';
import Title from '../../../common/Title/Title';

const InfoElement : React.FC<InfoElementProps> = ({ title, description }) => (
  <div>
    <Title align={alignTextCSS.left} size={sizeCSS.small} content={title} />
    <p>{description}</p>
  </div>
);

export default InfoElement;
