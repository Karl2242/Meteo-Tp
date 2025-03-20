import React, { useState, useEffect } from "react";

function Footer({ setSelectedDay, city }) { 
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=8eec44e641f54d87a4a81908251903&q=${city}&days=5&aqi=no&alerts=no`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, [city]); 

  const getDayOfWeek = (dateStr) => {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const date = new Date(dateStr + "T00:00:00");
    return days[date.getDay()];
  };

  return (
    <>
      <h1>Météo à {city}</h1>

      <div>
        {weather &&
          weather.forecast.forecastday.map((day, index) => (
            <a key={index} href="#" onClick={(e) => { 
                e.preventDefault(); 
                setSelectedDay(index); 
              }}>
              {getDayOfWeek(day.date)}
            </a>
          ))}
      </div>
    </>
  );
}

export default Footer;
