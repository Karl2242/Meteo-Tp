import React, { useState, useEffect } from "react";

function Footer() {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0); // 0 = jeudi par défaut

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=8eec44e641f54d87a4a81908251903&q=Niort&days=5&aqi=no&alerts=no")
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  const handleDayClick = (index) => {
    setSelectedDay(index);
  };

  return (
    <>
      <h1>Météo à Niort</h1>

      {/* 🔥 Boutons pour changer de jour */}
      <div>
        {weather &&
          weather.forecast.forecastday.map((day, index) => (
            <a key={index} href="#" onClick={(e) => { 
                e.preventDefault(); // Empêche le rechargement de la page
                handleDayClick(index); 
              }}>
              {day.date}
            </a>
          ))}
      </div>

      {/* 🔥 Affichage des infos météo du jour sélectionné */}
      {weather ? (
        <div>
          <h2>Date : {weather.forecast.forecastday[selectedDay].date}</h2>
          <p>Température : {weather.forecast.forecastday[selectedDay].day.avgtemp_c}°C</p>
          <p>Condition : {weather.forecast.forecastday[selectedDay].day.condition.text}</p>
          <img src={weather.forecast.forecastday[selectedDay].day.condition.icon} alt="Météo" />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default Footer;
