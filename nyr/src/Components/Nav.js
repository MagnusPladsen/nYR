import React from "react";
import logo from "../logo.svg";
import searchIcon from "../Images/search-icon.svg";
import "./Nav.css";
import { useState } from "react";
import SearchPage from "./SearchPage";


export default function Nav() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        let input = e.target.value;
        if (e.key === 'Enter') {
            input = capitalizeFirstLetter(input);
            setSearch(input);
            handleSubmit(e)
            e.target.value = "";
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function hideSearch() {
        setSearch("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <nav>
                <img src={logo} alt="logo" className="logo"/>
                <input type="text" placeholder="Søk..." onKeyDown={handleSearch} />
                <img src={searchIcon} alt="search-icon" className="search-icon" onClick={handleSubmit} />
            </nav>
            {search !== "" ? <SearchPage cityName={search} hideSearch={hideSearch} /> : null}
        </div>
    );
}