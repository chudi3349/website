import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from "../../layout/images/ejitechlogo.png";
import SocialMediaIcon from '../../common/socialMediaIcon';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          We integrate your keylock with our hotel management web app to give you more control.
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to="/about"><h2>About Us</h2></Link>
          </div>
          <div className='footer-link-items'>
            <Link to="/form"><h2>Contact Us</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
        <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='navbar-logo'
                src={Logo} 
                style={{
                  width: "70px",
                  height: "40px",
                  left: "10px"
                  }} 
                  alt="logo"
              />
            </Link>
          </div>
          <small className='website-rights'>EJITECH © 2021</small>
          <SocialMediaIcon />
        </div>
      </section>

    </div>
  );
}

export default Footer;