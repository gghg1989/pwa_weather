import React, {useState} from "react";
import { fetchWeather } from "./api/fetchWeather";

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async(e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }
    return(
        <div>
            <h1>PWA Weather</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {/* <input
                type='button'
                value='Search'
                onClick={search}
            /> */}
            {weather.main && (
                <div>
                    <h2>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <img src={'https://api.openweathermap.org/img/wn/'+ weather.weather[0].icon + '@2x.png'} alt={weather.weather[0].description}></img>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App;