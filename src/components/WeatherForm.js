import React, { useState } from "react";

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />
      <button type="submit" className="search-btn">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
