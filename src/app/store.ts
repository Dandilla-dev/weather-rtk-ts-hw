import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../features/weather/weatherSlice";
import message from "../features/message/messageSlice";

export const store = configureStore({
    reducer: {
        weatherInfo, message
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch