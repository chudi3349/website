import React, { useState } from 'react'
import ServiceBox from "../common/ServiceBox";
import SmallResolution from './SmallResolution';
import Webdesign from "../layout/images/webdesign.png";
import Hotel from "../layout/images/hotelapp.png";
import Keylock from "../layout/images/keylock.jpg";
import SumarryContent from '../layout/hompage/SumarryContent';
import './services.scss'


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




export default function Services(props) {
  //const {cardTitle, textValue}
  const webContent = `We provide innovative Custom Web Design For High-End Hotels with Customer Relationship 
  Management Systems and channel managers for multiple booking platforms, designed to increase hotel revenue 
  by connecting hotels to customers, managing the many booking sites used for reservation by hotels in real time.`

  const hmsContent = `Eji Tech life services is a hotel management software provider with the mission to provide innovative 
  management systems with the latest technology for businesses. Our goal is to design a hotel management system to help make 
  your work easier, successful, and enjoyable. By providing a management solution that keep track of all transactions, 
  we keep businesses in existence and more importantly, help them thrive, the software is also designed to increase hotel revenue 
  by improving hoteliers’ customer service and giving a unique experience to guests. This results in creating 
  more employment and economic growth because we believe that “Our prosperity as a nation depends upon the personal 
  financial prosperity of each of us as  individuals.”`

  const keyContent = `Eji Tech life services is a hotel management software provider with the mission to provide innovative 
  management systems with the latest technology for businesses. Our goal is to design a hotel management system to help make 
  your work easier, successful, and enjoyable. By providing a management solution that keep track of all transactions, 
  we keep businesses in existence and more importantly, help them thrive, the software is also designed to increase hotel revenue 
  by improving hoteliers’ customer service and giving a unique experience to guests. This results in creating 
  more employment and economic growth because we believe that “Our prosperity as a nation depends upon the personal 
  financial prosperity of each of us as  individuals.”`
    const [services, setservices] = useState({
        cardTitle: "WEB DESIGN AND DEVELOPMENT",
        textValue: "Unique Experience at Your Fingertips.",
        textButton: "Learn More",
        header: `Let's Build Your Web Brand.`,
        content: webContent
    })

    const [secondService, setSecondService] = useState({
        cardTitle: "HOTEL MANAGEMENT WEBAPP",
        textValue: "Smooth Operations for your Hotel Business.",
        textButton: "Learn More",
        header: `Let's Make Your Work Easier`,
        content: hmsContent
    })

    const [thirdService, setThirdService] = useState({
        cardTitle: "ELETRIC KEYLOCK  SETUP",
        textValue: "Stay Strong in Business.",
        textButton: "Learn More",
        header: 'Security Your Home',
        content: keyContent
    })

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
        <div>
           <SmallResolution
           heading='UNIQUE TOUCH'
           subheading='Never Lose Sleep Again'
           className= 'services'
           alignobject='left_align'
          />
            <h3 style={{
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: '20px'
              }}>
              Unique Experience At Your Fingertips
            </h3>
         <div className="card " 
         style={{
                width: '80%',
                marginLeft: '10%',
                marginTop:'3%'
            }}>
              <h5 className="card-header" style={{color:'blue'}}>Dedicated to Your Success</h5>
              <div className="card-body" >
              Our goal is to provide an experience that will result in lasting business relationships. 
              We offer a variety of IT Services/Products based on Your needs. Through research, we
              find out the challenges you face and work with you to satisfy your unique business needs.
              <br />
              <br />
              Anyone can design a website. We build you a brand that will give your website visitors the feeling of guests 
              and treat your guests with a good experience during their stay on your website.
              <br />
              <br />
              We provide Hotel management software modules based on facts from our research on your most
              pressing needs, providing you with the most important business modules for Your operations.
              <br />
              <br />
              We set up Your Electric door Lock keycard system and integrations with management Softwares.
              
              </div>
          </div>
            <div className="container"
                style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                    marginLeft: '10%'
                }}
            >
                <div className="row">
                    <div className="col">
                        <ServiceBox
                        head={'Webdesign'} 
                        {...services} 
                        pic={Webdesign}  
                        />
                    </div>
                    <div className="col">
                        <ServiceBox 
                        {...secondService} 
                        pic={Hotel} />    
                    </div>
                    <div className="col">
                        <ServiceBox 
                        {...thirdService} 
                        pic={Keylock} />
                    </div>
                </div>
            </div>
           <SumarryContent></SumarryContent>
        </div>
    )
}
