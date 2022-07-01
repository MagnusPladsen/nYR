import React from 'react';
import './Footer.css';

const openWeathermap = <a href='https://openweathermap.org' target="_blank" >Openweathermap</a>

export default function Footer() {

    return (
        <div className="footer">
            Data hentet fra {openWeathermap} - Magnus Pladsen &copy; 2022
        </div>
    )
}