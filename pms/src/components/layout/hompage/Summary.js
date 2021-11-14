import React from 'react'

export default function Summary(props) {
    return (
        <div className="card text-center" style={{
                width: '80%',
                marginLeft: '10%'
            }}>
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body" >
                {props.content}
            </div>
        </div>
    )
}
