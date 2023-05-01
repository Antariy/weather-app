import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherPeriods from "./WeatherPeriods";
import SideBar from "./SideBar";
import "./Weather.scss";
import Map from "./Map";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../services/stateService";


function Weather() {

  const location = useLocation();
  const defaultTab = "current";
  const [selectedTab, setSelectedTab] = useState(location.pathname.includes("forecast") ? "forecast" : "current");

  const dispatch = useDispatch();
  
  const handleShow = () => dispatch(setShowSideBar(true));

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
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </Col>
        <Col md={8}>
          <Map selectedTab={selectedTab} defaultTab={defaultTab}
           />
        </Col>
      </Row>
      <SideBar
        handleClose={() => dispatch(setShowSideBar(false))}
      />
    </>
  );
}

export default Weather;
