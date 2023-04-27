import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import { useState } from 'react';


function Header({ list }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);

  };
  
  return (
    <Navbar bg="primary" variant="dark" expand="sm">
      <Container>
        <Link to="/" className='navbar-brand'>
          <img
            alt=""
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
          />&nbsp;
          Weather App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/contact" className="nav-link">
              Contact{' '}
            </Link>
            <NavDropdown 
              title="Dropdown"
              id="basic-nav-dropdown"
              show={dropdownOpen}
              onClick={toggleDropdown}
            >
              {list?.map(({ dt }, index) => {
                return (
                  <Link
                    to={`/forecast/${index}`}
                    className="dropdown-item"
                    key={index}
                  >
                    {moment.unix(dt).format('DD.MM.HH:mm')}
                  </Link>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 
