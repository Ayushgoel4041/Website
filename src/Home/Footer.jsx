import React from 'react'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter, TbBrandYoutube } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import app from '../img/pay/app.jpg'
import play from '../img/pay/play.jpg'
import visa from '../img/pay/pay.png'
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact'>
                <h1>Contact</h1>
                <h2>Address: <span>Greater Noida , Uttar Pradesh 201306</span></h2>
                <h2>Contact No. : <span>9560496817</span></h2>
                <h2>Hours : <span>24/7</span></h2>
                <h2>Follow Us</h2>
                <div className="icons">
                    <TbBrandFacebook />
                    <TbBrandTwitter />
                    <TbBrandInstagram />
                    <TbBrandLinkedin />
                    <TbBrandYoutube />
                </div>
            </div>
            <div className="about">
                <h1>About</h1>
                <Link to='#'>About Us</Link>
                <Link to='#'>Delivery Information</Link>
                <Link to='#'>Privacy Policy</Link>
                <Link to='#'>Terms & Conditions</Link>
                <Link to='#'>Contact Us</Link>
            </div>
            <div className="my_account">
                <h1>My Account</h1>
                <Link to='#'>Sign In</Link>
                <Link to='#'>View Cart</Link>
                <Link to='#'>My Wishlist</Link>
                <Link to='#'>Track My Order</Link>
                <Link to='#'>Help</Link>
            </div>
            <div className="install">
                <h1>Install App</h1>
                <span>From App Store or Google pLay</span>
                <div className="pay">
                    <button>
                        <img src={app} alt="app store" />
                    </button>
                    <button>
                        <img src={play} alt="play store" />
                    </button>
                </div>
                <span>Secured Payment Gateways</span>
                <img src={visa} alt="visa pay" width={'100%'} />
            </div>


        </div>
    )
}

export default Footer