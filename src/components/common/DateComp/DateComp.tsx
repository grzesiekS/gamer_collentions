import React from 'react';

const DateComp : React.FC<DateCompProps> = ({ day, month, year }) => (
  <p>{`${day}-${month}-${year}`}</p>
);

export default DateComp;
