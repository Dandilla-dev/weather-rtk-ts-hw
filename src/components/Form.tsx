import {useState} from "react";
import type {SubmitEvent} from "react";
import {fetchWeather} from "../features/api/weatherApi.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input type={'text'} value={city} onChange={e => setCity(e.target.value)}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;