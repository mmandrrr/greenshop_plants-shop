import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MobileMenu from './components/MobileMenu/MobileMenu';

import { Cart } from './models/Cart';
import { openMobile, closeMobile } from './services/mobile';

import './styles/App.css';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [mobile, setMobile] = useState('mobile');
  const [cartArr, setCartArr] = useState([]);
  
  useEffect(() => {
    const cart = new Cart();
    setCartArr([...cart.cart]);
  },[])

  return (
    <>
      <Router>
        <Header 
          openMobile={() => openMobile('mobile open', setMobile)}
          cartArr={cartArr}
        />
        <MobileMenu 
          mobile={mobile}
          closeMobile={() => closeMobile('mobile', setMobile)}
        />

        <Routes>
          <Route path='/' element={<Main 
            cartArr = {cartArr}
            setCartArr={setCartArr}
          />} />
          <Route path='/cart' element={<ShoppingCart 
              cartArr={cartArr}
              setCartArr={setCartArr}
          />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
