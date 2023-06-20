import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import Totals from "./Totals/Totals";
import { useState } from "react";

const ShoppingCart = ({cartArr,setCartArr}) => {

    const [products, setProducts] = useState([]);
    useState(() => {
        const newList = cartArr.map(({img,name,price,removeFromCart},i) => {
            return(
                <CartItem 
                    key={i}
                    img={img}
                    name={name}
                    price={price}
                    setCartArr={setCartArr}
                    removeFromCart={removeFromCart}
                    cartArr={cartArr}
                />
            )
        });
        setProducts([...newList])

    },[cartArr])

    return(
        <section className="cart">
            <div className="cart__container container">
                <nav className="cart__navigation">
                    <Link to='/'>Home</Link> / Shopping Cart
                </nav>
                <div className="cart__content">
                    <div className="cart__product-list">
                        <div className="cart__titles">
                            <h4 className="cart__list-title">Products</h4>
                            <h4 className="cart__list-title">Price</h4>
                            <h4 className="cart__list-title">Quantity</h4>
                            <h4 className="cart__list-title">Total</h4>
                        </div>
                        {products}
                    </div>
                    <Totals />
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart