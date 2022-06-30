import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    fetchWeather
} from "../features/weather";
import { useState, useEffect } from "react";
import { 
    selectTemp, selectWeather
 } from "../features/weather";
import sunIcon from "../Images/sun-icon.svg";
import rainIcon from "../Images/rain-icon.svg";
import snowIcon from "../Images/snow-icon.svg";
import cloudsIcon from "../Images/clouds-icon.svg";
import { store } from '../app/store';


export default function WeatherNew(props) {
    const dispatch = useDispatch();
    const cityName = props.cityName;
   
    const temp = useSelector(selectTemp); // GJØR AT ALLE HAR SAMME TEMP
    const weather = useSelector(selectWeather); // GJØR AT ALLE HAR SAMME WEATHER
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
    }
    , []);

    return (
        <div className="outer-container">
                <div className="inner-container">
                    <h2>{cityName}</h2>
                    <div className="weather-container">
                            <img src={icon()} alt="sun-icon" className="weather-icon" />
                            <p>{temp}°</p>
                    </div>
            </div>
        </div>
    )
}










