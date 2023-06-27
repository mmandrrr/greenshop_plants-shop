import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/header/logo.svg';
import Burger from '../MobileMenu/Burger';
import Actions from './Actions/Actions';

import { scrollToElement } from '../../services/scrollToElement';

const Header = ({openMobile,cartArr}) => {

    const [scroll, setScroll] = useState('header');

    useEffect(() => {
        scrollToElement(...scroll)
    },[scroll])

    return(
        <header id="header" className="header">
            <div className="header__container container">
                <Link 
                    onClick={() => setScroll(['header'])}
                    to="/" 
                    className="header__logo"
                ><img src={logo} alt="Logo" /></Link>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li 
                            onClick={() => setScroll(['slider'])}
                            className="header__item"
                        >
                            <Link to="/" className="header__link">Home</Link>
                        </li>
                        <li 
                            onClick={() => setScroll(['shop'])}
                            className="header__item"
                        >
                            <Link to="/" className="header__link">Shop</Link>
                        </li>
                        <li 
                            onClick={() => setScroll(['care'])}
                            className="header__item"
                        >
                            <Link to="/" className="header__link">Plant Care</Link>
                        </li>
                        <li 
                            onClick={() => setScroll(['blog'])}
                            className="header__item"
                        >
                            <Link to="/" className="header__link">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <Burger 
                    openMobile={openMobile}
                />
                <Actions 
                    cartArr={cartArr}
                />
            </div>
        </header>
    )
}

export default Header