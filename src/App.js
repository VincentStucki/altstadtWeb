import logo from './logo.svg';
import './App.css';
import './style.css';
import AltstadtAir from './galerie/altstadt_air.jpg'
import AltstadtNight from './galerie/altstadt_Night.jpg'
import AltstadtAlt from './galerie/altstadt_alt.jpg'
import Carousel from './carousel.js';
import Orte from './orte.js';

function App() {
  return (
    <div>
      <nav className='navbar'>
          damn
      </nav>
      <header className='intro'>
        <h1>Altstadt Winterthur</h1>
        
      </header>

      <section className='section dark history'>
        <div className="history-content">
          <div className="text">
            <h2>Geschichte</h2>
            <p>Ein Überblick über die Altstadt.</p>
          </div>
          <div className="image">
          <img src={AltstadtAir} alt="Geschichte Bild" />
          </div>
        </div>
      </section>

      <section className='section'>
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
      </section>
      
      <section className='section dark'>
        <div className="content-block">
          <h2>Erkunden Sie die Altstadt</h2>
          <h3>Video über die Altstadt</h3>
          <div className="video">
              <video controls>
                <source src="./videos/altstadt_video.mp4" type="video/mp4" />
                Ihr Browser unterstützt kein Video.
              </video>
          </div>
        </div>
      </section>

      <Carousel />
      <section className='section dark'>
        <div className="map">
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
