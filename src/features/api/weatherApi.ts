import {API_KEY, BASE_URL} from "../../utils/constant.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfo, WeatherResponse} from "../../utils/types";



export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    // refetchOnFocus: true,
    // refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
            keepUnusedDataFor: 30,
            transformResponse: (data: WeatherResponse) => ({
                city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000
            })
        }),

    })
})

export const {useGetWeatherByCityQuery} = weatherApi;
