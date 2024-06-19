import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './inc/header/Navbar';
import Footer from './inc/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Housekeeping from './pages/Housekeeping/Housekeeping';
import OurServices from './pages/ourServices/OurServices';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Housekeeping' element={<Housekeeping />} />
          <Route path='/OurServices' element={<OurServices />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
