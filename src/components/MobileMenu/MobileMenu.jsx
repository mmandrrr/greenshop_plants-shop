import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/header/logo-white.svg';
import login from '../../assets/header/login.svg';

import { scrollToElement } from '../../services/scrollToElement';

const MobileMenu = ({mobile, closeMobile}) => {

    const [scroll, setScroll] = useState('header');

    useEffect(() => {
        scrollToElement(...scroll)
    },[scroll])

    const navigateLink = (item) => {
        closeMobile();
        setScroll(item);
    }

    return(
        <section className={mobile}>
            <Link 
                to="/" 
                onClick={() => navigateLink(['header'])} 
                className="header__logo"
            ><img src={logo} alt="Logo" /></Link>
            <nav className="mobile__menu">
                <ul className="mobile__list">
                    <li className="mobile__item">
                        <Link 
                            onClick={() => navigateLink(['slider'])}
                            to="/" 
                            className="mobile__link"
                        >Home</Link>
                    </li>
                    <li className="mobile__item">
                        <Link 
                            onClick={() => navigateLink(['shop'])}
                            to="/" 
                            className="mobile__link"
                        >Shop</Link>
                    </li>
                    <li className="mobile__item">
                        <Link
                            onClick={() => navigateLink(['care'])}
                            to="/"
                            className="mobile__link"
                        >Plant Care</Link>
                    </li>
                    <li className="mobile__item">
                        <Link 
                            onClick={() => navigateLink(['blog'])}
                            to="/" 
                            className="mobile__link"
                        >Blogs</Link>
                    </li>
                </ul>
            </nav>
            <button className="header__login"><img src={login} alt="Log" />Login</button>
            <div onClick={closeMobile} className="close-btn">
                <span className="close-span"></span>
                <span className="close-span"></span>
            </div>
        </section>
    )
}

export default MobileMenu