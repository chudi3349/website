import React from 'react'
import { Link } from 'react-router-dom'
import CardDetails from './CardDetails'
import CommentBox from './CommentBox'
import InputForm from './InputForm'
import PaymentOption from './PaymentOption'
import TransactionDetails from './TransactionDetails'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TodayIcon from '@material-ui/icons/Today';
import DialpadIcon from '@material-ui/icons/Dialpad';

function Transaction() {
    return (
         <div className='modalBody'>
            <div className='modalBody__left' >
                <div className='modalBody__left__header' >
                    <h5 className='bg-light modalBody__left__header__title'> TRANSACTIONS</h5>
                    <h6 className='bg-light modalBody__left__header__room'>Room No <br /> 101</h6>
                </div>
                <div className='modalBody__left__body'>
                    <TransactionDetails name='Ejiofor C.V' address='Udoggwu Street Abapka' number={'08035647596'}
                        email='admin1@gmail.com' amount='5000'
                    />
                    <div className='transaction__form'>
                        <InputForm name='Deposit' value='' Option='title' dollar />
                        <InputForm name='Transfer bill' value='' Option='title' />
                    </div>
                    <div>
                        <CommentBox />
                    </div>
                </div>
            </div>
            <div  className='modalBody__right bg-secondary'>
                <h6>Payment Options</h6>
                <div className='modalBody__right__paymentOption' >
                    <PaymentOption label='cash' />
                    <PaymentOption label='bank transfer'  />
                    <PaymentOption label='cheque'  />
                    <PaymentOption label='others'  />
                    <PaymentOption label='POS' />
                </div>
                <div className='modalBody__right__cardDeetails bg-light'>
                    <div className='modalBody__right__cardDeetails__column'>
                        <CardDetails icon={<CreditCardIcon fontSize='small' className='text-gold' />} value='Enter card number' />
                        <CardDetails icon={<AccountCircleIcon fontSize='small' className='text-gold' />} value='card holder' />
                    </div>
                    <div className='modalBody__right__cardDeetails__row' > 
                        <CardDetails icon={<TodayIcon fontSize='small' className='text-gold' />} value='MM/YY' />
                        <CardDetails  icon={<DialpadIcon fontSize='small' className='text-gold' />} value='CVV' />
                    </div>
                   
                </div>
                <div className='modalBody__right__link' >
                    <Link className='text-dark'>return to dashboard </Link>
                </div>
                <div className='modalBody__right__five btn__primary  bg-gold border-0'>
                    <Link className='text-light' to='/'> Deposit </Link>
                </div>
            </div>
        </div>
    )
}

export default Transaction
