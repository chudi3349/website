import React from 'react';
import './Cards.css';
import Dmatel from '../images/img-1.jpg';
import Psalms from '../images/img-2.jpg';
import Muse from '../images/muse.png';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2 style={{textAlign: 'center'}}>Happy Customers</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Muse}
              text='A distinct, luxury boutique hotel'
              label='Muse Hotel'
              path='/services'
            />
            <CardItem
              src={Dmatel}
              text='A Leading Brand in Nigerian Hospitality for over a decade'
              label='Dmatel Hotel'
              path='/services'
            />
            <CardItem
              src={Psalms}
              text='Have a taste of our hospitality. '
              label='Psalms Hotel'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
