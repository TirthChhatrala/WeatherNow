import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

const API_KEY = "Add Your API key";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setError(null);
    setWeatherData(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please check the city name.");
        } else {
          throw new Error("Failed to fetch weather data.");
        }
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weatherData} error={error} />
    </div>
  );
}

export default App;
