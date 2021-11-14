import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function InputForm({name, value, Option, icon, dollar}) {
    return (
        <div className='inputForm'>
            <label htmlFor={Option} className='bg-gold text-light inputForm__label'> {name} </label>
            <span className='input__icon'>
                <input type='text' className='inputForm__input' value={value} name={Option} id={Option} /> 
                {icon && <span  className='text-gold icon__text'> @ </span>}
                {dollar && <span  className='text-gold icon__text'> <AttachMoneyIcon className='text-gold' fontSize='large' /> </span>}
            </span>

        </div>
    )
}

export default InputForm
