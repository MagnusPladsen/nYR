import React from "react";
import './Home.css';
import Weather from "./Weather";


export default function Home() {
    return (
        <div className="home">
            <h1>Populære Steder</h1>
            <Weather/>
        </div>
    )
}