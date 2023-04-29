import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";
import { useSelector } from "react-redux";


function WeatherPeriods({
  forecastWeather,
  selectedTab,
  setSelectedTab,
}) {
  const currentWeather = useSelector((state) => state.currentWeather)

  return (
    <Tabs
      defaultActiveKey={selectedTab}
      className="mb-3"
      justify
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current weather">
        <Data {...currentWeather} selectedTab={selectedTab} />
      </Tab>

      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
        <Data  {...forecastWeather?.city} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
