import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";

function WeatherCalendar() {
    const [weatherData, setWeatherData] = useState(null);
    const [location] = useState({ latitude: 47.5, longitude: 8.7167 }); // Winterthur

    useEffect(() => {
        const loadWeatherData = async () => {
            const data = await fetchWeatherData(location.latitude, location.longitude);
            setWeatherData(data);
        };
        loadWeatherData();
    }, [location]);

    if (!weatherData) {
        return <div className="loading">Lade Wetterdaten...</div>;
    }

    return (
        <div className="weather-calendar-grid">
            <h2>Wetterkalender</h2>
            {weatherData.daily.time.map((date, index) => (
                <div key={index} className="weather-item">
                    {/* Spalte 1: Tag */}
                    <div className="weather-date">
                        <h3>
                            {index === 0
                                ? "Heute"
                                : new Date(date).toLocaleDateString("de-DE", { weekday: "short" })}
                        </h3>
                    </div>

                    {/* Spalte 2: Emoji */}
                    <div className="weather-icon">
                        ☀️
                    </div>

                    {/* Spalte 3: Temperaturen */}
                    <div className="weather-temp">
                        {index === 0 ? (
                            <p>
                                Min: {weatherData.daily.temperature_2m_min[index]}°C | ATM:{" "}
                                {weatherData.current_weather.temperature}°C | Max:{" "}
                                {weatherData.daily.temperature_2m_max[index]}°C
                            </p>
                        ) : (
                            <p>
                                Min: {weatherData.daily.temperature_2m_min[index]}°C | Max:{" "}
                                {weatherData.daily.temperature_2m_max[index]}°C
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

// Hilfsfunktion für Emoji-Anzeige basierend auf Wettercode
function getWeatherEmoji(weatherCode) {
    switch (weatherCode) {
        case 0: // Klar
            return "☀️";
        case 1: // Teilweise bewölkt
            return "⛅";
        case 2: // Bewölkt
            return "☁️";
        case 3: // Regen
            return "🌧️";
        case 4: // Schnee
            return "❄️";
        default:
            return "❓";
    }
}

export default WeatherCalendar;
