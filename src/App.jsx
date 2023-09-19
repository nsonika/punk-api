import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeerList from './components/BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Punk API</h1>
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={handleSearch}
      />
      <BeerList beers={filteredBeers} />
    </div>
  );
}

export default App;
