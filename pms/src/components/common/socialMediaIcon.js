import React from 'react'
import { Link } from 'react-router-dom';
import "../layout/hompage/Footer.css"


function SocialMediaIcon(props) {
  const {colorName} = props;
    return (
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={{pathname:'https://web.facebook.com/profile.php?id=100063618788241'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' style={{color:colorName}}/>
            </Link>
            <Link
              className='social-icon-link instagram'
              to={{pathname:'https://www.instagram.com/ejitechlife/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'  style={{color:colorName}} />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={{pathname:'https://www.youtube.com/channel/UCYSwv4m1dWO_4ukMOleKvUA/featured'}}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' style={{color:colorName}} />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{pathname:'https://twitter.com/LifeEji?s=09'}}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' style={{color:colorName}} />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{pathname:'https://www.linkedin.com/in/victorejiofor/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' style={{color:colorName}} />
            </Link>
          </div>
  );
}

export default SocialMediaIcon;
