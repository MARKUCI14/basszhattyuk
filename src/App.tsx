import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';

import MainPage from './pages/MainPage';

import './assets/index.css';

function App() {
  return (
    <BrowserRouter basename="/basszhattyuk">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
