import React from 'react'

export default function Summary(props) {
    return (
        <div className="card text-center" style={{
                width: '80%',
                marginTop: '3%',
                marginLeft: '10%',
                marginBottom: '50px'
            }}>
            <h5 className="card-header" style={{color:'blue'}}>{props.title}</h5>
            <div className="card-body" >
                {props.content}
                {props.childern}
            </div>
        </div>
    )
}
