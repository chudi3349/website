import React from 'react'

export default function ProductCard(props) {
    return (
        <>
        <div className="card mb-3 product" style={props.cardStyle}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img 
                    src={props.src} 
                    alt={props.alt}
                    style={props.style} 
                />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-text">{props.text}</div>
                    <p className="card-text"><small className="text-muted">{props.small}</small></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
