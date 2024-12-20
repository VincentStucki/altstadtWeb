import logo from './logo.svg';
import './App.css';
import './style.css';

import Carousel from './sections/carousel.js';
import Orte from './sections/orte.js';
import Geschichte from './sections/geschichte.js';
import Erkundung from './sections/erkundung.js';
import Karte from './sections/karte.js';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import SeasonSelector from './SeasonSelector.js';
import WeatherCalendar from './sections/weatherCalendar.js';
import { fetchWeatherData } from './api/weatherApi.js'

function App() {
  const [location] = useState({ latitude: 47.5, longitude: 8.7167 }); // Winterthur
  const [weatherData, setWeatherData] = useState(null);
  const [atmTemp, setAtmTemp] = useState(null);

  useEffect(() => {
    // Wetterdaten laden
    const loadWeatherData = async () => {
      const data = await fetchWeatherData(location.latitude, location.longitude);
      setWeatherData(data);
    };
    loadWeatherData();
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      setAtmTemp(weatherData.current_weather.temperature);
    }
  }, [weatherData]);




  const getCurrentSeason = () => {
    const month = new Date().getMonth(); // 0 = Januar, 11 = Dezember
    if (month >= 2 && month <= 4) return 'spring'; // März bis Mai
    if (month >= 5 && month <= 7) return 'summer'; // Juni bis August
    if (month >= 8 && month <= 10) return 'autumn'; // September bis November
    return 'winter'; // Dezember bis Februarq
  };

  const [season, setSeason] = useState(getCurrentSeason()); // State für die saisonale Auswahl


  return (
    <div>
      <nav className={`navbar ${season}-bg`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#geschichte">Geschichte</a></li>
          <li><a href="#orte">Orte</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#karte">Karte</a></li>
          <li><a href="#weather">{atmTemp ? `${atmTemp}°C` : 'Loading...'} </a></li>

        </ul>

      </nav>

      <header className={`intro ${season}-bg`} id="home">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Altstadt Winterthur
        </motion.h1>
      </header>

      <section className={`section dark history ${season}-bg`} id="geschichte">
        <motion.div className={`history-content ${season}-bg`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Geschichte />

        </motion.div>
      </section>

      <section className={`section ${season}-bg`} id="orte">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Orte season={season} />
        </motion.div>
      </section>

      <section className={`section dark ${season}-bg`} id="video">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Erkundung />
        </motion.div>
      </section>

      <motion.div id="galerie" className={`${season}-bg`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel />
      </motion.div>

      <section className={`section dark ${season}-bg`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Karte />
        </motion.div>
      </section>

      <section className={`section ${season}-bg`} id="weather">
        <WeatherCalendar season={season} />

      </section>
      <SeasonSelector season={season} setSeason={setSeason} />
    </div>
  );
}

export default App;
