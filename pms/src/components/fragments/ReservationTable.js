import React from 'react'

function ReservationTable({type, rate, no}) {
    return (
            
            <tbody className='bg-light text-dark'>
                <tr>
                    <td> {type} </td>
                    <td> {rate} </td>
                    <td> {no} </td>
                </tr>
            </tbody>
    )
}

export default ReservationTable
