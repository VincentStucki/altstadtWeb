import React, { useEffect, useState } from 'react';
import AltstadtAir from '../galerie/altstadt_air.jpg';
import axios from 'axios';

function Geschichte({ season }) {
    const [geschichte, setGeschichte] = useState([]);

    // API-Aufruf
    const fetchOrte = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/geschichtes?populate=*');
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
            setGeschichte(data);
        };
        loadOrte();
    }, []);

    return (
        <>
            {geschichte.map((ge) => (
                <div key={ge.id} className={`text ${season}-bg`}>
                    {/* Zugriff auf Attributes */}

                    <h2>{ge.name}</h2>
                    {/* Beschreibung rendern */}
                    {ge.content && Array.isArray(ge.content) && (
                        <p>
                            {ge.content
                                .map((desc) => desc.children.map((child) => child.text).join(' '))
                                .join(' ')}
                        </p>
                    )}
                </div>
            ))}


            {geschichte.map((ge) => (
                <div key={ge.id} className={`image ${season}-bg`}>

                    {/* Bild rendern */}
                    {ge.image && ge.image.length > 0 && (
                        <img
                            src={`http://localhost:1337${ge.image[0].url}`} // Zugriff auf das erste Bild im Array
                            alt={ge.name}

                        />
                    )}
                </div>
            ))}




        </>
    )
}
export default Geschichte;

