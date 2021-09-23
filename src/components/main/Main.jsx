import React, { useEffect, useState } from "react";
import './Main.css'
import Weather from '../weather/Weather'
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';



const Main = () => {

    const MY__API = "833d126842633355dcaa4c641a86c646"
    const [city, setCity] = useState()
    const [weather, setWeather] = useState()

    const getWeather = async () => {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY__API}`)
        const data = await api_url.json()
        setWeather(data)
    }
    


    return (
        <div className="main">
            <div className="input-city">
                <TextField id="filled-basic" label="Город" variant="filled" color="secondary" onChange={e => setCity(e.target.value)} />
                <Button variant="contained" color="secondary" onClick={() => getWeather()}>Найти</Button>
            </div>
           
            <div className="main-weather">

                <Weather weather={weather} />

            </div>
        </div>
    )
}

export default Main;