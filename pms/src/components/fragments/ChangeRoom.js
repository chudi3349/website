import React from 'react'
import { Link } from 'react-router-dom'
import InputForm from './InputForm'

function ChangeRoom() {
    return (
        <div className='changeRoom '>
            <div className='changeRoom__head' >
                    <h5 className='bg-light modalBody__left__header__title'> ROOM TRANSFER</h5>
             </div>
             <div className='changeRoom__body bg-secondary'>
                 <div className='changeRoom__room '>
                     <h6 className='bg-light modalBody__left__header__room'>Room No <br /> 101</h6>
                 </div>
                 <div className='changeRoom__form'>
                        <InputForm name='select New Room' value='' Option='title' />
                        <InputForm name='Amount Payable' value='' Option='title' />
                </div>
             </div>
                <div className='modalBody__right__five btn__primary  bg-gold border-0'>
                    <Link className='text-light' to='/'> Transfer </Link>
                </div>
        </div>
    )
}

export default ChangeRoom
