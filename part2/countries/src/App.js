import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div className="App">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
      <Countries matches={countries.filter(country => country.name.common.toLowerCase().includes(search))}/>
    </div>
  );
}

export default App;
