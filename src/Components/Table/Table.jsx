import './Table.css'

export default function Table({ ExtData }) {
    console.log(ExtData)
    return (
        <>
            <table className='ExtTable'>
                <tbody>
                    <tr>
                        <td>Location</td>
                        <td>{ExtData.location.name}/{ExtData.location.region}</td>
                    </tr>
                    <tr>
                        <td>Sun Rise</td>
                        <td>{ExtData.forecast.forecastday[0].astro.sunrise}</td>
                    </tr>
                    <tr>
                        <td>Sun Set</td>
                        <td>{ExtData.forecast.forecastday[0].astro.sunset}</td>
                    </tr>
                    <tr>
                        <td>Moon Phase</td>
                        <td>{ExtData.forecast.forecastday[0].astro.moon_phase}</td>
                    </tr>
                    <tr>
                        <td>Temperature (&deg;C)</td>
                        <td>{ExtData.current.temp_c}</td>
                    </tr>
                    <tr>
                        <td>Temperature (F)</td>
                        <td>{ExtData.current.temp_f}</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{ExtData.current.humidity}</td>
                    </tr>
                    <tr>
                        <td>Pressure (in)</td>
                        <td>{ExtData.current.pressure_in}</td>
                    </tr>

                    <tr>
                        <td>Precipitation (mm)</td>
                        <td>{ExtData.current.precip_mm}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed (kph)</td>
                        <td>{ExtData.current.wind_kph}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed (mph)</td>
                        <td>{ExtData.current.wind_mph}</td>
                    </tr>
                    <tr>
                        <td>Wind Direction</td>
                        <td>{ExtData.current.wind_dir}</td>
                    </tr>
                    <tr>
                        <td>UV index</td>
                        <td>{ExtData.current.uv}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}