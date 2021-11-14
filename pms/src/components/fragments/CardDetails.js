import React from 'react'

function CardDetails({icon, value}) {
    return (
        <div className='cardDetails bg-light'>
            {icon}
             <input type='text' value={value} />
        </div>
    )
}

export default CardDetails
