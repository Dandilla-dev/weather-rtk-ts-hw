import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "city",
    initialState: '',
    reducers: {
        putCity: (_, action) => action.payload,
        clearCity: () => ''
        }

})

export const {putCity, clearCity} = citySlice.actions
export default citySlice.reducer