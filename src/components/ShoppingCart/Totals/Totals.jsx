import { Link } from 'react-router-dom';
import Button from '../../ServiceElements/Button';
import { useEffect, useState } from 'react';

const Totals = ({cartArr,quantityChanged}) => {

    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(10);

    const calculateSubTotal = () => {
        let total = 0;

        if(cartArr.length >= 1) {
            cartArr.forEach(item => {
                
                total += +item.price.split('$')[1] * item.quantity;
            });
        }

        setSubTotal(total);
    }

    const calculateTotal = () => {
        let total = subTotal + shipping;

        setTotal(total);
    }

    useEffect(() => {
        calculateSubTotal();
    },[cartArr,quantityChanged])

    useEffect(() => {
        calculateTotal();
    },[subTotal])

    return(
        <div className="cart__totals">
            <h2 className="cart__title">
                Cart Totals
            </h2>
            <form className="cart__form contact__form">
                <label htmlFor="email">Coupon Apply</label>
                <div>
                    <input id='email' type="email" name="email" placeholder="Enter coupon code here..." />
                    <input type="button" value="Apply" />
                </div>
            </form>
            <div className="cart__subtotal cart__totals-item">
                <span>Subtotal</span>
                ${subTotal}.00
                </div>
            <div className="cart__discount cart__totals-item">
                <span>Coupon Discount</span>
                (-) 00.00
            </div>
            <div className="cart__shipping cart__totals-item">
                <span>Shiping</span>
                <div className="cart__shipping-value">
                    ${shipping}.00
                    <span>View shipping charge</span>
                </div>
            </div>
            <div className="cart__price cart__totals-item">
                <span>Total</span>
                ${total}.00
            </div>
            <Button 
                text='Proceed To Checkout'
            />
            <Link className="cart__continue" to='/'>Continue Shopping</Link>
        </div>
    )
}

export default Totals