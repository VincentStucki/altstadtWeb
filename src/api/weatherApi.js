import axios from "axios";
//https://api.open-meteo.com/v1/forecast?latitude=47.5&longitude=8.7167&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe/Zurich
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const fetchWeatherData = async (latitude, longitude) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                latitude: latitude,
                longitude: longitude,
                current_weather: true,
                daily: "temperature_2m_max,temperature_2m_min,sunrise,sunset",
                timezone: "Europe/Zurich",
            },
        });
        return response.data; // Liefert tägliche Wettervorhersage
    } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
        return null;
    }
};
