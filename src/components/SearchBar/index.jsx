import { useState } from "react";
import { useGetCitySuggestionsQuery } from "../../store/api/currentWeatherApi";
import { useDebounce } from "../../hooks/useDebounce";

import "./index.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const debouncedTerm = useDebounce(term, 500);

  const { data = [] } = useGetCitySuggestionsQuery(debouncedTerm, {
    skip: !debouncedTerm.trim(), // Skip API call if term is empty
  });

  const cities = data.map((data) => data.name);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestion = (city) => {
    onFormSubmit(city);
    setShowSuggestions(false);
    setTerm("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
    setShowSuggestions(false);
    setTerm("");
  };

  return (
    <form className="search-container" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search for location"
        className="search-input"
        value={term}
        onChange={handleOnChange}
        onFocus={() => setShowSuggestions(term.length > 0)}
      />
      {showSuggestions && cities.length > 0 && (
        <ul className="suggestions-dropdown">
          {cities.map((city, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestion(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
