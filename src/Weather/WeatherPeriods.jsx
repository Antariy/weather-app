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
  const сurrentWeather = useSelector((state) => state.сurrentWeather)

  return (
    <Tabs
      defaultActiveKey={selectedTab}
      className="mb-3"
      justify
      onSelect={(eventKey) => setSelectedTab(eventKey)}
    >
      <Tab eventKey="current" title="Current weather">
        <Data currentWeather = {сurrentWeather} selectedTab={selectedTab} />
      </Tab>

      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
        <Data  {...forecastWeather?.city} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
