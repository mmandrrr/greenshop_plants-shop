import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MobileMenu from './components/MobileMenu/MobileMenu';

import { openMobile, closeMobile } from './services/mobile';

import './styles/App.css';
import Footer from './components/Footer/Footer';

function App() {

  const [mobile, setMobile] = useState('mobile');

  return (
    <>
      <Router>
        <Header 
          openMobile={() => openMobile('mobile open', setMobile)}
        />
        <MobileMenu 
          mobile={mobile}
          closeMobile={() => closeMobile('mobile', setMobile)}
        />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
