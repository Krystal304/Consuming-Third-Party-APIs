

import { useState, useEffect } from 'react'


import StarshipCard from './components/StarshipCard'

import { getAllStarships } from './services/sw-api'

import './App.css'

function App() {

  //use state
  const [starships, setStarships] = useState([]);

  //use effect
  useEffect(() => {
    getAllStarships().then((data) => setStarships(data.results))
  }, []);

  return (
    <div className="App">
      <h1>Starships</h1>
      <div className="starships">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship}/>
        ))}
      </div>
    </div>
  );
}

export default App