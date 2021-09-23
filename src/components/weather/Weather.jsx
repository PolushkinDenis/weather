import React from 'react'
import './Weather.css'

const Weather = ({ weather }) => {

    const getCelsion = (temp) => {
        let celsion = temp - 273.15
        return celsion.toFixed(0)

    }
    const getTime  = (time) => {
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(time * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    }

    return (
        <div className="weather">
            {weather?.main ? (
                <div className="weather__box" >
                    <h2>
                        {weather.name}
                    </h2>
                    <div>
                        Сейчас: {getCelsion(weather.main.temp)} ºC
                    </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                    </div>
                    <div>
                        Восход: { getTime(weather.sys.sunrise)}
                    </div>
                    <div>
                        Закат: { getTime(weather.sys.sunset)}
                    </div>
                </div>
            ) : (
                <div>  </div>
            )}
        </div>
    )
}

export default Weather;
