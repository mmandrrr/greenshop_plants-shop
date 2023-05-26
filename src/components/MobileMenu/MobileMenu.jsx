import logo from '../../assets/header/logo-white.svg';
import login from '../../assets/header/login.svg';

const MobileMenu = ({mobile, closeMobile}) => {
    return(
        <section className={mobile}>
            <a href="#header" className="header__logo"><img src={logo} alt="Logo" /></a>
            <nav className="mobile__menu">
                <ul className="mobile__list">
                    <li className="mobile__item"><a href="#" className="mobile__link">Home</a></li>
                    <li className="mobile__item"><a href="#" className="mobile__link">Shop</a></li>
                    <li className="mobile__item"><a href="#" className="mobile__link">Plant Care</a></li>
                    <li className="mobile__item"><a href="#" className="mobile__link">Blogs</a></li>
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