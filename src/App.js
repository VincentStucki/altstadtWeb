import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Events from './sections/events.js';
import Carousel from './sections/carousel.js';
import Orte from './sections/orte.js';
import Geschichte from './sections/geschichte.js';
import Erkundung from './sections/erkundung.js';
import Karte from './sections/karte.js';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import SeasonSelector from './SeasonSelector.js';
import WeatherCalendar from './sections/weatherCalendar.js';
import { fetchWeatherData } from './api/weatherApi.js';
import './App.css';
import './style.css';

function App() {
  const [location] = useState({ latitude: 47.5, longitude: 8.7167 }); // Winterthur
  const [weatherData, setWeatherData] = useState(null);
  const [atmTemp, setAtmTemp] = useState(null);

  useEffect(() => {
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
    return 'winter'; // Dezember bis Februar
  };

  const [season, setSeason] = useState(getCurrentSeason()); // State für die saisonale Auswahl
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Router>
      <Routes>
        {/* Hauptseite mit allen Komponenten */}
        <Route
          path="/"
          element={
            <div>
              <nav className={`navbar ${season}-bg`}>
                <ul className={menuActive ? 'active' : ''}>
                  <div className="nav-links">
                    <li><Link to="/" className="nav-btn">Home</Link></li>
                    <li><ScrollLink to="geschichte" smooth={true} duration={500} offset={-50} className="nav-btn">Geschichte</ScrollLink></li>
                    <li><ScrollLink to="orte" smooth={true} duration={500} offset={-50} className="nav-btn">Orte</ScrollLink></li>
                    <li><ScrollLink to="video" smooth={true} duration={500} offset={-50} className="nav-btn">Video</ScrollLink></li>
                    <li><ScrollLink to="galerie" smooth={true} duration={500} offset={-50} className="nav-btn">Galerie</ScrollLink></li>
                    <li><ScrollLink to="karte" smooth={true} duration={500} offset={-50} className="nav-btn">Karte</ScrollLink></li>
                  </div>
                  <div className="right-links">
                    <li><Link to="/events" className="event-button">Events</Link></li>
                    <li><a href="#weather" className="weather-now">{atmTemp ? `${atmTemp}°C` : 'Loading...'}</a></li>
                  </div>
                </ul>

                <div className="hamburger-menu" onClick={toggleMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
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

              <section className={`section history ${season}-bg`} id="geschichte">
                <motion.div
                  className={`history-content ${season}-bg`}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Geschichte />
                </motion.div>
              </section>

              <section className={`section dark ${season}-bg`} id="orte">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Orte season={season} />
                </motion.div>
              </section>

              <section className={`section ${season}-bg`} id="video">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Erkundung />
                </motion.div>
              </section>

              <motion.div id="galerie" className={`section dark ${season}-bg`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Carousel />
              </motion.div>

              <section className={`section ${season}-bg`}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="weather-calendar-container">
                    <div className="map">
                      <Karte />
                    </div>
                    <div className="weather-calendar">
                      <WeatherCalendar season={season} />
                    </div>
                  </div>
                </motion.div>
              </section>

              <section className={`section ${season}-bg app-background ${season}`} id="weather">

              </section>

              <section className={`section ${season}-bg`} id="footer">
                Footer
              </section>

              <SeasonSelector season={season} setSeason={setSeason} />
            </div>
          }
        />

        {/* Separate Route für Events */}
        <Route path="/events" element={<Events season={season} />} />
      </Routes>
    </Router>
  );
}

export default App;
