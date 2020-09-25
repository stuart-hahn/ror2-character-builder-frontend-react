import React from 'react';

const Survivor = ({ survivor, handleClick }) => (
  <div className="column">
    <div className="ui link fluid card" onClick={() => handleClick(survivor)}>
      <div className="image">
        <img src={survivor.avatar} alt={survivor.name} />
      </div>
      <div className="content">
        <div className="center aligned header">
          {survivor.name}
        </div>
      </div>
    </div>
  </div>
)

export default Survivor;