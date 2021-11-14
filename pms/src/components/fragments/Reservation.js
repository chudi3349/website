import React from 'react'
import { Link } from 'react-router-dom'
import CheckBox from './CheckBox'
import Form from './Form'
import InputForm from './InputForm'
import ReservationTable from './ReservationTable'
import TodayIcon from '@material-ui/icons/Today';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Reservation() {
    return (
        <div className='modalBody reservation bg-dark'>
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
                <div className='reservation__table' >
                <table>
                    <thead className='bg-gold text-light'>
                        <tr>
                            <td>ROOM TYPE</td>
                            <td>RATE</td>
                            <td>NO</td>
                        </tr>
                    </thead>
                    <ReservationTable type='Standard' rate='5000' no='1' />
                    <ReservationTable type='Standard' rate='5000' no='1' />
                    <ReservationTable type='Standard' rate='5000' no='1' />
                </table>
                </div>
                <div className='reservation__right__two'>
                    <div className='form__row' >
                        <InputForm name='Group' value='' Option='title' />
                        <div className='reservation__right__two__charge bg-light' >
                            <input type='text' value='Total Charge'  /> <AttachMoneyIcon className='text-gold' fontSize='large' />
                        </div>
                    </div>
                    <div className='form__column'>
                        <InputForm name='Deposit' value='' Option='title' dollar />
                    </div>
                </div>
                <div className='reservation__right__three' >
                    <div className='reservation__right__three__row bg-light' >
                        <input type='text' value='Arrival'  /> <TodayIcon className='text-gold' fontSize='large' />
                    </div>
                    <div className='reservation__right__three__row bg-light' >
                        <input type='text' value='Departure'  /> <TodayIcon className='text-gold' fontSize='large' />
                    </div>
                </div>
                <div className='reservation__right__four'>
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

export default Reservation
