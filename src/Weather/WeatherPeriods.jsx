import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";
import { useDispatch } from 'react-redux';
import { setCurrentWeather } from "../services/stateService";

function WeatherPeriods({
  forecastWeather,
  selectedTab,
  setSelectedTab,
}) {
  const dispatch = useDispatch();

  return (
    <Tabs
      defaultActiveKey={selectedTab}
      className="mb-3"
      justify
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current weather">
        <Data {...dispatch(setCurrentWeather)} selectedTab={selectedTab} />
      </Tab>

      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
        <Data  {...forecastWeather?.city} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
