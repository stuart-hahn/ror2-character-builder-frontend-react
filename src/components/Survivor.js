import React from 'react';

const Survivor = ({ survivor, handleClick }) => (
  <div onClick={() => handleClick(survivor)}>
    <img src={survivor.avatar} alt={survivor.name} />
    <p>{survivor.name}</p>
  </div>
)

export default Survivor;
