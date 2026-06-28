import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: 'Enter city name',
    reducers: {
        setMessage: (_, action) => action.payload
    }
})

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;