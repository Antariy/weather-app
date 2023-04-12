import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherPeriods from "./WeatherPeriods";
import SideBar from "./SideBar";
import "./Body.scss";
import { getCurrentWeather, getForcastWeather } from "../services/apiService";
import ErrorModal from "./ErrorModal";

function Body() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleShow = () => setShowSideBar(true);
  const handleShowErrorModal = () => setShowErrorModal(true);

  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    });
    getForcastWeather().then((forecast) => {
      setForecastWeather(forecast);
      console.log("forecast", forecast);
    });
  }, []);

  return (
    <>
      <div className="my-3">
        <Button variant="primary" onClick={handleShow}>
          Search
        </Button>
        &nbsp;
        <Button variant="primary" onClick={handleShowErrorModal}>
          Error Modal
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
        showErrorModal={showErrorModal}
        setShowErrorModal={setShowErrorModal}
      />
    </>
  );
}

export default Body;
