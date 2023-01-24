import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  return (
    <div className="column">
      <FontAwesomeIcon icon={props.icon} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Card;
