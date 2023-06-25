import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MobileMenu from './components/MobileMenu/MobileMenu';

import { plantsDb } from './db/plants';
import { Plant } from './models/Plant';
import { Cart } from './models/Cart';
import { openMobile, closeMobile } from './services/mobile';

import './styles/App.css';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {

  const [mobile, setMobile] = useState('mobile');
  const [cartArr, setCartArr] = useState([]);
  const [plantsData, setPlantsData] = useState(plantsDb);
  const [productsList, setProductsList] = useState([]);  

  useEffect(() => {
    const cart = new Cart();
    setCartArr([...cart.cart]);
  },[])

  useEffect(() => {
    const newList = [];
    plantsData.map(({id,name,img,price,discountPrice,sale,discount,date,liked,added}) => {
        newList.push(new Plant(id,name,img,price,sale,discount,date,liked,discountPrice,added,cartArr));
    })
    setProductsList([...newList]);
  },[plantsData])

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
            plantsData={plantsData}
            setPlantsData={setPlantsData}
            productsList={productsList}
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
