import Post from "./Post/Post";

import logo from '../../assets/header/logo.svg'
import gardenCare from '../../assets/footer/care.svg';
import renovation from '../../assets/footer/renovation.svg';
import watering from '../../assets/footer/watering.svg';
import location from '../../assets/footer/location.svg';
import message from '../../assets/footer/message.svg';
import calling from '../../assets/footer/calling.svg';
import paymentMethods from '../../assets/footer/payement-methods-min.png'

import facebook from '../../assets/footer/social/facebook.svg'
import instagram from '../../assets/footer/social/instagram.svg'
import linkedin from '../../assets/footer/social/linkedin.svg'
import twitter from '../../assets/footer/social/twitter.svg'
import union from '../../assets/footer/social/union.svg'


const Footer = () => {
    return(
        <section className="footer">
            <div className="footer__container container">
                <div className="footer__newsletter">
                    <div className="footer__post-wrapper">
                        <Post 
                            img={gardenCare}
                            title='Garden Care'
                            text='We are an online plant shop offering a wide range of cheap and trendy plants.'
                        />
                        <Post 
                            img={renovation}
                            title='Plant Renovation'
                            text='We are an online plant shop offering a wide range of cheap and trendy plants.'
                        />
                        <Post 
                            img={watering}
                            title='Watering Graden'
                            text='We are an online plant shop offering a wide range of cheap and trendy plants.'
                        />
                    </div>
                    <div className="footer__newsletter-sub">
                        <h3 className="footer__title">
                            Would you like to join newsletters?
                        </h3>
                        <form className="footer__form">
                            <input type="email" name="email" placeholder="enter your email address..." />
                            <input type="button" value="Join" />
                        </form>
                        <p className="footer__text fz_14px-reg">
                            We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
                        </p>
                    </div>
                </div>
                <div className="footer__contacts">
                    <img src={logo} alt="Footer Logo" className="footer__logo" />
                    <Contact 
                        text='70 West Buckingham Ave. Farmingdale, NY 11735'
                        img={location}
                    />
                    <Contact 
                        text='contact@greenshop.com'
                        img={message}
                    />
                    <Contact 
                        text='+88 01911 717 490'
                        img={calling}
                    />
                </div>
                <div className="footer__menu-wrapper">
                    <div className="footer__menus">
                        <nav className="footer__menu">
                            <h3 className="footer__title">My Account</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item"><a href="#" className="footer__list-link">My Account</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Our stores</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Contact us</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Career</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Specials</a></li>
                            </ul>
                        </nav>
                        <nav className="footer__menu">
                            <h3 className="footer__title">Help & Guide</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Help Center</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">How to Buy</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Shipping & Delivery</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Product Policy</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">How to Return</a></li>
                            </ul>
                        </nav>
                        <nav className="footer__menu">
                            <h3 className="footer__title">Categories</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item"><a href="#" className="footer__list-link">House Plants</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Potter Plants</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Seeds</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Small Plants</a></li>
                                <li className="footer__list-item"><a href="#" className="footer__list-link">Accessories</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__media">
                        <div className="footer__social">
                            <h3 className="footer__title">Social Media</h3>
                            <div className="footer__icons">
                                <div className="footer__icon">
                                    <a href="#"><img src={facebook} alt="Facebook" /></a>
                                </div>
                                <div className="footer__icon">
                                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                                </div>
                                <div className="footer__icon">
                                    <a href="#"><img src={twitter} alt="Twitter" /></a>
                                </div>
                                <div className="footer__icon">
                                    <a href="#"><img src={linkedin} alt="Linkedin" /></a>
                                </div>
                                <div className="footer__icon">
                                    <a href="#"><img src={union} alt="Union" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer__payments">
                            <h3 className="footer__title">We accept</h3>
                            <img src={paymentMethods} alt="Payment Methods" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__rights">
                © 2021 GreenShop. All Rights Reserved.
            </div>
        </section>
    )
}

const Contact = ({img,text}) => {
    return(
        <div className="footer__contact">
            <img src={img} alt="Icon" /> {text}
        </div>
    )
}

export default Footer