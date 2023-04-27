import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import moment from "moment/moment";



function Header({ list }) {
  console.log(list);

  const getUrl = (el) => {
    const url = `/forecast/${el}`;
    return url;
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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {list?.map(({ dt }, index) => {
                return (
                  <NavDropdown.Item href={getUrl(index)} key={index}>
                    {moment.unix(dt).format('DD.MM.HH:mm')}{' '}
                  </NavDropdown.Item>

                  // <Link to={getUrl(index)} className="dropdown-item">
                  //   {moment.unix(dt).format('DD.MM.HH:mm')}
                  // </Link>
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