import React from 'react';

// custom components
import Survivor from './components/Survivor'
import ItemsList from './components/ItemsList'
import InputWithLabel from './components/InputWithLabel'

// data
import survivors from './data/survivors'
import items from './data/items'

const App = () => {
  const [selectedSurvivor, setSelectedSurvivor] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleClickSurvivor = survivor => setSelectedSurvivor(survivor)
  const handleSearch = event => setSearchTerm(event.target.value)

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  return (
    <div className="App ui container">
      <h1>Risk of Rain 2 Character Builder</h1>
      <p>Your current survivor is {selectedSurvivor.name || 'unselected'} </p>
      <p>To get started, choose a survivor below.</p>
      <div className="ui six column grid">
        {survivors.map(survivor => <Survivor key={survivor.id} survivor={survivor} handleClick={handleClickSurvivor} />)}
      </div>
      <hr />
      <div className="ui search">
        <InputWithLabel id='search' label='Search' value={searchTerm} onInputChange={handleSearch} />
      </div>
      <div className="ui relaxed divided list">
        <ItemsList items={filteredItems} />
      </div>
    </div>
  );
}

export default App;
