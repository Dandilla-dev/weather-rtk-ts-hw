
import {useAppSelector} from "../app/hooks.ts";


const Weather = () => {
    const weather = useAppSelector(state => state.weatherInfo);
    const message = useAppSelector(state => state.message);

    if (message) {
        return (
            <div className={'infoWeather'}>
                {message}
            </div>
        );


    } else {
        return (
            <div className={'infoWeather'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
            </div>
        )
    }

}

export default Weather;