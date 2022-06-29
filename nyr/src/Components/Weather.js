import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    fetchWeather, fetchOsloWeather, fetchLillehammerWeather, fetchHamarWeather, fetchTrondheimWeather, fetchGjovikWeather 
} from "../features/weather";
import { useState, useEffect } from "react";
import { 
    selectTemp, selectWeather, selectOsloTemp, selectOsloWeather, selectLillehammerTemp, selectLillehammerWeather, selectHamarTemp, selectHamarWeather, selectTrondheimTemp, selectTrondheimWeather, selectGjovikTemp, selectGjovikWeather
 } from "../features/weather";
import sunIcon from "../Images/sun-icon.svg";
import rainIcon from "../Images/rain-icon.svg";
import snowIcon from "../Images/snow-icon.svg";
import cloudsIcon from "../Images/clouds-icon.svg";


export default function Weather() {
    const dispatch = useDispatch();

    const osloTemp = useSelector(selectOsloTemp);
    const osloWeather = useSelector(selectOsloWeather);
    const osloIcon = () => {
        if (osloWeather === 'Clear') {
            return sunIcon;
        } else if (osloWeather === 'Clouds') {
            return cloudsIcon;
        } else if (osloWeather === 'Rain') {
            return rainIcon;
        } else if (osloWeather === 'Snow') {
            return snowIcon;
        }
    }

    const lillehammerTemp = useSelector(selectLillehammerTemp);
    const lillehammerWeather = useSelector(selectLillehammerWeather);
    const lillehammerIcon = () => {
        if (lillehammerWeather === 'Clear') {
            return sunIcon;
        } else if (lillehammerWeather === 'Clouds') {
            return cloudsIcon;
        } else if (lillehammerWeather === 'Rain') {
            return rainIcon;
        } else if (lillehammerWeather === 'Snow') {
            return snowIcon;
        }
    }

    const hamarTemp = useSelector(selectHamarTemp);
    const hamarWeather = useSelector(selectHamarWeather);
    const hamarIcon = () => {
        if (hamarWeather === 'Clear') {
            return sunIcon;
        } else if (hamarWeather === 'Clouds') {
            return cloudsIcon;
        } else if (hamarWeather === 'Rain') {
            return rainIcon;
        } else if (hamarWeather === 'Snow') {
            return snowIcon;
        }
    }

    const trondheimTemp = useSelector(selectTrondheimTemp);
    const trondheimWeather = useSelector(selectTrondheimWeather);
    const trondheimIcon = () => {
        if (trondheimWeather === 'Clear') {
            return sunIcon;
        } else if (trondheimWeather === 'Clouds') {
            return cloudsIcon;
        } else if (trondheimWeather === 'Rain') {
            return rainIcon;
        } else if (trondheimWeather === 'Snow') {
            return snowIcon;
        }
    }

    const gjovikTemp = useSelector(selectGjovikTemp);
    const gjovikWeather = useSelector(selectGjovikWeather);
    const gjovikIcon = () => {
        if (gjovikWeather === 'Clear') {
            return sunIcon;
        } else if (gjovikWeather === 'Clouds') {
            return cloudsIcon;
        } else if (gjovikWeather === 'Rain') {
            return rainIcon;
        } else if (gjovikWeather === 'Snow') {
            return snowIcon;
        }
    }

    useEffect(() => {
        dispatch(fetchOsloWeather())
        dispatch(fetchLillehammerWeather())
        dispatch(fetchHamarWeather())
        dispatch(fetchTrondheimWeather())
        dispatch(fetchGjovikWeather())
    }
    , []);

    return (
        <div className="outer-container">
                <div className="inner-container">
                    <h2>Oslo</h2>
                    <div className="weather-container">
                            <img src={osloIcon()} alt="sun-icon" className="weather-icon" />
                            <p>{osloTemp}°</p>
                    </div>
                </div>
                <div className="inner-container">
                    <h2>Lillehammer</h2>
                    <div className="weather-container">
                            <img src={lillehammerIcon()} alt="sun-icon" className="weather-icon" />
                            <p>{lillehammerTemp}°</p>
                    </div>
                </div>
                <div className="inner-container">
                    <h2>Hamar</h2>
                    <div className="weather-container">
                            <img src={hamarIcon()} alt="sun-icon" className="weather-icon" />
                            <p>{hamarTemp}°</p>
                    </div>
                </div>
                <div className="inner-container">
                    <h2>Gjøvik</h2>
                    <div className="weather-container">
                            <img src={gjovikIcon()} alt="sun-icon" className="weather-icon" />
                            <p>{gjovikTemp}°</p>
                    </div>
                </div>
                <div className="inner-container">
                    <h2>Trondheim</h2>
                    <div className="weather-container">
                            <img src={trondheimIcon()} alt="sun-icon" className="weather-icon" />
                            <p>{trondheimTemp}°</p>
                    </div>
                </div>
            </div>
    )
}










