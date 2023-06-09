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
import { setCurrentWeather, setForecastWeather } from "../src/services/stateService";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const currentWeather = useSelector((state) => state.currentWeather);
  const forecastWeather = useSelector((state) => state.forecastWeather);

  useEffect(() => {
    (async () => {
      try {
        const weather = await getCurrentWeather();
        const forecast = await getForcastWeather();
        dispatch(setCurrentWeather(weather));
        dispatch(setForecastWeather(forecast));
      } catch (errorMessage) {
        setErrorMessage(errorMessage);
      }
    })();
  }, [dispatch]);

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
        <Route path='/weather-app' element={<Weather {...weatherProps} />} />
        <Route path='/weather-app/forecast/:listIndex' element={<Weather {...weatherProps} />} />
        <Route path='/forecast' element={<Weather {...weatherProps} />} />
        <Route path='/weather-app/contact' element={<Contact {...weatherProps} />} />
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
