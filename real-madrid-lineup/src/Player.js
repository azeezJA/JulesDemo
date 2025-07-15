import React from 'react';

const Player = ({ name, position }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default Player;
