import React from "react";
import './Home.css';
import Weather from "./Weather";
import WeatherNew from "./WeatherNew";


export default function Home() {
    const defaultCities = ['Oslo', 'Lillehammer', 'Hamar', 'Gjovik', 'Trondheim'];
    return (
        <div className="home">
            <h1>Populære Steder</h1>
            <div className="outer-container">
            {defaultCities.map((cityName, index) => (
                    <WeatherNew key={index} cityName={cityName} />
            ))}
            {/* <Weather /> */}
            </div>
        </div>
    )
}