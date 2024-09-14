import React, { useState } from "react";
import countriesData from "./countriesData";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // This function will run every time the user types something
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    // Filter countries that match the search term (name or capital)
    const filteredSuggestions = countriesData.filter(
      (item) =>
        item.country.toLowerCase().includes(input.toLowerCase()) ||
        item.capital.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index}>
              {item.country} - {item.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
