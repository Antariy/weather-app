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
    (async () => {
      try {
        const weather = await getCurrentWeather();
        const forecast = await getForcastWeather();
        setCurrentWeather(weather);
        setForecastWeather(forecast);
      } catch (errorMessage) {
        setErrorMessage(errorMessage);
      }
    })();
  }, []);

  const weatherProps = {
    currentWeather,
    forecastWeather,
    setCurrentWeather,
    setForecastWeather
  }

  return (
    <Container >
      <Header {...forecastWeather} />
      <Routes>
        <Route path='/' element={<Weather {...weatherProps} />} />
        <Route path='/forecast/:listIndex' element={<Weather {...weatherProps} />} />
        <Route path='/forecast' element={<Weather {...weatherProps} />} />
        <Route path='/contact' element={<Contact {...weatherProps} />} />
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
