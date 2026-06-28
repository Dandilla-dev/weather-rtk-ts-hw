import {API_KEY, baseUrl} from "../../utils/constant.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";

export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
    'fetch/weather',
    async city => {
        const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            throw new Error('Enter correct city name');
        }
        const data = await response.json();
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000
        }
    }
)