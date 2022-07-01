import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import Weather from './Weather';
import { useDispatch } from "react-redux";
import { setCities } from "../features/userSlice";


export default function SearchPage(props) {

    const hideSearch = props.hideSearch;
    const cityName = props.cityName
    const dispatch = useDispatch();

    const handleAddCity = (e) => {
        e.preventDefault();
        dispatch(setCities(cityName));
        hideSearch();
        
    }

    return (
        <div className="search-page">
            <h1>Søkeresultat:</h1>
            <Weather cityName={cityName} />
            <div className="cta-container">
                <a href="#" className="cta cta-back" onClick={hideSearch}>Fjern</a>
                <a href="#" className="cta cta-add" onClick={handleAddCity}>Legg til i favoritter</a>
            </div>
        </div>
    );
}