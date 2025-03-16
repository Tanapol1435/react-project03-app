import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './views/LoginPage.jsx'
import RegisterPage from './views/RegisterPage.jsx'
import HomePage from './views/HomePage.jsx'
import AboutPage from './views/AboutPage.jsx'
import ContactPage from './views/ContactPage.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
