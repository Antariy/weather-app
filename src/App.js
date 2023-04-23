import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import Contact from './Contact';
import { useEffect, useState } from 'react';
import { getCurrentWeather, getForcastWeather } from '../src/services/apiService';
import ErrorModal from '../src/ErrorModal';


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentWeather(weather);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
    getForcastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);

 
  return (
    <Container >
      <Header />
      <Routes>
        <Route path='/' element={<Weather currentWeather = {currentWeather} forecastWeather={forecastWeather}/>} />
        <Route path='/forecast/:listIndex' element={<Weather currentWeather = {currentWeather} forecastWeather={forecastWeather} />} />
        <Route path='/forecast' element={<Weather currentWeather = {currentWeather} forecastWeather={forecastWeather}/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <ErrorModal
        handleClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </Container>
  );
}

export default App;
