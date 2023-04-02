import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import WeatherPeriods from './WeatherPeriods';
import SideBar from './SideBar';
import './Body.scss';


function Body() {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleShow = () => setShowSideBar(true);

    return ( 
    <>
    <div className="my-3">
    <Button variant="primary" onClick={handleShow}>
        Search
      </Button>
    </div>
    <Row>
       <Col md={4}>
        <WeatherPeriods />
        </Col>
       <Col md={8}>
        <div className="map-example"></div>
       </Col>
    </Row>
    <SideBar show = {showSideBar} handleClose={() => setShowSideBar(false) }/>
    </>
    );
}

export default Body;