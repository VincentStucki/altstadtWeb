import React from 'react';
import videoSrc from '../galerie/erkundung.mp4'; // Pfad relativ zum `src`-Ordner

function Erkundung({ season }) {
    return (
        <div className={`content-block ${season}-bg`}>
            <h2>Erkunden Sie die Altstadt</h2>
            <div className={`video ${season}-bg`}>
                <video controls loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Ihr Browser unterstützt kein Video.
                </video>
            </div>
        </div>
    );
}

export default Erkundung;
