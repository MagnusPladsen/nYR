import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    fetchWeather, weatherSlice
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

const icons = {
    'Clear': sunIcon,
    'Clouds': cloudsIcon,
    'Rain': rainIcon,
    'Snow': snowIcon
}

export default function WeatherNew(props) {
    const dispatch = useDispatch();
    const cityName = props.cityName;
    const key = props.index;
   
    const weather = useSelector((state) => selectWeather(state, cityName));

    const handleTemp = () => {
        if (typeof weather.temp === 'undefined') {
            return '14';
        }   else {
            return weather.temp;
        }
    }
    

    console.log(weather)
    useEffect(() => {
        dispatch(fetchWeather(cityName)) 
    }
    , []);

    return (
        <div className="outer-container">
                <div className="inner-container">
                    <h2>{cityName}</h2>
                    <div className="weather-container">
                            <img src={icons[0]} alt="sun-icon" className="weather-icon" />
                            <p>{handleTemp()}°</p> {/* PROBLEMET ER AT DEN SETTER TEMP OG ICONS FØR DET ER KLART I STATE */}
                    </div>                         {/* SOM DA IGJEN STOPPER APP FRA RENDER, SOM GJØR AT STATE ALDRI BLIR KLAR */}
            </div>
        </div>
    )
}










