import React from 'react';
import Survivor from './components/Survivor'
import survivors from './data/survivors'
import items from './data/items'

const ItemsList = ({ items }) => (
  items.map(item => <li>{item.name}</li>)
)

const Search = ({ onSearch, searchTerm }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={searchTerm} />
  </div>
);

const App = () => {
  const [selectedSurvivor, setSelectedSurvivor] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleClickSurvivor = survivor => setSelectedSurvivor(survivor)
  const handleSearch = event => setSearchTerm(event.target.value)

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="App">
      <h1>Risk of Rain 2 Character Builder</h1>
      <p>Your current survivor is {selectedSurvivor.name || 'unselected'} </p>
      <p>To get started, choose a survivor below.</p>
      <ul>
        {survivors.map(survivor => <Survivor key={survivor.id} survivor={survivor} handleClick={handleClickSurvivor} />)}
      </ul>
      <hr />
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <ol>
        <ItemsList items={filteredItems} />
      </ol>
    </div>
  );
}

export default App;
