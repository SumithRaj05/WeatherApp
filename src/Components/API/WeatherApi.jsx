import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const FetchWeather = (props) => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    const [loading, setLoading] = useState(false);

    const success = (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    };

    const error = () => {
        alert("Please enable location and check internet connection to know the weather.");
    };

    useEffect(() => {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Geolocation not supported on the device.");
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
        if (lat !== null && long !== null) {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${lat},${long}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    props.GetData(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [lat, long]);

    return (
        <>
            {loading && <Loading />}
        </>
    );
};

export default FetchWeather;