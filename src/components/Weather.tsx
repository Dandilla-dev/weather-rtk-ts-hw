import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";


const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data: weather, error, isLoading} = useGetWeatherByCityQuery(city, {
        skip: !city,
        refetchOnFocus: true,
        pollingInterval: 1000 * 10,
        skipPollingIfUnfocused: true
    });

    if (!city) {
        return <div className={'infoWeath'}>Enter city name</div>

    }
    if (isLoading) {
        return <div className={'infoWeath'}>Loading...</div>

    }
    if (error) {
        return <div className={'infoWeath'}>Enter correct city name</div>

    }
        return (
              <div className={'infoWeath'}>
                  {!!weather && <>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset*1000).toLocaleTimeString()}</p>
            </>
                  }
                  </div>
        )

}

export default Weather;