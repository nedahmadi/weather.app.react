import React, { useState } from "react";

import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "d2ced9a51dfc32ccb0ae22ecfcd93888";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <h1> Weather App for Kids</h1>

        <img
          src="https://www.clipartmax.com/png/full/101-1018861_gifs-de-sol-cartoon-sun-and-clouds.png"
          width="200"
          alt="son"
        />
        <img
          src="https://i.pinimg.com/564x/3a/63/6d/3a636d3a1f7c29f9820c55ca255cc425.jpg"
          width="500"
          alt="kids"
        />

        <p className="text">
          {" "}
          No matter what the weather is, bring your own sunshine.{" "}
        </p>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-50"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "loading..";
  }
}
