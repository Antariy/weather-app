import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import WeatherToday from './WeatherToday';
import WeatherTomorrow from './WeatherTomorrow';
import WeatherWeek from './WeatherWeek';


function TabWeatherPeriod() {
  const [key, setKey] = useState('today');

  return (
    <Tabs
      id="tab-weather-period"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="today" title="Сегодня">
        <WeatherToday />
      </Tab>
      <Tab eventKey="tomorrow" title="Завтра">
        <WeatherTomorrow />
      </Tab>
      <Tab eventKey="week" title="Неделя">
        <WeatherWeek />
      </Tab>
    </Tabs>
  );
}

export default TabWeatherPeriod;