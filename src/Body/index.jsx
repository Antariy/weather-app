import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherPeriods from "./WeatherPeriods";
import SideBar from "./SideBar";
import "./Body.scss";
import { getCurrentWeather, getForcastWeather } from "../services/apiService";
import ErrorModal from "../ErrorModal";

function Body() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleShow = () => setShowSideBar(true);
 

  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    }).catch((errorMessage) => setErrorMessage(errorMessage));
    getForcastWeather().then((forecast) => {
      setForecastWeather(forecast);
      console.log("forecast", forecast);
    }).catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);

  return (
    <>
      <div className="my-3">
        <Button variant="primary" onClick={handleShow}>
          Search
        </Button>
      </div>
      <Row>
        <Col md={4}>
          <WeatherPeriods
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
          />
        </Col>
        <Col md={8}>
          <div className="map-example"></div>
        </Col>
      </Row>
      <SideBar
        show={showSideBar}
        handleClose={() => setShowSideBar(false)}
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      />
      <ErrorModal
        handleClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </>
  );
}

export default Body;
