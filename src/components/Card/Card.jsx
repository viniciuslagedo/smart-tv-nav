import React from 'react';
import './Card.scss';
import withFocusable from '../withFocusable/withFocusable';

let Card = props => {
  const { focused } = props;
  return <button className={`Card ${focused ? 'active' : ''}`}></button>;
};

export default Card = withFocusable(Card);
