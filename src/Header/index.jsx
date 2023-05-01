import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import { FORECAST_DATE_FORMAT } from "../constants"



function Header({ list }) {
  return (
    <Navbar bg="primary" variant="dark" expand="sm">
      <Container>
        <Link to="/weather-app" className='navbar-brand'>
          <img
            alt=""
            src="/weather-app//logo.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
          />&nbsp;
          Weather App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/weather-app/contact" className="nav-link">
              Contact{' '}
            </Link>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              {list?.map(({ dt }, index) => (
                <Link to={`/weather-app/forecast/${index}`} className="dropdown-item" key={index} >
                  {moment.unix(dt).format(FORECAST_DATE_FORMAT)}
                </Link>
              ))};
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 
