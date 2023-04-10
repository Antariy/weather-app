import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({ currentWeather, forecastWeather }) {
  const [key, setKey] = useState("today");

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" justify>
      <Tab eventKey="current" title="Current weather">
        <Data {...currentWeather} />
      </Tab>

      <Tab eventKey="forcast" title="Forecast">
        <ForecastSelect {...forecastWeather}/>
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
