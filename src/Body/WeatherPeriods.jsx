import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({
  currentWeather,
  forecastWeather,
  defaultTab,
  setSelectedTab,
  setForecastDateTimeSelect,
  forecastDateTimeSelect,
}) {
  return (
    <Tabs
      defaultActiveKey={defaultTab}
      className="mb-3"
      justify
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current weather">
        <Data {...currentWeather} />
      </Tab>

      <Tab eventKey="forcast" title="Forecast">
        <ForecastSelect {...forecastWeather}  setForecastDateTimeSelect = {setForecastDateTimeSelect}/>
        <Data {...forecastDateTimeSelect} {...forecastWeather?.city}/>
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
