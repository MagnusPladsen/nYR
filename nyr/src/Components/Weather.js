import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchWeather, selectWeather
} from "../features/weather";
import { removeCity } from "../features/userSlice";
import { selectCities } from "../features/userSlice";
import cloudsIcon from "../Images/clouds-icon.svg";
import rainIcon from "../Images/rain-icon.svg";
import snowIcon from "../Images/snow-icon.svg";
import sunIcon from "../Images/sun-icon.svg";
import './Weather.css';

const icons = {
    'Clear': sunIcon,
    'Clouds': cloudsIcon,
    'Rain': rainIcon,
    'Snow': snowIcon
}

export default function Weather(props) {
    const dispatch = useDispatch();

    const cityName = props.cityName;
    const userCities = useSelector((state) => selectCities(state));
   
    const weather = useSelector((state) => selectWeather(state, cityName));

    const handleRemoveCity = (e) => {
        const index = userCities.indexOf(cityName);
        dispatch(removeCity(index));
        console.log(index);
    }

    useEffect(() => {
        dispatch(fetchWeather(cityName))
    }
    , []);

    if(!weather) return null

    return (
                <div className="inner-container" draggable="true" onClick={handleRemoveCity}>
                    <h2>{cityName}</h2>
                    <div className="weather-container">
                            <img src={icons[weather.weather]} alt="sun-icon" className="weather-icon" />
                            <p>{(weather.temp) ? weather.temp : 14}°</p>
                            <a href="#">x</a>
                    </div>                       
            </div>
    )
}










