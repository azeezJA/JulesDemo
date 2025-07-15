import React from 'react';
import Player from './Player';

const Lineup = () => {
  const players = [
    { name: 'Thibaut Courtois', position: 'Goalkeeper' },
    { name: 'Dani Carvajal', position: 'Right Back' },
    { name: 'Éder Militão', position: 'Center Back' },
    { name: 'David Alaba', position: 'Center Back' },
    { name: 'Ferland Mendy', position: 'Left Back' },
    { name: 'Casemiro', position: 'Defensive Midfielder' },
    { name: 'Toni Kroos', position: 'Central Midfielder' },
    { name: 'Luka Modrić', position: 'Central Midfielder' },
    { name: 'Federico Valverde', position: 'Right Winger' },
    { name: 'Karim Benzema', position: 'Center Forward' },
    { name: 'Vinícius Júnior', position: 'Left Winger' },
  ];

  return (
    <div>
      <h2>Real Madrid Starting 11</h2>
      {players.map((player) => (
        <Player key={player.name} name={player.name} position={player.position} />
      ))}
    </div>
  );
};

export default Lineup;
