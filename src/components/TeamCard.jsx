import React from 'react';

const TeamCard = (props) => {
  return (
    <div className="teamcard">
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <p>{props.why}</p>
      <a target="_blank" href={props.reference} >{props.ref_n}</a>
    </div>
  );
};

export default TeamCard;
