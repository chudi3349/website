import React from 'react'

function CheckBox({title}) {
    return (
        <div className="checkbox">
            <input type='checkbox' className='checkbox__input' />
            <h4 className='checkbox__text'> {title} </h4>
        </div>
    )
}

export default CheckBox
