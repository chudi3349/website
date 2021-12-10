import React from 'react';
import Chudi from "../layout/images/chudi.jpg";
import Buttonbtn from "../common/Buttonbtn";
import "../layout/hompage/Footer.css";
import "./About.scss";
import SocialMediaIcon from '../common/socialMediaIcon';
import Carosel from './Carosel';
import Summary from '../layout/hompage/Summary';
import MissionVission from '../layout/hompage/MissionVission';


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
  const myContent = `
  Our goal is to build an engaged family-like team, a happy work environment where lasting relationships 
  and memories are created. We exist to help businesses succeed by providing management systems tailored to their 
  unique circumastances. We believe in a balanced view of work, time for work, and time for self. Because a simple 
  balanced life reducess work-related stress and produces better work efficiency. Are you passionate and innovative, 
  join us and experience Work-Satisfaction.
  `

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
      <div style={{
        margin:'20px'
      }}>
      <MissionVission />
      <Summary 
        title='Why Join Our Team'
        content= {myContent} 
      />
      </div>
      
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
                <p style={{color:'blue'}}>WhatsApp Number: +234 813 873 3881</p>
            </div>
            <Windowresize />
        </div>
        </div>
      </>  
    );
}
