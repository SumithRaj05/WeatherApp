import { useEffect, useState } from 'react';
import './Forecast.css'

export default function Forecast({ DayData }) {

    const [ForecastData, setForecast] = useState(DayData.forecast.forecastday[0].hour);

    useEffect(() => {
        setForecast(DayData.forecast.forecastday[0].hour);
    }, [DayData])


    return (
        <div className='ForecastContainer'>
            {
                ForecastData.map((ele, index) => {
                    return (
                        <div key={index} className='ForecastElement'>
                            <h3 className='ForecastTime'>{ele.time.slice(-5)}</h3>
                            <div className='ForecastWeather'>
                                <img src={ele.condition.icon} className='ForecastIcon' alt='' />
                                <h4 className='ForecastTemperature'>{ele.temp_c} &deg;C</h4>
                            </div>
                            <p className='ForecastText'>{ele.condition.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}