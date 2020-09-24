import React from 'react';
import survivors from './survivors'

const Survivor = ({ survivor }) => (
  <div>
    <img src={survivor.avatar} alt={survivor.name} />
    <p>{survivor.name}</p>
  </div>
)

function App() {
  return (
    <div className="App">
      <h1>Risk of Rain 2 Character Builder</h1>
      <p>To get started, choose a survivor below.</p>
      <ul>
        {survivors.map(survivor => <Survivor key={survivor.id} survivor={survivor} />)}
      </ul>
    </div>
  );
}

export default App;
