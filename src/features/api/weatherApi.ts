import {API_KEY, BASE_URL} from "../../utils/constant.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherResponse} from "../../utils/types";



export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherResponse, string>({
            query: (city: string) => `/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi;
// export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
//     'fetch/weather',
//     async city => {
//         const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//         if (!response.ok) {
//             throw new Error('Enter correct city name');
//         }
//         const data = await response.json();
//         return {
//             city: data.name,
//             country: data.sys.country,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: data.sys.sunset * 1000
//         }
//     }
// )