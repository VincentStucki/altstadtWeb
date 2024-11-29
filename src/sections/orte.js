import React, { useEffect, useState } from 'react';
import AltstadtAir from '../galerie/altstadt_air.jpg';
import AltstadtNight from '../galerie/altstadt_Night.jpg';
import AltstadtAlt from '../galerie/altstadt_alt.jpg';
import axios from 'axios';

function Orte({ season }) {
    const [orte, setOrte] = useState([]);

    // API-Aufruf
    const fetchOrte = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/ortes?populate=*');
            return response.data.data; // Zugriff auf die verschachtelten Daten
        } catch (error) {
            console.error('Fehler beim Abrufen der Orte:', error);
            return [];
        }
    };

    // Daten laden
    useEffect(() => {
        const loadOrte = async () => {
            const data = await fetchOrte();
            console.log(data)
            setOrte(data);
        };
        loadOrte();
    }, []);

    const renderOrt = (ort) => {
        if (parseInt(ort.ortId) % 2 === 1) {

            return (

                <div key={ort.id} className={`grid-container ${season}-bg`}>
                    {/* Zugriff auf Attributes */}
                    <div className={`grid-item image ${season}-bg`}>
                        {/* Bild rendern */}
                        {ort.image && ort.image.length > 0 && (
                            <img
                                src={`http://localhost:1337${ort.image[0].url}`} // Zugriff auf das erste Bild im Array
                                alt={ort.name}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>
                    <div className={`grid-item text ${season}-bg`}>
                        <h3>{ort.name}</h3>

                        {/* Beschreibung rendern */}
                        {ort.description && Array.isArray(ort.description) && (
                            <p>
                                {ort.description
                                    .map((desc) => desc.children.map((child) => child.text).join(' '))
                                    .join(' ')}
                            </p>
                        )}
                    </div>
                </div>
            )
        }
        else if (parseInt(ort.ortId) % 2 === 0) {
            return (
                <div key={ort.id} className={`grid-container ${season}-bg`}>
                    {/* Zugriff auf Attributes */}
                    <div className={`grid-item text ${season}-bg`}>
                        <h3>{ort.name}</h3>

                        {/* Beschreibung rendern */}
                        {ort.description && Array.isArray(ort.description) && (
                            <p>
                                {ort.description
                                    .map((desc) => desc.children.map((child) => child.text).join(' '))
                                    .join(' ')}
                            </p>
                        )}
                    </div>
                    <div className={`grid-item image ${season}-bg`}>
                        {/* Bild rendern */}
                        {ort.image && ort.image.length > 0 && (
                            <img
                                src={`http://localhost:1337${ort.image[0].url}`} // Zugriff auf das erste Bild im Array
                                alt={ort.name}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>
                </div>
            )
        }
    }


    return (
        <>
            {console.log("season: ", season)}
            {console.log("orte: " + orte)}
            {orte.filter((ort) => ort.saison === season)
                .map((ort) => renderOrt(ort))}
        </>
    )
}

export default Orte;