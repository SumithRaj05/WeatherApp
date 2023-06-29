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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Geolocation not supported on the device.");
        }
    }, []);

    useEffect(() => {
        if (lat !== null && long !== null) {
            setLoading(true);
            const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${lat},${long}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    props.GetData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
            setLoading(false);
        }
    }, [lat, long]);

    return (
        <>
            {loading && <Loading />}
        </>
    );
};

export default FetchWeather;