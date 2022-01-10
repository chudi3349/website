import React from 'react'
import Vmcards from './Vmcards'
import Mission from "../images/mission.jpg";
import Vision from "../images/vision.jpg";
import Values from "../images/values.jpg";


function MissionVission(props) {
  return (
    <div className='container' style={{marginLeft:'10%'}}>
      <div className="row">
        <Vmcards 
        src={Vision}
        alt='mission'
        content="To help businesses succeed by providing a secured management platform."
      />
  
      <Vmcards 
        src={Mission}
        alt='mission'
        content="To provide innovative management web app with the latest technology for businesses."
      />

        <Vmcards 
        src={Values}
        alt='values'
        content="To Consistently Serve our Customers with Respect, Loyalty, and Integrity."
      />
      </div>
      
    </div>
  )
}

export default MissionVission
