import search from '../../../assets/header/search.svg';
import cart from '../../../assets/header/shoping-cart.svg';
import login from '../../../assets/header/login.svg';

import { Link } from 'react-router-dom';

const Actions = ({cartArr}) => {
    return(
        <div className="header__actions">
            <img src={search} alt="Search" className="header__search" />
            <Link to='/cart'>
                <div className="header__cart">
                    <img  src={cart} alt="Shopping Cart" />
                    <span>{cartArr.length}</span>
                </div>
            </Link>
            <button className="header__login"><img src={login} alt="Log" />Login</button>
        </div>
    )
}

export default Actions