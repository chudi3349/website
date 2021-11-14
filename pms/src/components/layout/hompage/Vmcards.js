import React from 'react'
//import './Vmcard.scss';


function Vmcards(props) {
  return (
    <div className="card" 
      style={{
        width: "18rem",
        margin: "30px"
      }}
    >
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  )
}

export default Vmcards



