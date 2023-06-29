import React, { useState, useEffect } from "react";

const FetchWeather = (props) => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    const success = (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    };

    const error = () => {
        alert("Please enable location to know the weather.");
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Geolocation not supported");
        }
    }, []);

    useEffect(() => {
        if (lat !== null && long !== null) {
            const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${lat},${long}`;

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    props.GetData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [lat, long]);

    return null;
};

export default FetchWeather;
