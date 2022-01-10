import { element } from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import Summary from './Summary'

function Callus(){
    const contenttext = `Are you a hotel owner, you have invested a lot of money setting up your hotel business, 
    no doubt you deserve a good return on your investment, or Are you a hotel manager you have worked tirelessly 
    to plan and organize your team, do you need some time off? By providing staff training and a simple hotel 
    management system, we keep track of all transactions save you valuable time and help deliver better 
    customer service. We customize our hotel management system to suit your business model automating 
    your manual processes. To take that vacation you need so Much 
    `;
    return(
        <>
        <span>
            <p>{contenttext}</p>
            <Link to='/form' style={{fontSize:'20px'}}>Contact Us O8138733881</Link>
        </span>
        </>
    )
}


export default function SummaryContentTwo(props) {
    return (

        <div>
            <Summary 
                title = 'You Deserve a Vacation'
                content = { <Callus /> }
            />
        </div>
    )
}
