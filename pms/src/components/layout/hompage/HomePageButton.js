import React from 'react';
import './HomePageButton.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const LINKS =['/form', '/about', '/hotel360'];

export const HomePageButton= ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize,
  linkdirectory
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize =  SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

  const goto = LINKS.includes(linkdirectory)
  ? linkdirectory
  : LINKS[0]
  return(
    <Link to={`${goto}`} className='btn-mobile' target='_blank'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        
      >
        {children}
      </button>
    </Link>
  )
};
