
import React, { useState } from 'react';
import './App.css';
import countries from './data';

function App() {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    
    if (value.length > 0) {
      const filtered = countries.filter((country) =>
        country.country.toLowerCase().includes(value.toLowerCase()) ||
        country.capital.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div className="App">
      <h1>Fast Finder Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country or capital..."
          value={query}
          onChange={handleInputChange}
        />
        {query && filteredCountries.length > 0 && (
          <ul className="suggestions">
            {filteredCountries.map((country, index) => (
              <li key={index}>
                <strong>{country.country}</strong> - {country.capital}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
