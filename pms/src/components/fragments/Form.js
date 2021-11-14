import React from 'react'
import CommentBox from './CommentBox'
import InputForm from './InputForm'

function Form() {
    return (
        <>
        <div className='form__row' >
            <InputForm name='Title' value='Mr' Option='title' />
            <InputForm name='Gender' value='Male' Option='maleOrFemale' />
        </div>
        <div className='form__column'>
            <InputForm name='Full Name' value='Ejiofor C.V' Option='fullName' />
            <InputForm name='Address' value='Udoggwu Street Abapka' Option='address' />
            <InputForm name='number' value='08035647596' Option='number' />
            <InputForm name='email' value='admin1@gmail.com' Option='email' icon />
            <div>
                <CommentBox />
            </div>
        </div>
        </>
    )
}

export default Form
