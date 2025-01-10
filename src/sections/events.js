import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const Events = ({ season }) => {
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
            </section>
        </div>
    );
};

export default Events;
