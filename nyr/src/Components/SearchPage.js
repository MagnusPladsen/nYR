import React, { useState, useEffect } from 'react';
import { fetchWeather, selectTemp, selectWeather } from '../features/weather';
import { useSelector, useDispatch } from 'react-redux';
import sunIcon from "../Images/sun-icon.svg";
import rainIcon from "../Images/rain-icon.svg";
import snowIcon from "../Images/snow-icon.svg";
import cloudsIcon from "../Images/clouds-icon.svg";
import './SearchPage.css';
import './Home.css'

export default function SearchPage(props) {
    const dispatch = useDispatch();

    const hideSearch = props.hideSearch;
    const cityName = props.cityName
    const temp = useSelector(selectTemp)
    const weather = useSelector(selectWeather)

    const icon = () => {
        if (weather === 'Clear') {
            return sunIcon;
        } else if (weather === 'Clouds') {
            return cloudsIcon;
        } else if (weather === 'Rain') {
            return rainIcon;
        } else if (weather === 'Snow') {
            return snowIcon;
        }
    }

    useEffect(() => {
        dispatch(fetchWeather(cityName))
    }, [dispatch, cityName])


    return (
        <div className="search-page">
            <h1>Søkeresultat:</h1>
            <div className="inner-container">
                    <h2>{cityName}</h2>
                    <div className="weather-container">
                        <img src={icon()} alt="weather-icon" className="weather-icon" />
                        <p>{temp}°</p>
                </div>
            </div>
            <div className="cta-container">
                <a href="#" className="cta-back" onClick={hideSearch}>Fjern søk</a>
            </div>
        </div>
    );
}