import React from 'react';
import Survivor from './components/Survivor'
import survivors from './data/survivors'

const App = () => {
  const [selectedSurvivor, setSelectedSurvivor] = React.useState('')

  const handleClickSurvivor = survivor => setSelectedSurvivor(survivor)

  return (
    <div className="App">
      <h1>Risk of Rain 2 Character Builder</h1>
      <p>Your current survivor is {selectedSurvivor.name || 'unselected'} </p>
      <p>To get started, choose a survivor below.</p>
      <ul>
        {survivors.map(survivor => <Survivor key={survivor.id} survivor={survivor} handleClick={handleClickSurvivor} />)}
      </ul>
    </div>
  );
}

export default App;
