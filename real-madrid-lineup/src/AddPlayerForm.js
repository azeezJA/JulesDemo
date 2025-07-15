import React, { useState } from 'react';

const AddPlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position) return;
    addPlayer({ name, position });
    setName('');
    setPosition('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
