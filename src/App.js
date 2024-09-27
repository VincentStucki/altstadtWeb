import logo from './logo.svg';
import './App.css';
import './style.css';
import AltstadtAir from './galerie/altstadt_air.jpg'
import AltstadtNight from './galerie/altstadt_Night.jpg'
import AltstadtAlt from './galerie/altstadt_alt.jpg'
import Carousel from './carousel.js';
import Orte from './orte.js';
import { motion, useAnimation } from 'framer-motion';

function App() {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#geschichte">Geschichte</a></li>
          <li><a href="#orte">Orte</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#karte">Karte</a></li>
        </ul>
      </nav>
      <header className='intro' id="home">
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        Altstadt Winterthur
        </motion.h1>
      </header>

      <section className='section dark history' id="geschichte">
        <motion.div className="history-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        
          <div className="text">
            <h2>Geschichte</h2>
            <p>Ein Überblick über die Altstadt.</p>
          </div>
          <div className="image">
          <img src={AltstadtAir} alt="Geschichte Bild" />
          </div>
        </motion.div>
      </section>

      <section className='section' id="orte">
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <h2>Orte</h2>
        <div className="grid-container">
          <div className="grid-item image">
          <img src={AltstadtNight} alt="in der Nacht" />
          </div>
          <div className="grid-item text">
            <h3>Nacht</h3>
            <p>Das ist in der Nacht</p>
          </div>
          </div>
          <div className="grid-container">
          <div className="grid-item text">
              <h3>Luft</h3>
              <p>Das ist in der Luft</p>
            </div>
            <div className="grid-item image">
              <img src={AltstadtAir} alt="in der Luft" />
            </div>
          </div>
          </motion.div>
      </section>
      
      <section className='section dark' id="video">
      <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div className="content-block">
          <h2>Erkunden Sie die Altstadt</h2>
          <div className="video">
              <video controls>
                <source src="./videos/altstadt_video.mp4" type="video/mp4" />
                Ihr Browser unterstützt kein Video.
              </video>
          </div>
        </div>
        </motion.div>
      </section>
      <motion.div id="galerie"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
      <Carousel />
      </motion.div>
      <section className='section dark'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="map" id="karte">
          <h3>Altstadt auf der Karte</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3373041095627!2d9.037387315675263!3d47.49881247917762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa4a2e5a3be3f%3A0x420b0c58ddad08dd!2sAltstadt%2C%208400%20Winterthur!5e0!3m2!1sen!2sch!4v1601495805947!5m2!1sen!2sch"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Altstadt Karte"
          ></iframe>
        </div>
        </motion.div>
      </section>

      <section className='section'>
        <div className="description">
          <h3>Beschreibung</h3>
          <p>Die Altstadt Winterthur bietet eine reiche Geschichte und viele Sehenswürdigkeiten, die es zu entdecken gilt.</p>
        </div>
      </section>

      
    </div>
  );
}

export default App;
