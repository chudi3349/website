import React from 'react';
import Chudi from "../layout/images/chudi.jpg";
import Buttonbtn from "../common/Buttonbtn";
import "../layout/hompage/Footer.css";
import "./About.scss";
import SocialMediaIcon from '../common/socialMediaIcon';
import Carosel from './Carosel';


function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}


function Windowresize(props){
    const windowSize = window.innerWidth;
  if(windowSize > 820){
    return (
      <div className="row">
        <div className="col">
          <Buttonbtn
            adjust= "adjust"
            name="Resume" 
          />
        </div>
          <div className="col socialicon">
            <SocialMediaIcon 
              colorName="black" 
          />
        </div>
      </div>
      );
  } else if (windowSize < 800 && windowSize > 200){
    return(
        <div className="row">
        <div className="col right">
          <Buttonbtn
            adjust= "thirdadjust"
            name="Resume" 
        />
      </div>
      <div className="col secsocialicon">
        <SocialMediaIcon 
          colorName="black" 
        />
      </div>
    </div>
    );
  }

  return ( 
    <div className="row">
      <div className="col right">
        <Buttonbtn
          adjust= "secadjust"
          name="Resume" 
        />
      </div>
      <div className="col secsocialicon">
        <SocialMediaIcon 
          colorName="black" 
        />
      </div>
    </div>
    )
}



export default function About(props) {
  const [dimensions, setDimensions] = React.useState({ 
      height: window.innerHeight,
      width: window.innerWidth
    })
    React.useEffect(() => {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 1000)

      window.addEventListener('resize', debouncedHandleResize)

      return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
      
  }
    })
    return (
      <>
      <Carosel />
        <div className="container">
          <div className='card'>
            <div className="about">
                <img
                id="portfolio"
                src={Chudi}
                alt="My_Picture"
                />
                <h4 style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginTop: '20px'
                  }}>When You Love What You Do You Are Not Working</h4>
                <p>HI THERE! I'M </p>
                <h1>VICTOR EJIOFOR</h1>
                <p>I'm a hotel management software provider and a frontend react web developer.</p>
                <p>
                  Are you dissatisfied with the low quality of service and software provided locally
                   by many hotel management vendors and resellers? We have 
                  <h3 style={{
                      color: '#c69b66'
                    }}>
                      The Remote Control You Need.
                  </h3>  
                   This Business was founded to provide  you with better management software and after-sales services.
                </p>
            </div>
            <Windowresize />
        </div>
        </div>
      </>  
    );
}
