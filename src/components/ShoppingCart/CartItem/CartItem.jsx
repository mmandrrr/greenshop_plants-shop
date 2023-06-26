
import { useEffect, useState } from 'react';
import deleteIcon from '../../../assets/shopping-cart/delete.svg';

const CartItem = ({name,img,price,quantity,increaseQuantity,decreaseQuantity,setCartArr,removeFromCart,setQuantityChanged}) => {
    const [itemQuantity, setItemQuantity] = useState(1);

    useEffect(() => {
        setItemQuantity(quantity)
    },[])

    const removeItem = () => {
        const newCart = removeFromCart()
        setCartArr([...newCart])
    }

    const increaseItemQuantity = () => {
        setItemQuantity(increaseQuantity())
        setQuantityChanged({});
    }

    const decreaseItemQuantity = () => {
        if(itemQuantity > 1) {
            setItemQuantity(decreaseQuantity())
            setQuantityChanged({});
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
                <button onClick={decreaseItemQuantity} className="cart__item-decrease">-</button>
                {itemQuantity}
                <button onClick={increaseItemQuantity} className="cart__item-increase">+</button>
            </div>
            <div className="cart__item-total">
                ${itemQuantity * price.split('$')[1]}.00
                <img onClick={removeItem} src={deleteIcon} alt="Delete" />
            </div>
            <div onClick={removeItem} className="cart__close-btn">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default CartItem