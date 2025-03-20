import React, { useState, useEffect } from "react";
import "./Info.css";

function Info({ selectedDay }) {
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


  if (!weather) return <p>Chargement...</p>;


  const getDayOfWeek = (dateStr) => {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const date = new Date(dateStr + "T00:00:00");
    return days[date.getDay()];
  };

  const selectedWeather = weather.forecast.forecastday[selectedDay];

  return (
    <>
      <span className="card-title">Météo du {getDayOfWeek(selectedWeather.date)}</span>
      <p><img src={`https:${selectedWeather.day.condition.icon}`} alt="Icône météo" /></p>
      <span className="temperature">{selectedWeather.day.avgtemp_c}°C</span>
      <div className="wind">Vent {selectedWeather.day.maxwind_kph} km/h</div>
    </>
  );
}

export default Info;
