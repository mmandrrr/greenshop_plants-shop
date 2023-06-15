import logo from '../../assets/header/logo.svg';
import Burger from '../MobileMenu/Burger';
import Actions from './Actions/Actions';

const Header = ({openMobile}) => {

    return(
        <header id="header" className="header">
            <div className="header__container container">
                <a href="#header" className="header__logo"><img src={logo} alt="Logo" /></a>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item"><a href="#slider" className="header__link">Home</a></li>
                        <li className="header__item"><a href="#shop" className="header__link">Shop</a></li>
                        <li className="header__item"><a href="#care" className="header__link">Plant Care</a></li>
                        <li className="header__item"><a href="#blog" className="header__link">Blogs</a></li>
                    </ul>
                </nav>
                <Burger 
                    openMobile={openMobile}
                />
                <Actions />
            </div>
        </header>
    )
}

export default Header