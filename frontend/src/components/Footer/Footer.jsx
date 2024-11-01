import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt=""></img>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when on unknown printer took a galley of type and scarmbled it to make typr of specimen book.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=""></img>
                <img src={assets.twitter_icon} alt=""></img>
                <img src={assets.linkedin_icon} alt=""></img>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9175569725</li>
                <li>rohitbichkarudict@gamil.com</li>
            </ul>
        </div>
     </div>
     <hr/>
     <p className='footer-copy-right'>Copyright 2024 © TapN 'dine.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
