import './Header.css'

export default function Header(props) {
    return (
        <>
            <h2>{props.HeadData.current.condition.text}</h2>
            <div className="TempBox">
                <img alt='' src={props.HeadData.current.condition.icon} className="WeatherIcon" />
                <h2 className="WeatherTemp">{props.HeadData.current.temp_c}&deg;C</h2>
            </div>
            <p className="WeatherUpdated">Last updated on {props.HeadData.current.last_updated}</p>
        </>
    )
}