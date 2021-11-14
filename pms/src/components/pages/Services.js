import React, { useState } from 'react'
import ServiceBox from "../common/ServiceBox";
import SmallResolution from './SmallResolution';
import Webdesign from "../layout/images/webdesign.png";
import Hotel from "../layout/images/hotelapp.png";
import Keylock from "../layout/images/keylock.jpg";
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
    const [services, setservices] = useState({
        cardTitle: "WEB DESIGN AND DEVELOPMENT",
        textValue: "Unique Experience at Your Fingertips.",
        textButton: "Learn More"
    })

    const [secondService, setSecondService] = useState({
        cardTitle: "HOTEL MANAGEMENT WEBAPP",
        textValue: "Smooth Operations for your Hotel Business.",
        textButton: "Learn More"
    })

    const [thirdService, setThirdService] = useState({
        cardTitle: "ELETRIC KEYLOCK  SETUP",
        textValue: "Stay Strong in Business.",
        textButton: "Learn More"
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
            <h1>Services </h1>
                <div className="card " style={{
                        width: '80%',
                        marginLeft: '10%'
                    }}>
                    <h5 className="card-header">Dedicated to Your Success</h5>
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
                    marginLeft: '40px'
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
        </div>
    )
}
