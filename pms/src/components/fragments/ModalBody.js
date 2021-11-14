import React from 'react'
import CheckBox from './CheckBox'
import Form from './Form'
import InputForm from './InputForm'
import {Link} from 'react-router-dom'
import TodayIcon from '@material-ui/icons/Today';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function ModalBody() {
    return (
        <div className='modalBody bg-dark'>
            <div className='modalBody__left' >
                <div className='modalBody__left__header' >
                    <h5 className='bg-light modalBody__left__header__title'> GUEST PROFILE</h5>
                    <h6 className='bg-light modalBody__left__header__room'>Room No <br /> 101</h6>
                </div>
                <div className='modalBody__left__body'>
                    <Form />
                </div>
            </div>
            <div  className='modalBody__right bg-secondary'>
                <div className='modalBody__right__0ne' >
                    <InputForm name='Group' value='none' Option='none' />
                    <h6 className='bg-light modalBody__left__header__room'>Room Type <br /> Standard</h6>
                </div>
                <div className='modalBody__right__two'>
                    <div className='modalBody__right__one__input bg-light'>
                        <input type='text' value='check in date'  /> <TodayIcon className='text-gold' fontSize='large' />
                    </div>
                    <div className='modalBody__right__one__input bg-light'>
                        <input type='text' value='5000'  /> <AttachMoneyIcon className='text-gold' fontSize='large' />
                    </div>
                </div>
                <div className='modalBody__right__three' >
                    <div className='modalBody__right__three__discount bg-light' >
                        <input type='text' value='discover amount'  /> <AttachMoneyIcon className='text-gold' fontSize='large' />
                    </div>
                    <div className='modalBody__right__three__percent bg-light' >
                        <span className='text-gold percentage' > % </span> <input type='text' value='0' />
                    </div>
                </div>
                <div className='modalBody__right__four'>
                    <CheckBox title='Service Charge' />
                    <CheckBox title='Value Added Tax' />
                    <CheckBox title='Tourism Tax' />
                </div>
                <div className='modalBody__right__five btn__primary  bg-gold border-0'>
                    <Link className='text-light' to='/'> Check In </Link>
                </div>
            </div>
        </div>
    )
}

export default ModalBody
