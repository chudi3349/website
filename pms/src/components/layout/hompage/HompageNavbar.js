import React, {useState} from "react";
import Logo from "../../layout/images/ejitechlogo.png";
import {Link} from "react-router-dom";
import './HomePageNavBar.css'



function HompageNavbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return(
    <>
        <Link to="/" onClick={closeMobileMenu}>
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
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
          </Link>
        </li>
      </ul>
    </>
    )
}

/*
        <li className='nav-item sechide'>
          <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
            SignUp
          </Link>
        </li>
*/
export default HompageNavbar;