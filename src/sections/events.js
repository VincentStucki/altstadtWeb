import React, { useEffect, useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Events = ({ season }) => {
    const [events, setEvents] = useState([]);
    const [flippedIndex, setFlippedIndex] = useState(null);

    // API-Aufruf
    const fetchOrte = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/events?populate=*');
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
            setEvents(data);
        };
        loadOrte();
    }, []);

    const handleCardClick = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className={`navbar ${season}-bg`}>
                <ul>
                    <div className="nav-links">
                        <li><Link to="/" className="nav-btn">Home</Link></li>
                    </div>
                </ul>
            </nav>

            {/* Hauptinhalt der Events-Seite */}
            <section className={`section ${season}-bg event-background ${season}`}>
                <h1>Events</h1>
                <p>Hier finden Sie eine Übersicht der aktuellen Veranstaltungen in der Altstadt Winterthur.</p>

                <div className="events-container">
                    {events.map((event, index) => (
                        <div
                            className={`event-card ${flippedIndex === index ? 'flipped' : ''}`}
                            key={index}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="event-card-inner">
                                {/* Vorderseite */}
                                <div className="event-card-front">
                                    <img
                                        src={`http://localhost:1337${event.picture.url}`}
                                        alt={event.title}
                                        className="event-image"
                                    />
                                    <h2>{event.title}</h2>
                                    <p><FontAwesomeIcon icon={faCalendarAlt} /> {event.data.date}</p>
                                    <p><FontAwesomeIcon icon={faClock} /> {event.data.beginn}</p>
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.data.ort}</p>
                                </div>
                                {/* Rückseite */}
                                <div className="event-card-back">
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;
