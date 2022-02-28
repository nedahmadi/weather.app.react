import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h2>{props.data.city}</h2>
      <ul className="dec">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <br />
        <br />
        <div className="col-6">
          <ul className="description">
            <li>Humidity : {props.data.humidity} %</li>
            <li>Wind : {Math.round(props.data.wind)} km/h </li>
          </ul>
          <img
            className="bear"
            src="https://www.pngkit.com/png/detail/131-1312968_we-bare-bears-we-bare-bears-panda.png"
            width="200"
            alt="bear"
          />

          <br />
        </div>
      </div>
    </div>
  );
}
