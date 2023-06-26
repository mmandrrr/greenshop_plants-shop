import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import Totals from "./Totals/Totals";
import { useEffect, useState } from "react";
import InterestedIn from "./InterestedIn/InterestedIn";

const ShoppingCart = ({cartArr,setCartArr}) => {

    const [products, setProducts] = useState([]);
    const [quantityChanged, setQuantityChanged] = useState({});

    useEffect(() => {
        const newList = cartArr.map(({id,img,name,price,quantity,increaseQuantity,decreaseQuantity,removeFromCart}) => {
            return(
                <CartItem 
                    key={id}
                    img={img}
                    name={name}
                    price={price}
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    setCartArr={setCartArr}
                    removeFromCart={removeFromCart}
                    cartArr={cartArr}
                    setQuantityChanged={setQuantityChanged}
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
                        {cartArr.length >= 1 ? products : <p style={{textAlign: 'center', marginTop: '20px'}}>It's empty...</p>}
                    </div>
                    <Totals 
                        cartArr={cartArr}
                        quantityChanged={quantityChanged}
                    />
                </div>
                <InterestedIn />
            </div>
        </section>
    )
}

export default ShoppingCart