import {API_KEY, baseUrl} from "../../utils/constant.ts";
import {setWeather} from "../weather/weatherSlice.ts";
import {setMessage} from "../message/messageSlice.ts";
import type {useAppDispatch} from "../../app/hooks.ts";

export const fetchWeather = (city: string) => async (dispatch: ReturnType<typeof useAppDispatch>) => {
    try {
        const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json();
        dispatch(setWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: new Date(data.sys.sunset * 1000)
        }));
        dispatch(setMessage(''));
    } catch (e) {
        console.log(e);
        dispatch(setWeather({}));
        dispatch(setMessage('Enter correct city name'));
    }
}