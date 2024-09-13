import React, { useEffect, useState } from 'react';
import AltstadtAir from './galerie/altstadt_air.jpg';
import AltstadtNight from './galerie/altstadt_Night.jpg';
import AltstadtAlt from './galerie/altstadt_alt.jpg';

function Orte(){

    return (
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
    )
}

export default Orte;