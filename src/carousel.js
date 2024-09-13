import React, { useEffect, useState } from 'react';
import AltstadtAir from './galerie/altstadt_air.jpg';
import AltstadtNight from './galerie/altstadt_Night.jpg';
import AltstadtAlt from './galerie/altstadt_alt.jpg';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isManual, setIsManual] = useState(false); // Neuer Zustand für manuelle Steuerung
  const totalSlides = 3;

  // Automatischer Wechsel der Folien
  useEffect(() => {
    if (!isManual) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
      }, 3000); // Bildwechsel alle 3 Sekunden

      return () => clearInterval(timer); // Timer beim Unmount löschen
    }
  }, [isManual, totalSlides]);

  
  useEffect(() => {
    if(isManual) {
        const timer = setInterval(() => {
            setIsManual(false)
        }, 1000);
        return () => clearInterval(timer)
    }
  }, [isManual])

  // Manuelle Navigation
  const handlePrevSlide = () => {
    setIsManual(true); // Manuelle Steuerung aktivieren
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setIsManual(true); // Manuelle Steuerung aktivieren
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  return (
    <section className='section'>
      <div>
        <div className="carousel">
          <ul className="slides">
            <input
              type="radio"
              name="radio-buttons"
              id="img-1"
              checked={currentSlide === 1}
              onChange={() => setCurrentSlide(1)}
            />
            <li className="slide-container">
              <div className="slide-image">
                <img src={AltstadtAir} alt="in der Luft" />
              </div>
              <div className="carousel-controls">
                <label onClick={handlePrevSlide} className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label onClick={handleNextSlide} className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <input
              type="radio"
              name="radio-buttons"
              id="img-2"
              checked={currentSlide === 2}
              onChange={() => setCurrentSlide(2)}
            />
            <li className="slide-container">
              <div className="slide-image">
                <img src={AltstadtAlt} alt="Alte Altstadt" />
              </div>
              <div className="carousel-controls">
                <label onClick={handlePrevSlide} className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label onClick={handleNextSlide} className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <input
              type="radio"
              name="radio-buttons"
              id="img-3"
              checked={currentSlide === 3}
              onChange={() => setCurrentSlide(3)}
            />
            <li className="slide-container">
              <div className="slide-image">
                <img src={AltstadtNight} alt="Altstadt bei Nacht" />
              </div>
              <div className="carousel-controls">
                <label onClick={handlePrevSlide} className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label onClick={handleNextSlide} className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <div className="carousel-dots">
              <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
              <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
              <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
