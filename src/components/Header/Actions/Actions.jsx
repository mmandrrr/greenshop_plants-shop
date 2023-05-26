import search from '../../../assets/header/search.svg';
import cart from '../../../assets/header/shoping-cart.svg';
import login from '../../../assets/header/login.svg';

const Actions = () => {
    return(
        <div className="header__actions">
            <img src={search} alt="Search" className="header__search" />
            <div className="header__cart">
                <img  src={cart} alt="Shopping Cart" />
                <span>0</span>
            </div>
            <button className="header__login"><img src={login} alt="Log" />Login</button>
        </div>
    )
}

export default Actions