import React from "react";
import logo from "../logo.svg";
import searchIcon from "../Images/search-icon.svg";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo"/>
            <input type="text" placeholder="Søk..." />
            <img src={searchIcon} alt="search-icon" className="search-icon" />
        </nav>
    );
}