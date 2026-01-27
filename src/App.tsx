import {BrowserRouter, Route} from 'react-router-dom'

import MainPage from './pages/MainPage'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Route path="/" element={<MainPage />} />
    </BrowserRouter>
  )
}

export default App
