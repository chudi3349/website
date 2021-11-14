import React from 'react'

function ModalTitle({title, onClick, active}) {
    return (
        <div onClick={onClick} className={`modalTitle text-light ${active ? 'bg-dark' : 'bg-gold'}`}>
            <h5> {title} </h5>
        </div>
    )
}

export default ModalTitle
