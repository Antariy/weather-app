import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Data from './Data'

function WeatherPeriods() {
  const [key, setKey] = useState('today');

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="current" title="Current weather">
        <Data />
      </Tab>
      <Tab eventKey="forcast" title="Forecast">
        <Data />
        </Tab>     
    </Tabs>
  );
}

export default WeatherPeriods;