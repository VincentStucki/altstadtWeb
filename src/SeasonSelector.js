import React from 'react';
import './SeasonSelector.css';

const SeasonSelector = ({ season, setSeason }) => {
    // Daten für die Jahreszeiten
    const seasonData = [
        { id: 'spring', label: 'Frühling', icon: '🌸' },
        { id: 'summer', label: 'Sommer', icon: '☀️' },
        { id: 'autumn', label: 'Herbst', icon: '🍂' },
        { id: 'winter', label: 'Winter', icon: '❄️' },
    ];

    // Funktion zum Wechseln der Jahreszeit
    const handleNextSeason = () => {
        const currentIndex = seasonData.findIndex((s) => s.id === season);
        const nextIndex = (currentIndex + 1) % seasonData.length;
        setSeason(seasonData[nextIndex].id); // Aktualisiere die Jahreszeit in der App
    };

    return (
        <div className={`season-rotation ${season}1-bg`}>
            <button onClick={handleNextSeason} className="rotation-button">
                <span className="season-icon">
                    {seasonData.find((s) => s.id === season)?.icon}
                </span>
            </button>
        </div>
    );
};

export default SeasonSelector;
