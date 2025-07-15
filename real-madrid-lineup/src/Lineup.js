import React, { useState } from 'react';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const Lineup = () => {
  const [players, setPlayers] = useState([
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
  ]);
  const [showForm, setShowForm] = useState(false);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Real Madrid Starting 11</h2>
      {players.map((player) => (
        <Player key={player.name} name={player.name} position={player.position} />
      ))}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Player'}
      </button>
      {showForm && <AddPlayerForm addPlayer={addPlayer} />}
    </div>
  );
};

export default Lineup;
