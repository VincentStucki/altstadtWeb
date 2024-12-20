import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";
import weatherEmojis from "../data/weatherEmojis.json";

function WeatherCalendar({ season }) {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(weatherEmojis);
    const [location] = useState({ latitude: 47.5, longitude: 8.7167 }); // Winterthur

    useEffect(() => {
        // Wetterdaten laden
        const loadWeatherData = async () => {
            const data = await fetchWeatherData(location.latitude, location.longitude);
            console.log("WetterDaten: ", data)
            setWeatherData(data);
        };
        loadWeatherData();
    }, [location]);

    if (!weatherData) {
        return <div className="loading">Lade Wetterdaten...</div>;
    }

    function weatherPic(wmo) {
        return weatherIcon[wmo]?.day?.image || '';
    }

    return (
        <div className="weather-calendar-grid">
            <h2>Wetterkalender <span className="weather-now">{weatherData.current_weather.temperature}°C</span></h2>
            {weatherData.daily.time.map((date, index) => {
                const minTemp = weatherData.daily.temperature_2m_min[index];
                const maxTemp = weatherData.daily.temperature_2m_max[index];
                const atmTemp = weatherData.current_weather.temperature;
                const wmo = weatherData.daily.weather_code[index];


                // Berechnung der Position des Punktes zwischen Min und Max
                const percent =
                    maxTemp === minTemp ? 0 : ((atmTemp - minTemp) / (maxTemp - minTemp)) * 100;

                return (
                    <div key={index} className="weather-item">
                        {/* Spalte 1: Tag */}
                        <div className="weather-date">
                            <h3>
                                {index === 0
                                    ? "Heute"
                                    : new Date(date).toLocaleDateString("de-DE", { weekday: "short" })}
                            </h3>
                        </div>

                        {/* Spalte 2: Wetter-Bild */}
                        <div className="weather-icon">
                            <img src={weatherPic(wmo)} alt="weather" />
                        </div>

                        {/* Spalte 3: Wetterbeschreibung und Temperaturen */}
                        <div className="weather-temp">
                            {index === 0 ? (
                                <>
                                    <div className="temp-bar-container">
                                        <span className="temp-label">{minTemp}°C</span>
                                        <div className={`temp-bar ${season}-balken`}>
                                            <div
                                                className={`temp-bar-point ${season}-balken`}
                                                style={{ left: `${percent}%` }}
                                            />
                                        </div>
                                        <span className="temp-label">{maxTemp}°C</span>
                                    </div>
                                </>
                            ) : (
                                <p>
                                    <span className="temp-label">Min: {minTemp}°C | Max: {maxTemp}°C</span>
                                </p>
                            )}
                        </div>

                    </div>
                );
            })}
        </div>
    );
}

export default WeatherCalendar;
