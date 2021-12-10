import React from 'react';
import {HomePageButton} from './HomePageButton';
import '../../../App.css';
import './HeroSection.css';
import './HomePageButton.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Build a Successful Hotel Business</h1>
      <p>Life is worth living</p>
      <div className='hero-btns'>
        <HomePageButton className='btns' buttonStyle='btn--outline' buttonSize='btn--large' linkdirectory='/about'>
          <h3>ABOUT US</h3>
        </HomePageButton>
      </div>
      <div className='hero-btns'>
        <HomePageButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large' linkdirectory='/form'>
          <h3>CONTACT US</h3>
        </HomePageButton>
      </div>
    </div>
  )
}

export default HeroSection;
