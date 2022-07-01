import { useSelector } from "react-redux";
import { selectCities } from "../features/userSlice";
import './Home.css';
import Weather from "./Weather";

export default function Home() {

    const userCities = useSelector((state) => selectCities(state));

    return (
        <div className="home">
            <h1>Mine Steder</h1>
            <div className="outer-container">
                {userCities.map((cityName, index) => (
                    <Weather key={index} cityName={cityName} />
                ))}
            </div>
        </div>
    )
}