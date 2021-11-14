import React from 'react'

function TransactionDetails({name, address, number, email, amount}) {
    return (
        <div className='text-light transactionDetails'>
            <p> Name: {name} </p>
            <p> Address: {address} </p>
            <p> Phone No: {number} </p>
            <p> Email: {email} </p>
            <p> payable: ${amount} </p>
        </div>
    )
}

export default TransactionDetails
