import React from "react";
import './Home.css';
import WeatherNew from "./WeatherNew";


export default function Home() {
    const defaultCities = ['oslo', 'lillehammer', 'hamar', 'gjovik', 'trondheim'];
    return (
        <div className="home">
            <h1>Populære Steder</h1>
            <div className="outer-container">
            {defaultCities.map((cityName, index) => (
                    <WeatherNew key={index} cityName={cityName} />
            ))}
            </div>
        </div>
    )
}