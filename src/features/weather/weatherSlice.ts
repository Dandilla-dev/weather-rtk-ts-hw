import {createSlice} from "@reduxjs/toolkit";

export interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: Date;
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: {} as Partial<WeatherInfo>,
    reducers: {
        setWeather: (_, action) => action.payload
    }

})

export const {setWeather} = weatherSlice.actions;

export default weatherSlice.reducer;
