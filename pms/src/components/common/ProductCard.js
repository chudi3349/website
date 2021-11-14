import React from 'react'

export default function ProductCard(props) {
    return (
        <>
        <div class="card mb-3 product" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <i className="far fa-address-card"></i>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text"><small class="text-muted">{props.small}</small></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
