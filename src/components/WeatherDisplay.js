import React from "react";

const WeatherDisplay = ({ weather, error }) => {
  if (error) {
    return <div className="error-msg">{error}</div>;
  }

  if (!weather) {
    return <div className="info-msg">Enter a city to get weather info.</div>;
  }

  const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather: weatherDetails,
    wind: { speed },
  } = weather;

  const description = weatherDetails[0].description;
  const icon = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>
        {name}, {country}
      </h2>
      <img src={icon} alt={description} />
      <p><strong>Temperature:</strong> {temp}°C</p>
      <p><strong>Condition:</strong> {description}</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      <p><strong>Wind Speed:</strong> {speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
