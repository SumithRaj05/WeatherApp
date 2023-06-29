import './Table.css'

export default function Table(props) {
    return (
        <>
            <table className='ExtTable'>
                <tbody>
                    <tr>
                        <td>Location</td>
                        <td>{props.ExtData.location.name}/{props.ExtData.location.region}</td>
                    </tr>
                    <tr>
                        <td>Temperature (&deg;C)</td>
                        <td>{props.ExtData.current.temp_c}</td>
                    </tr>
                    <tr>
                        <td>Temperature (F)</td>
                        <td>{props.ExtData.current.temp_f}</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{props.ExtData.current.humidity}</td>
                    </tr>
                    <tr>
                        <td>Pressure (in)</td>
                        <td>{props.ExtData.current.pressure_in}</td>
                    </tr>

                    <tr>
                        <td>Precipitation (mm)</td>
                        <td>{props.ExtData.current.precip_mm}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed (kph)</td>
                        <td>{props.ExtData.current.wind_kph}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed (mph)</td>
                        <td>{props.ExtData.current.wind_mph}</td>
                    </tr>
                    <tr>
                        <td>Wind Direction</td>
                        <td>{props.ExtData.current.wind_dir}</td>
                    </tr>
                    <tr>
                        <td>UV index</td>
                        <td>{props.ExtData.current.uv}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}