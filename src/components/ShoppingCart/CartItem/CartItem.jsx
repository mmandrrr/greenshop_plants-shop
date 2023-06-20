
import { useState } from 'react';
import deleteIcon from '../../../assets/shopping-cart/delete.svg';

const CartItem = ({name,img,price,setCartArr,removeFromCart,cartArr}) => {
    const [quantity, setQuantity] = useState(1);

    const removeItem = () => {
        const newCart = removeFromCart()
        setCartArr([...newCart])
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            removeItem()
        }
    }

    return(
        <div className="cart__item">
            <div className="cart__item-gen-info">
                <img src={img} alt="Item Image" />
                <div className="cart__item-info">
                    {name}
                    <p><span>SKU:</span> 1995751877966</p>
                </div>
            </div>
            <div className="cart__item-price">
                {price}
            </div>
            <div className="cart__item-quantity">
                <button onClick={decreaseQuantity} className="cart__item-decrease">-</button>
                {quantity}
                <button onClick={increaseQuantity} className="cart__item-increase">+</button>
            </div>
            <div className="cart__item-total">
                ${quantity * price.split('$')[1]}.00
                <img onClick={removeItem} src={deleteIcon} alt="Delete" />
            </div>
        </div>
    )
}

export default CartItem