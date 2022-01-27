import React from 'react';

const TeamCard = (props) => {
  return (
    <div className="teamcard">
      <div>{props.name}</div>
      <p>{props.why}</p>
      <a target="_blank" href={props.reference}>{props.ref_n}</a>
    </div>
  );
};

export default TeamCard;
