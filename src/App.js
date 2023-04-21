import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import Contact from './Contact';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/forecast/:listIndex' element={<Weather />} />
        <Route path='/forecast' element={<Weather />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
