// import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({ currentWeather, forecastWeather, activeTab, handleSelect}) {

  return (
    <Tabs
      className="mb-3" justify
      activeKey={activeTab} onSelect={handleSelect}
    >
      <Tab eventKey="current" title="Current weather">
        <Data {...currentWeather} />
      </Tab>

      <Tab eventKey="forcast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
