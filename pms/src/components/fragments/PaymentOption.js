import React from 'react'

function PaymentOption({label}) {
    return (
        <div className='paymentOption bg-light'>
            <input type='radio' className='text-gold'  />
            <label> {label} </label>
        </div>
    )
}

export default PaymentOption
