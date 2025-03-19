import React, { useState, useEffect } from "react";
import "./Info.css";

function Info() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=8eec44e641f54d87a4a81908251903&q=Niort&days=5&aqi=no&alerts=no")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
      <span className="card-title">Température à {weather.location.name}</span>
      <p><img src={`https:${weather.current.condition.icon}`} alt="Icône météo" /></p>
      <span className="temperature">{weather.current.temp_c}°C</span>
      <div className="wind">Vent {weather.current.wind_kph} km/h ({weather.current.wind_degree}°)</div>
    </>
  );
}

export default Info;
