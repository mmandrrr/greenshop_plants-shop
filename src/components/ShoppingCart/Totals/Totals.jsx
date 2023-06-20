import { Link } from 'react-router-dom';
import Button from '../../ServiceElements/Button';

const Totals = () => {
    return(
        <div className="cart__totals">
            <h2 className="cart__title">
                Cart Totals
            </h2>
            <form className="cart__form contact__form">
                <label htmlFor="email">Coupon Apply</label>
                <div>
                    <input type="email" name="email" placeholder="Enter coupon code here..." />
                    <input type="button" value="Apply" />
                </div>
            </form>
            <div className="cart__subtotal cart__totals-item">
                <span>Subtotal</span>
                $2,683.00
                </div>
            <div className="cart__discount cart__totals-item">
                <span>Coupon Discount</span>
                (-) 00.00
            </div>
            <div className="cart__shipping cart__totals-item">
                <span>Shiping</span>
                <div className="cart__shipping-value">
                    $16.00
                    <span>View shipping charge</span>
                </div>
            </div>
            <div className="cart__price cart__totals-item">
                <span>Total</span>
                $2,699.00
            </div>
            <Button 
                text='Proceed To Checkout'
            />
            <Link className="cart__continue" to='/'>Continue Shopping</Link>
        </div>
    )
}

export default Totals