import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import MainPage from './pages/MainPage';
import PolokHoodiePage from './pages/PolokHoodiePage';

import './assets/index.css';

function App() {
  return (
    <BrowserRouter basename="/basszhattyuk">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/polok-hoodie" element={<PolokHoodiePage />} />
        {/*
        <Route path="/elerhetosegek" />
        */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
